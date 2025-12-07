<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui'
import { settingsQuery } from '~/utils/queries'

const route = useRoute()
const { data: settings } = useSanityQuery<any>(settingsQuery)

// Debug: lihat data settings
watchEffect(() => {
  console.log('Settings data:', settings.value)
})

const items = computed<NavigationMenuItem[]>(() => {
  // Default navigation jika belum ada settings
  const defaultNav = [
    { label: 'Home', to: '/', active: route.path === '/' },
    { label: 'Posts', to: '/post', active: route.path.startsWith('/post') }
  ]

  if (!settings.value?.navigation || settings.value.navigation.length === 0) {
    return defaultNav
  }

  return settings.value.navigation.map((item: any) => {
    let to = '/'

    if (item.linkType === 'page' && item.page?.slug?.current) {
      to = `/page/${item.page.slug.current}`
    } else if (item.linkType === 'post' && item.post?.slug?.current) {
      to = `/post/${item.post.slug.current}`
    } else if (item.linkType === 'external' && item.externalUrl) {
      to = item.externalUrl
    }

    return {
      label: item.title,
      to,
      active: route.path === to || route.path.startsWith(to + '/')
    }
  })
})

console.log(settings.value)
</script>

<template>
  <UHeader :title="settings?.siteTitle || settings?.title || 'My Site'">


    <UNavigationMenu :items="items" />

    <template #right>
      <UColorModeButton />
    </template>

    <template #body>
      <UNavigationMenu :items="items" orientation="vertical" class="-mx-2.5" />
    </template>
  </UHeader>
</template>

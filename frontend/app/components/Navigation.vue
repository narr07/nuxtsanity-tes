<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui'

const route = useRoute()

// Query inline langsung
const SETTINGS_QUERY = groq`*[_type == "settings"][0]{
  title,
  navigation[]{
    title,
    linkType,
    page->{slug},
    post->{slug},
    externalUrl
  }
}`

const { data: settings } = useSanityQuery<any>(SETTINGS_QUERY)

const items = computed<NavigationMenuItem[]>(() => {
  // Default navigation jika belum ada settings
  if (!settings.value?.navigation || settings.value.navigation.length === 0) {
    return [
      { label: 'Home', to: '/', active: route.path === '/' },
      { label: 'Posts', to: '/post', active: route.path.startsWith('/post') }
    ]
  }

  return settings.value.navigation.map((item: any) => {
    let to = '/'

    // Resolve URL berdasarkan linkType
    if (item.linkType === 'page' && item.page?.slug?.current) {
      to = `/page/${item.page.slug.current}`
    } else if (item.linkType === 'post') {
      // Untuk linkType post, arahkan ke halaman list post
      to = '/post'
    } else if (item.linkType === 'external' && item.externalUrl) {
      to = item.externalUrl
    }

    return {
      label: item.title,
      to,
      active: route.path === to || (to !== '/' && route.path.startsWith(to))
    }
  })
})
</script>

<template>
  <UHeader :title="settings?.title || 'My Site'">
    <UNavigationMenu :items="items" />

    <template #right>
      <UColorModeButton />

      <!-- <UTooltip text="Open on GitHub" :kbds="['meta', 'G']">
        <UButton
          color="neutral"
          variant="ghost"
          to="https://github.com/nuxt/ui"
          target="_blank"
          icon="i-simple-icons-github"
          aria-label="GitHub"
        />
      </UTooltip> -->
    </template>

    <template #body>
      <UNavigationMenu :items="items" orientation="vertical" class="-mx-2.5" />
    </template>
  </UHeader>
</template>


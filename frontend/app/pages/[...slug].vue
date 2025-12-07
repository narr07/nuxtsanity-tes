

<script setup lang="ts">


// Homepage menggunakan slug 'home' dari page document
const route = useRoute()
const slug = 'home' // Default homepage slug

const PAGE_QUERY = groq`*[_type == "page" && slug.current == $slug][0]{
  title,
  description,
  pageBuilder[]{
    ...,
    _type == "heroSection" => {
      ...,
      buttons[]{
        ...,
        "url": select(
          linkType == "page" => "/page/" + page->slug.current,
          linkType == "post" => "/post/" + post->slug.current,
          linkType == "external" => externalUrl
        )
      }
    }
  }
}`

const { data: page } = await useSanityQuery<any>(PAGE_QUERY, { slug })

const title = computed(() => page.value?.title || 'Home')
const description = computed(() => page.value?.description || '')

useSeoMeta({
  title: () => title.value,
  description: () => description.value,
  ogTitle: () => title.value,
  ogDescription: () => description.value,
  twitterTitle: () => title.value,
  twitterDescription: () => description.value
})
</script>

<template>
  <div v-if="page">
    <PageBuilder :blocks="page.pageBuilder || []" />
  </div>
  <div v-else class="container mx-auto px-4 py-16 text-center">
    <h1 class="text-4xl font-bold mb-4">Welcome</h1>
    <p class="text-muted mb-8">Create a page with slug "home" in Sanity Studio to customize this homepage.</p>
    <UButton to="/studio" label="Go to Studio" />
  </div>
</template>

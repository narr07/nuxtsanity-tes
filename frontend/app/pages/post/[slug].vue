<script setup lang="ts">
import type { SanityDocument } from "@sanity/client";
import { createImageUrlBuilder, type SanityImageSource } from "@sanity/image-url";

const POST_QUERY = groq`*[_type == "post" && slug.current == $slug][0]`;
const { params } = useRoute();

const { data: post } = await useSanityQuery<SanityDocument>(POST_QUERY, params);
const { projectId, dataset } = useSanity().client.config();
const urlFor = (source: SanityImageSource) =>
  projectId && dataset
    ? createImageUrlBuilder({ projectId, dataset }).image(source)
    : null;

// SEO Meta Tags - menggunakan useSeoMeta agar reaktif di client-side
useSeoMeta({
  title: () => post.value?.title || 'Post',
  description: () => post.value?.body?.[0]?.children?.[0]?.text || 'Read this blog post',
  ogTitle: () => post.value?.title,
  ogDescription: () => post.value?.body?.[0]?.children?.[0]?.text,
  ogImage: () => post.value?.image && urlFor(post.value.image)
    ? urlFor(post.value.image)!.width(1200).height(630).url()
    : undefined,
  twitterCard: 'summary_large_image',
  twitterTitle: () => post.value?.title,
  twitterDescription: () => post.value?.body?.[0]?.children?.[0]?.text,
  twitterImage: () => post.value?.image && urlFor(post.value.image)
    ? urlFor(post.value.image)!.width(1200).height(630).url()
    : undefined
});
</script>

<template>
  <div v-if="post">
    <UPage>
      <UPageHeader>
        <template #headline>
          <UButton
            to="/post"
            icon="i-lucide-arrow-left"
            color="neutral"
            variant="link"
            label="Back to posts"
          />
        </template>
      </UPageHeader>

      <UPageBody>
        <UContainer class="prose prose-lg max-w-4xl mx-auto dark:prose-invert">

          <UBlogPost
            :title="post.title"
            :date="post.publishedAt"
            :image="post.image && urlFor(post.image) ? urlFor(post.image)!.width(500).url() : undefined"
            variant="naked"
          >
            <template #body>
              <div class="prose prose-lg max-w-none dark:prose-invert">
                <SanityContent v-if="post.body" :value="post.body" />
              </div>
            </template>
          </UBlogPost>
        </UContainer>
      </UPageBody>
    </UPage>
  </div>
  <div v-else class="container mx-auto min-h-screen max-w-3xl p-8">
    <p class="text-center text-muted">Post not found</p>
  </div>
</template>



<script setup lang="ts">
import type { SanityDocument } from "@sanity/client";
import { createImageUrlBuilder, type SanityImageSource } from "@sanity/image-url";

const projectId = "kdwtvkc2";
const dataset = "production";

const urlFor = (source: SanityImageSource) =>
  projectId && dataset
    ? createImageUrlBuilder({ projectId, dataset }).image(source)
    : null;

const POSTS_QUERY = groq`*[
  _type == "post"
  && defined(slug.current)
]|order(publishedAt desc)[0...12]{_id, title, slug, publishedAt, image}`;

const { data: posts } = await useSanityQuery<SanityDocument[]>(POSTS_QUERY);
</script>

<template>
  <div>
    <UPageHero
      title="Blog Posts"
      description="Discover our latest articles and insights powered by Sanity CMS and Nuxt UI."
    />

    <UPageSection
      id="blog-posts"
      title="Latest Posts"
      description="Browse through our collection of blog posts"
    >
      <UContainer>
        <UBlogPosts v-if="posts && posts.length > 0">
          <UBlogPost
            v-for="post in posts"
            :key="post._id"
            :title="post.title"
            :date="post.publishedAt"
            :to="`/${post.slug.current}`"
            :image="post.image ? urlFor(post.image)!.width(500).url() : undefined"
          />
        </UBlogPosts>
        <div v-else class="text-center py-12">
          <p class="text-muted">No posts available yet.</p>
        </div>
      </UContainer>
    </UPageSection>
  </div>
</template>

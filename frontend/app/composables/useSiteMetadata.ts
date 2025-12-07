export function useSiteMetadata(metadata: {
  title?: string
  description?: string
  ogImage?: string
}) {
  useSeoMeta({
    title: () => metadata.title || 'Nuxt + Sanity Blog',
    description: () => metadata.description || 'A blog powered by Nuxt and Sanity',
    ogTitle: () => metadata.title,
    ogDescription: () => metadata.description,
    ogImage: () => metadata.ogImage,
    twitterCard: 'summary_large_image',
    twitterTitle: () => metadata.title,
    twitterDescription: () => metadata.description,
    twitterImage: () => metadata.ogImage
  })
}

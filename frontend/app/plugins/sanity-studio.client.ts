import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { presentationTool, defineDocuments, defineLocations, type DocumentLocation } from 'sanity/presentation'
import { schemaTypes } from '../../schemas'

export default defineNuxtPlugin((nuxtApp) => {
  const previewUrl = 'http://localhost:3000'

  // Home location for presentation tool
  const homeLocation = {
    title: 'Home',
    href: '/'
  } satisfies DocumentLocation

  // Resolve href for different document types
  function resolveHref(documentType?: string, slug?: string): string | undefined {
    switch (documentType) {
      case 'post':
        return slug ? `/${slug}` : undefined
      default:
        return undefined
    }
  }

  const config = defineConfig({
    plugins: [
      structureTool(),
      visionTool(),
      presentationTool({
        previewUrl: {
          origin: previewUrl,
          previewMode: {
            enable: '/preview/enable',
            disable: '/preview/disable'
          }
        },
        resolve: {
          mainDocuments: defineDocuments([
            {
              route: '/:slug',
              filter: `_type == "post" && slug.current == $slug || _id == $slug`
            }
          ]),
          locations: {
            post: defineLocations({
              select: {
                title: 'title',
                slug: 'slug.current'
              },
              resolve: (doc) => ({
                locations: [
                  {
                    title: doc?.title || 'Untitled',
                    href: resolveHref('post', doc?.slug)!
                  },
                  homeLocation
                ].filter(Boolean) as DocumentLocation[]
              })
            })
          }
        }
      })
    ],
    name: 'nuxtui',
    title: 'Nuxt UI Blog',
    projectId: 'kdwtvkc2',
    dataset: 'production',
    basePath: '/studio',
    schema: {
      types: schemaTypes
    }
  })

  nuxtApp.provide('sanityStudioConfig', config)
})

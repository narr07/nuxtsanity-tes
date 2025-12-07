import { defineField, defineType } from 'sanity'

export const settings = defineType({
  name: 'settings',
  title: 'Settings',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Site Title',
      type: 'string',
      validation: (Rule) => Rule.required()
    }),
    defineField({
      name: 'description',
      title: 'Site Description',
      type: 'text',
      rows: 3
    }),
    defineField({
      name: 'logo',
      title: 'Logo',
      type: 'image',
      options: {
        hotspot: true
      }
    }),
    defineField({
      name: 'navigation',
      title: 'Navigation Items',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'title',
              title: 'Title',
              type: 'string'
            },
            {
              name: 'linkType',
              title: 'Link Type',
              type: 'string',
              options: {
                list: [
                  { title: 'Page', value: 'page' },
                  { title: 'Post', value: 'post' },
                  { title: 'External URL', value: 'external' }
                ]
              }
            },
            {
              name: 'page',
              title: 'Page',
              type: 'reference',
              to: [{ type: 'page' }],
              hidden: ({ parent }) => parent?.linkType !== 'page'
            },
            {
              name: 'externalUrl',
              title: 'External URL',
              type: 'url',
              hidden: ({ parent }) => parent?.linkType !== 'external'
            }
          ]
        }
      ]
    }),
    defineField({
      name: 'footer',
      title: 'Footer',
      type: 'object',
      fields: [
        {
          name: 'text',
          title: 'Footer Text',
          type: 'text',
          rows: 2
        },
        {
          name: 'socialLinks',
          title: 'Social Links',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                {
                  name: 'platform',
                  title: 'Platform',
                  type: 'string',
                  options: {
                    list: [
                      { title: 'GitHub', value: 'github' },
                      { title: 'Twitter', value: 'twitter' },
                      { title: 'LinkedIn', value: 'linkedin' }
                    ]
                  }
                },
                {
                  name: 'url',
                  title: 'URL',
                  type: 'url'
                }
              ]
            }
          ]
        }
      ]
    })
  ]
})

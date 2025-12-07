import { defineType, defineField } from 'sanity'

export const featuresSection = defineType({
  name: 'featuresSection',
  title: 'Features Section',
  type: 'object',
  fields: [
    defineField({
      name: 'heading',
      title: 'Heading',
      type: 'string'
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 2
    }),
    defineField({
      name: 'features',
      title: 'Features',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'icon', title: 'Icon', type: 'string', description: 'Lucide icon name' },
            { name: 'title', title: 'Title', type: 'string' },
            { name: 'description', title: 'Description', type: 'text', rows: 2 }
          ]
        }
      ]
    })
  ],
  preview: {
    select: { title: 'heading', features: 'features' },
    prepare({ title, features }) {
      return { title: `Features: ${title || 'Untitled'}`, subtitle: `${features?.length || 0} items` }
    }
  }
})

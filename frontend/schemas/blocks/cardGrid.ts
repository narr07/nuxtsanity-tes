import { defineType, defineField } from 'sanity'

export const cardGrid = defineType({
  name: 'cardGrid',
  title: 'Card Grid',
  type: 'object',
  fields: [
    defineField({
      name: 'heading',
      title: 'Heading',
      type: 'string'
    }),
    defineField({
      name: 'cards',
      title: 'Cards',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'title', title: 'Title', type: 'string' },
            { name: 'description', title: 'Description', type: 'text' },
            { name: 'icon', title: 'Icon', type: 'string', description: 'Lucide icon name (e.g. i-lucide-star)' },
            { name: 'link', title: 'Link', type: 'string' }
          ]
        }
      ]
    }),
    defineField({
      name: 'columns',
      title: 'Columns',
      type: 'number',
      options: {
        list: [2, 3, 4]
      },
      initialValue: 3
    })
  ],
  preview: {
    select: { title: 'heading', cards: 'cards' },
    prepare({ title, cards }) {
      return { title: `Cards: ${title || 'Untitled'}`, subtitle: `${cards?.length || 0} items` }
    }
  }
})

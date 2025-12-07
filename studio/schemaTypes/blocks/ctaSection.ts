import { defineType, defineField } from 'sanity'

export const ctaSection = defineType({
  name: 'ctaSection',
  title: 'Call to Action',
  type: 'object',
  fields: [
    defineField({
      name: 'heading',
      title: 'Heading',
      type: 'string',
      validation: (Rule) => Rule.required()
    }),
    defineField({
      name: 'text',
      title: 'Text',
      type: 'text',
      rows: 3
    }),
    defineField({
      name: 'buttonText',
      title: 'Button Text',
      type: 'string'
    }),
    defineField({
      name: 'buttonUrl',
      title: 'Button URL',
      type: 'string'
    }),
    defineField({
      name: 'variant',
      title: 'Variant',
      type: 'string',
      options: {
        list: [
          { title: 'Subtle', value: 'subtle' },
          { title: 'Soft', value: 'soft' },
          { title: 'Outline', value: 'outline' }
        ]
      },
      initialValue: 'subtle'
    })
  ],
  preview: {
    select: { title: 'heading' },
    prepare({ title }) {
      return { title: `CTA: ${title}` }
    }
  }
})

import {defineField, defineType} from 'sanity'

export const storiesSection = defineType({
  name: 'storiesSection',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'internationalizedArrayString',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'cards',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'storiesCard'}]}],
    }),
  ],
  preview: {
    select: {
      title: 'title',
    },
    prepare: ({title}) => ({
      title: title?.[1]?.value || 'Untitled',
    }),
  },
})

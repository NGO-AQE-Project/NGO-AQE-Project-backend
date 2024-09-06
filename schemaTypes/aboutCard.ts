import { defineField, defineType } from 'sanity'

export const aboutCard = defineType({
  name: 'aboutCard',
  title: 'About Card',
  type: 'document',
  fields: [
    defineField({
      name: 'subtitle',
      title: 'Subtitle',
      type: 'internationalizedArrayString',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'internationalizedArrayString',
      validation: (rule) => rule.required(),
    }),
  ],
  preview: {
    select: {
      title: 'subtitle',
    },
    prepare: ({title}) => ({
      title: title[0]?.value || 'Без назви',
    }),
  },
})

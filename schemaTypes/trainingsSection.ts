import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'trainingsSection',
  title: 'Trainings Section',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'internationalizedArrayString',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'internationalizedArrayString',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'infoTitle',
      title: 'Info Title',
      type: 'internationalizedArrayString',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'infoButton',
      title: 'Info Button',
      type: 'internationalizedArrayString',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'cards',
      title: 'Cards',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'trainingsCard'}]}],
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

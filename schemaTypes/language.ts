import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'language',
  title: 'Language',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Language Name',
      type: 'string',
    }),
    defineField({
      name: 'code',
      title: 'Language Code',
      type: 'string',
      description: 'The ISO 639-1 language code (e.g., "en" for English)',
    }),
  ],
})

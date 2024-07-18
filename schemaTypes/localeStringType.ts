import {defineField, defineType} from 'sanity'

export const localeString = defineType({
  title: 'Localized String',
  name: 'localeString',
  type: 'object',
  fields: [
    defineField({
      name: 'translations',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {name: 'language', type: 'reference', to: [{type: 'language'}]},
            {name: 'value', type: 'string'},
          ],
        },
      ],
    }),
  ],
  preview: {
    select: {
      translations: 'translations',
    },
    prepare(selection) {
      const {translations} = selection
      return {
        title: translations.length > 0 ? translations[0].value : 'No translation',
      }
    },
  },
})

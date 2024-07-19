import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'example',
  title: 'Example',
  type: 'document',
  fields: [
    defineField({
      name: 'languageSet',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'language',
              type: 'reference',
              to: [{type: 'language'}],
            },
            {
              name: 'field1',
              type: 'string',
            },
            {
              name: 'field2',
              type: 'string',
            },
          ],
        },
      ],
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
    }),
  ],
})

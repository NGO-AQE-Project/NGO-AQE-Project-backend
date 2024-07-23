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
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'field1',
              type: 'string',
              validation: (Rule) => Rule.required().error('Field1 is required.'),
            },
            {
              name: 'field2',
              type: 'string',
              validation: (Rule) => Rule.required().error('Field2 is required.'),
            },
          ],
        },
      ],
      validation: (Rule) => Rule.required().error('At least one language set is required.'),
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      validation: (Rule) => Rule.required().error('Image is required.'),
    }),
  ],
})

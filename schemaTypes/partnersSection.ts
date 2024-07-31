import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'partnersSection',
  title: 'Partners Section',
  type: 'document',
  fields: [
    defineField({
      name: 'titleSet',
      title: 'TitleSet',
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
              name: 'title',
              type: 'string',
              validation: (Rule) => Rule.required().error('Title is required.'),
            },
          ],
        },
      ],
      validation: (Rule) => Rule.required().error('Title is required.'),
    }),
    defineField({
      name: 'partnersArray',
      title: 'Partners Array',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'image',
              title: 'Image',
              type: 'image',
              validation: (Rule) => Rule.required().error('Image is required.'),
            }),
            defineField({
              name: 'descriptionSet',
              title: 'DescriptionSet',
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
                      name: 'description',
                      type: 'string',
                      validation: (Rule) => Rule.required().error('Description is required.'),
                    },
                  ],
                },
              ],
              validation: (Rule) => Rule.required().error('Description is required.'),
            }),
          ],
        },
      ],
      validation: (Rule) => Rule.required().error('At least one partner is required.'),
    }),
  ],
})

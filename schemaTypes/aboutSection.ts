import { defineArrayMember, defineField, defineType } from "sanity";

export const aboutSection = defineType({
  name: 'aboutSection',
  type: 'document',
  fields: [
    defineField({
      name: 'language',
      type: 'string',
      readOnly: true,
      hidden: true,
      validation: rule => rule.required(),
    }),
    defineField({
      name: 'title',
      type: 'string',
      validation: rule => rule.required(),
    }),
    defineField({
      name: 'subsections', 
      type: 'array',
      of: [
        defineArrayMember({
          name: 'subsection',
          type: 'object',
          fields: [
            defineField({
              name: 'title',
              type: 'string',
              validation: rule => rule.required(),
            }),
            defineField({
              name: 'text',
              type: 'array',
              of: [{type: 'block'}],
              validation: rule => rule.required(),
            })
          ]
        })
      ]
    }),
    defineField({
      name: 'image',
      type: 'image',
    })
  ],
  preview: {
    select: {
      title: 'title',
      language: 'language',
    },
    prepare: ({title, language}) => ({title: `${title}(${language})`}),
  }
})

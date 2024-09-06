import { defineArrayMember, defineField, defineType } from "sanity";

export const aboutSection = defineType({
  name: 'aboutSection',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'internationalizedArrayString',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'subsections', 
      type: 'array',
      of: [{type: 'reference', to: [{type: 'aboutCard'}]}],
    }),
    defineField({
      name: 'image',
      type: 'image',
    })
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

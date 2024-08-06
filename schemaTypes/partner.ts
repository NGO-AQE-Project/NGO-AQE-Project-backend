import { defineField, defineType } from "sanity";

export const partner = defineType({
  name: 'partner',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Partner name',
      type: 'internationalizedArrayString',
      validation: rule => rule.required(),
    }),
    defineField({
      name: 'image',
      type: 'image',
      validation: rule => rule.required(),
    }),
  ],
  preview: {
    select: {
      title: 'name'
    },
    prepare: ({title}) => ({
      title: title[0].value || 'Untitled',
    }),
  }
})
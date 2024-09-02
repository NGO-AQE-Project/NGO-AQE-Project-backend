import {defineField, defineType} from 'sanity'

import {aboutSection} from './aboutSection'
import gallerySection from './gallerySection'
import partnersSection from './partnersSection'

export const page = defineType({
  name: 'page',
  type: 'document',
  fields: [
    defineField({
      name: 'language',
      type: 'string',
      readOnly: true,
      hidden: true,
    }),
    defineField({
      name: 'title',
      type: 'string',
    }),
    defineField({
      name: 'logo',
      type: 'image',
    }),
    defineField({
      name: 'aboutSection',
      type: 'reference',
      to: aboutSection,
    }),
    defineField({
      name: 'partersSection',
      type: 'reference',
      to: partnersSection,
    }),
    defineField({
      name: 'gallerySection',
      type: 'reference',
      to: gallerySection,
    }),
  ],
  preview: {
    select: {
      language: 'language',
    },
    prepare: ({language}) => ({title: `Page(${language})`}),
  },
})

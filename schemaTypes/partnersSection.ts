import {defineField, defineType} from 'sanity'
import { partner } from './partner'

export default defineType({
  name: 'partnersSection',
  title: 'Partners Section',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'internationalizedArrayString',  
    }),
    defineField({
      name: 'partners',
      type: 'array',
      of: [{type: 'reference', to: partner}]
    })
  ],
  preview: {
    select: {
      title: 'title',
    },
    prepare: ({title}) => ({title: title[0].value || 'Untitled'})
  }
})

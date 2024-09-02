import {defineField, defineType} from 'sanity'

export const galleryCard = defineType({
  name: 'galleryCard',
  type: 'document',
  fields: [
    defineField({
      name: 'label',
      title: 'Label',
      type: 'internationalizedArrayString',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (rule) => rule.required(),
    }),
  ],
  preview: {
    select: {
      title: 'label',
      media: 'image',
    },
    prepare: ({title, media}) => ({
      title: title?.[1]?.value || 'Untitled',
      media,
    }),
  },
})

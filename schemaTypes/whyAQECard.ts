import { defineField, defineType } from 'sanity';

export const whyAQECard = defineType({
  name: 'whyAQECard',
  type: 'document',
  fields: [
    defineField({
      name: 'subtitle',
      title: 'Subtitle',
      type: 'internationalizedArrayString',
      validation: rule => rule.required(),
    }),
    defineField({
      name: 'text',
      title: 'Text',
      type: 'internationalizedArrayString',
      validation: rule => rule.required(),
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: rule => rule.required(),
    }),
  ],
  preview: {
    select: {
      subtitle: 'subtitle',
      text: 'text',
      media: 'image',
    },
    prepare: ({ subtitle, text, media }) => ({
      title: subtitle?.[0]?.value || 'Untitled',
      subtitle: text?.[0]?.value || '',
      media,
    }),
  },
});
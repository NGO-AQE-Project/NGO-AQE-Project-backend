import { defineField, defineType } from 'sanity';
import { whyAQECard } from './whyAQECard';

export default defineType({
  name: 'whyAQESection',
  title: 'Why AQE Section',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'internationalizedArrayString', 
      validation: rule => rule.required(),
    }),
    defineField({
      name: 'cards',
      title: 'Cards',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'whyAQECard' }] }],
    }),
  ],
  preview: {
    select: {
      title: 'title',
    },
    prepare: ({ title }) => ({
      title: title?.[0]?.value || 'Untitled',
    }),
  },
});
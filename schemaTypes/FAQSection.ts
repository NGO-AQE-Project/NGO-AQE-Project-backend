import { defineField, defineType } from 'sanity';

export const FAQSection = defineType({
  name: 'FAQSection',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'internationalizedArrayString',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'faq',
      title: 'FAQ',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'FAQCard' }] }],
    }),
    defineField({
      name: 'footerText',
      title: 'Footer Text',
      type: 'internationalizedArrayString',
    }),
    defineField({
      name: 'footerLink',
      title: 'Footer Link',
      type: 'internationalizedArrayString',
    }),
  ],
  preview: {
    select: {
      title: 'title',
    },
    prepare: ({ title }) => ({
      title: title[1]?.value || 'No title',
    }),
  },
});

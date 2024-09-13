import { defineField, defineType } from 'sanity';

export const FAQCard = defineType({
  name: 'FAQCard',
  title: 'FAQ Card',
  type: 'document',
  fields: [
    defineField({
      name: 'question',
      title: 'Question',
      type: 'internationalizedArrayString',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'answer',
      title: 'Answer',
      type: 'internationalizedArrayString',
      validation: (rule) => rule.required(),
    }),
  ],
  preview: {
    select: {
      title: 'question',
    },
    prepare: ({ title }) => ({
      title: title[1]?.value || 'No question',
    }),
  },
});

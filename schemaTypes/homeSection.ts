import { defineType, defineField } from 'sanity';

export const homeSection = defineType({
  name: 'homeSection',
  title: 'Home Section',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'internationalizedArrayString',
      description: 'The main title of the section.',
      validation: rule => rule.required(),
    }),
    defineField({
      name: 'subtitle',
      title: 'Subtitle',
      type: 'internationalizedArrayString',
      description: 'A short subtitle for the section.',
      validation: rule => rule.required(),
    }),
    defineField({
      name: 'buttonText',
      title: 'Button Text',
      type: 'internationalizedArrayString',
      description: 'Text for the call-to-action button.',
      validation: rule => rule.required(),
    }),
    defineField({
      name: 'linkNames',
      title: 'Link Names',
      type: 'array',
      of: [{ type: 'string' }], // conntect to trainings section when ready
      description: 'List of link names.',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'subtitle',
      buttonText: 'buttonText',
    },
    prepare: ({ title ,subtitle, buttonText }) => ({
      title: title?.[0]?.value || 'Untitled',
      subtitle: subtitle?.[0]?.value || '',
      buttonText: buttonText?.[0]?.value || '', 
    }),
  },
});
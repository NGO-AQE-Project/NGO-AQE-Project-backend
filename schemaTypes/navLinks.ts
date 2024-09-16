import { defineType, defineField } from 'sanity';

export const navLinks = defineType({
  name: 'navLinks',
  title: 'Navigation Links',
  type: 'document',
  fields: [
    defineField({
      name: 'links',
      title: 'Links',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'text',
              title: 'Text',
              type: 'internationalizedArrayString',
              description: 'The text for the navigation link.',
              validation: rule => rule.required(),
            }),
            defineField({
              name: 'to',
              title: 'Link Target',
              type: 'string',
              description: 'The target URL or anchor for the link.',
              validation: rule => rule.required(),
            }),
          ],
        },
      ],
      description: 'List of navigation links.',
    }),
    defineField({
      name: 'buttonText',
      title: 'Button Text',
      type: 'internationalizedArrayString',
      description: 'The text for the button associated with the navigation links.',
      validation: rule => rule.required(),
    }),
  ],
  preview: {
    select: {
      links: 'links',
    },
    prepare() {
      return {
        title: 'Navigation Links',
      };
    },
  },
});

import { defineField, defineType } from 'sanity';

export const contactUs = defineType({
  name: 'contactUs',
  type: 'document',
  title: 'Contact Us',
  fields: [
    defineField({
      name: 'language',
      type: 'string',
      title: 'Language',
      validation: rule => rule.required(),
    }),
    defineField({
      name: 'title',
      type: 'string',
      title: 'Title',
      validation: rule => rule.required(),
    }),
    defineField({
      name: 'email',
      type: 'string',
      title: 'Email',
      validation: rule => rule.required().email(),
    }),
    defineField({
      name: 'officeHours',
      type: 'string',
      title: 'Office Hours',
      validation: rule => rule.required(),
    }),
    defineField({
      name: 'address',
      type: 'string',
      title: 'Address',
      validation: rule => rule.required(),
    }),
    defineField({
      name: 'mapLink',
      type: 'url',
      title: 'Map Link',
      validation: rule => rule.required().uri({
        allowRelative: true,
        scheme: ['http', 'https']
      }),
    }),
    defineField({
      name: 'phoneNumber',
      type: 'string',
      title: 'Phone Number',
      validation: rule => rule.required().regex(/^\+?[1-9]\d{0,3}[\s.-]?\(?\d{1,4}\)?[\s.-]?\d{1,4}[\s.-]?\d{1,4}[\s.-]?\d{1,9}$/, {
        name: 'Phone number',
        invert: false,
      }),
    }),
    defineField({
      name: 'translations',
      type: 'object',
      title: 'Translations',
      fields: [
        {name: 'emailLabel', type: 'string', title: 'Email Label'},
        {name: 'officeHoursLabel', type: 'string', title: 'Office Hours Label'},
        {name: 'addressLabel', type: 'string', title: 'Address Label'},
        {name: 'phoneNumberLabel', type: 'string', title: 'Phone Number Label'},
      ],
    }),
  ],
  preview: {
    select: {
      title: 'title',
      language: 'language',
    },
    prepare: ({ title, language }) => ({
      title: `${title} (${language})`,
    }),
  },
});
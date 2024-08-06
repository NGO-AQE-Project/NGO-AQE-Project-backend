import { defineType, defineField } from "sanity";
import partnersSection from "./partnersSection";
import { aboutSection } from "./aboutSection";

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
    })
  ],
  preview: {
    select: {
      language: 'language',
    },
    prepare: ({language}) => ({title: `Page(${language})`}),
  }
});

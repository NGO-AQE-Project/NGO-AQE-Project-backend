import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'
import { documentInternationalization } from '@sanity/document-internationalization'
import { internationalizedArray } from 'sanity-plugin-internationalized-array'

export default defineConfig({
  name: 'default',
  title: 'NGO AQE Project',

  projectId: '6yf8mcap',
  dataset: 'production',

  plugins: [
    structureTool(),
    visionTool(),
    documentInternationalization({
      supportedLanguages: client => client
        .fetch(`*[_type == "language"]{code, title}`)
        .then((data: {code: string, title: string }[]) => 
          data.map(({code, title}) => ({title, id: code}))),
      schemaTypes: ['page', 'aboutSection'],
    }),
    internationalizedArray({
      fieldTypes: ['string'],
      languages: client => client
      .fetch(`*[_type == "language"]{code, title}`)
      .then((data: {code: string, title: string }[]) => 
        data.map(({code, title}) => ({title, id: code}))),
    }),
  ],

  schema: {
    types: schemaTypes,
  },
})

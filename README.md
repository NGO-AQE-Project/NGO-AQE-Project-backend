# CMS Implementation Guide

Welcome to the CMS implementation guide! This document provides detailed information on the `partnersSection`, `partner`, and `language` schemas, including how to work with them and examples for fetching data. The `aboutSection` schema is also mentioned to illustrate document internalization.

## Schema Overview

### `language` Document

The `language` document defines the languages available in the CMS:

- **Language Name:** Descriptive name for the language.
- **Language Code:** ISO 639-1 code (e.g., "en" for English).

This schema is essential for supporting multiple languages across your content.

### `partner` Document

The `partner` document represents individual partners:

- **Partner Name:** Multilingual names are managed using an internationalized array.
- **Image:** Represents the partner with an image.

This schema allows you to manage partner entities with localized names and images.

### `partnersSection` Document

The `partnersSection` document groups multiple `partner` references:

- **Title:** Multilingual title for the section.
- **Partners Array:** Array of references to `partner` documents.

This schema organizes and displays a list of partners within a single section, with support for multiple languages.

### `aboutSection` Document (Optional)

The `aboutSection` schema is an example of document internalization:

- **Language Field:** An internal field to specify the language.
- **Title and Subsections:** Includes multilingual fields for titles and content.
- **Image:** Associated image for the section.

Use this schema to manage multilingual content at the document level, contrasting with array-based internalization.

## Fetching Data

Here are examples of how to fetch data from Sanity CMS. These examples illustrate how to retrieve data for the `partnersSection` and `language` schemas.

### Example: Fetch Partners Section

```ts
import client from './sanityClient'; // Adjust import based on your setup

interface Partner {
  _id: string;
  name: string;
  image: string; // URL of the image
}

interface PartnersSection {
  _id: string;
  title: string;
  partners: Partner[];
}

export function fetchPartnersSection(language: string): Promise<PartnersSection> {
  return client.fetch(`
    *[_type == 'partnersSection'][0] {
      _id,
      "title": title[_key == "${language}"][0].value,
      partners[] -> {
        _id,
        "name": name[_key == "${language}"][0].value,
        "image": image.asset->url
      }
    }
  `);
}
```

### Example: Fetch Languages

```ts
export function fetchLanguages(): Promise<Language[]> {
  return client.fetch(`
    *[_type == "language"] {
      _id,
      title,
      code,
    }
  `);
}
```

## Key Points

- **Document vs. Array Internalization:** Use the `aboutSection` schema to understand document internalization. This schema shows how multilingual content can be managed within a single document. On the other hand, array internalization, such as in the `partnersSection`, involves managing translations within an array of objects.

- **Ensure Consistency:** Follow the defined schema structures and data types to maintain consistency across the CMS. Consistent naming and data handling are crucial for seamless integration and data integrity.

- **Testing and Validation:** Always test your changes in Sanity Studio to ensure that the fields and validation rules work as expected. Additionally, verify that data retrieval functions are correctly fetching and displaying the data in your application.

## Summary

This guide provides an overview of the `partnersSection`, `partner`, and `language` schemas, including examples for data fetching. The `aboutSection` schema is included to demonstrate document internalization, contrasting with array-based methods.


 

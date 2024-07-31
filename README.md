An example of implementing CMS to a section (teh partners section specifically)

I dont really know what im doing. So anyway:

# The back end

## Launch sanity studio and open the codebase
Just fork this repo and `npm run dev`

Dont switch from the main branch

## Identify the data types and data layout
Partners doc:

* Title -  multi language strings
* Partners - Array of:
  * Image - image
  * Description - multi language strings
  
![image](https://github.com/user-attachments/assets/f05d9069-1ad6-4ec9-8580-45c3968a23bd)

## Create the new document type
Just copy and rename either this (`partnersSection.ts`) or `example.ts`

Plug the new file into `index.ts`

![image](https://github.com/user-attachments/assets/dc3c6b72-478c-477e-9e68-dc139fcfbfbd)

## Create all the fields
This will mostly be copying from already finished files and renaming values

Generally, in a field, `name` is used for field name when stored in database, and `title` is displayed in the studio GUI

The types of data we will use:
* String - regular text value
* Object - field containing other fields
* Array - just an array, use `of` to type the elements it contains
* Image - stores a single image file
* multi language type - more complex, to see it properly look in `example.ts`, but it is an array, each element is required to have a language and any other fields are custom

This is a field using all types:

Defining the field along with its names
```ts
defineField({
      name: 'partnersArray',
      title: 'Partners Array',
```
The array
```ts

      type: 'array',
      of: [
        {
```
the object
```ts
          type: 'object',
          fields: [
            defineField({
              name: 'image',
              title: 'Image',
              type: 'image',
              validation: (Rule) => Rule.required().error('Image is required.'),
            }),
            defineField({
              name: 'descriptionSet',
              title: 'DescriptionSet',
              type: 'array',
```
The multi language array
```ts
              of: [
                {
                  type: 'object',
                  fields: [
                    {
                      name: 'language',
                      type: 'reference',
                      to: [{type: 'language'}],
                      validation: (Rule) => Rule.required(),
                    },
```
The string
```ts
                    {
                      name: 'description',
                      type: 'string',
                      validation: (Rule) => Rule.required().error('Description is required.'),
                    },
                  ],
                },
              ],
              validation: (Rule) => Rule.required().error('Description is required.'),
            }),
          ],
        },
      ],
      validation: (Rule) => Rule.required().error('At least one partner is required.'),
    }),
```

Things to remember:
* Edit the validation error messages to match field names
* When naming arrays:
  * A regular array - example: "partnersArray"
  * A language set array - example: "descriptionSet"   

(so we dont confuse the two types)

## Make sure all fields show up and are the correct type in studio
Fill out ONE document in both languages and publish it

![image](https://github.com/user-attachments/assets/755feb70-cd9e-4a70-8d0a-55c4c00723fe)

## Deploy the updated studio
When you are confident everything is working as intended, pull from main to make sure you are up to date

If nothing breaks you need to push your new commit to main

ONLY THEN run `npx sanity deploy`

(If you dont follow those steps correctly WE ALL EXPLODE)

Now stop the studio server you were running locally and make sure everything still works, and has updated with your document type and the doc you filled out, on the remotely hosted instance of sanity (on their website)

# The front end

## Typing 
Add your doc type to `SanityDataTypes.ts` and into the `SanityData` type as an array

![image](https://github.com/user-attachments/assets/3e48d8fe-006e-423a-929f-436ce0bd5ca1)

## Pulling the document from context
In your component simply use the context and pull your specific document array, using the first element
```
const sanity = useSanity();
const languageId = sanity.selectedLanguage;
const document = sanity.documents?.partnersSection[0];
```

When displaying only the correct translation onscreen, find the element with the correct language id, and pull your fields from there
```
document.titleSet.find(
          language => language.language._ref === languageId,
        )?.title
```

And when you need the url of an image pull the `getImageUrl` from `SanityUrlBuilder.ts`

Example with my data layout:

```<img src={getImageUrl(document.partnersArray[0].image)} />```




 

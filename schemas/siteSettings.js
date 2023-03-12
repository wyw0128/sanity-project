// schemas/siteSettings.js
export default {
  name: "siteSettings",
  title: "Site Settings",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Site Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "description",
      title: "Site Description",
      type: "text",
      validation: (Rule) => Rule.required(),
    },
    {
      type: "image",
      name: "logo",
      title: "Logo",
      validation: (Rule) => Rule.required(),
    },
    { type: "richText", name: "postContent", title: "About us" },
  ],
};

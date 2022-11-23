export default {
  type: "document",
  name: "videos",
  title: "Videos",
  liveEdit: true,
  fields: [
    {
      type: "string",
      name: "type",
      title: "Type",
      description: "eg: Education",
      options: {
        list: [
          { title: "Education", value: "education" },
          { title: "Immigration", value: "immigration" },
        ],
      },
      validation: (Rule) => Rule.required(),
    },
    { type: "string", name: "id", title: "Embed ID" },
    // { type: "richText", name: "texts" },
    { type: "string", name: "description" },
  ],
};

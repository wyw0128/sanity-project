export default {
  type: "document",
  name: "videos",
  title: "videos",
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
    { type: "number", name: "id", title: "ID" },
    { type: "string", name: "url" },
    // { type: "richText", name: "texts" },
    { type: "string", name: "description" },
  ],
  preview: { select: { title: "id" } },
};

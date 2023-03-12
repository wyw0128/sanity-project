export default {
  type: "document",
  name: "videos",
  title: "Videos",
  // disable creating new documents in the Studio
  __experimental_actions: ["update", "publish"],
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
    {
      type: "string",
      name: "id",
      title: "Embed ID",
      description: "仅支持西瓜视频ID",
    },
    // { type: "richText", name: "texts" },
    { type: "string", name: "description" },
  ],
};

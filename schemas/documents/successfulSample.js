export default {
  type: "document",
  title: "SuccessfulSamples",
  name: "SuccessfulSample",
  liveEdit: true,
  // preview: { select: { title: { , postDate } }, subtitle: "postText" },
  fields: [
    {
      type: "string",
      name: "type",
      title: "Type",
      description: "eg: Education Visa",
      options: {
        list: [
          { title: "Education Visa", value: "education" },
          { title: "Immigration Visa", value: "immigration" },
        ],
      },
      validation: (Rule) => Rule.required(),
    },
    {
      type: "date",
      name: "title",
      title: "date",
      options: { dateFormat: "DD/MM/YYYY" },
      validation: (Rule) => Rule.required(),
    },
    {
      type: "string",
      name: "postName",
      title: "name",
      description: "eg: 张先生",
      validation: (Rule) => Rule.required(),
    },
    {
      type: "string",
      name: "visa",
      title: "visa",
      description: "eg: 500",
      validation: (Rule) => Rule.required(),
    },

    {
      type: "image",
      name: "visaImage",
      title: "image",
      description: "Please upload visa image",
      validation: (Rule) => Rule.required(),
    },
    {
      type: "string",
      name: "postText",
      title: "text",
      validation: (Rule) => Rule.min(10).max(50).required(),
    },
  ],

  preview: {
    select: {
      title: "title",
      subtitle: "postText",
    },
  },
};

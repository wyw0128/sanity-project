export default {
  type: "document",
  title: "Posts",
  name: "posts",
  liveEdit: true,
  fields: [
    {
      type: "string",
      name: "title",
      title: "Title",
      validation: (Rule) => [
        Rule.max(150).warning("Shorter titles are usually better"),
        Rule.required(),
      ],
    },
    {
      name: "myTags",
      title: "Tags",
      type: "reference",
      to: { type: "tags" },
      // options: {
      //   includeFromRelated: "myTags",
      // },
    },
    {
      type: "image",
      name: "thumbnail",
      title: "Thumbnail",
      validation: (Rule) => Rule.required(),
    },
    { type: "richText", name: "postContent" },
  ],
  // preview: {
  //   select: {
  //     title: "title",
  //     subtitle: "postText",
  //   },
  // },
};

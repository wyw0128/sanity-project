// import client from "part:@sanity/base/client";

export default {
  type: "document",
  title: "Posts",
  name: "posts",
  // liveEdit: true,
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
      type: "array",
      of: [{ type: "reference", to: { type: "tags" } }],
      validation: (Rule) => Rule.required().max(2),
    },
    {
      type: "image",
      name: "thumbnail",
      title: "Thumbnail",
      validation: (Rule) => Rule.required(),
    },
    { type: "richText", name: "postContent" },
  ],
};

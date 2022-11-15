export default {
  name: "richText",
  type: "array",
  liveEdit: true,
  of: [
    {
      type: "block",
      marks: {
        annotations: [
          {
            name: "internalLink",
            type: "object",
            title: "Internal Link",
            fields: [
              {
                name: "reference",
                type: "reference",
                title: "Reference",
                to: [{ type: "posts" }],
              },
            ],
          },
        ],
      },

      // of: [{ type: "reference", title: "Author", to: [{ type: "author" }] }],
    },
    // { type: "figure" },
    { type: "mainImage" },
    { type: "video" },
  ],
};

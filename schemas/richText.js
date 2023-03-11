export default {
  name: "richText",
  type: "array",
  title: "Content",
  liveEdit: true,
  of: [
    {
      type: "block",
      title: "Block",
      marks: {
        annotations: [
          {
            name: "link",
            type: "object",
            title: "URL",
            fields: [
              {
                name: "href",
                type: "url",
                title: "URL",
              },
              {
                title: "Open in new tab",
                name: "blank",
                // description: "Read https://css-tricks.com/use-target_blank/",
                type: "boolean",
              },
            ],
          },
        ],
      },
    },
    // { type: "figure" },
    { type: "mainImage" },
    // { type: "video" },
  ],
};

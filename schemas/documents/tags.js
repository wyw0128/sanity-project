import client from "part:@sanity/base/client";

export default {
  type: "document",
  name: "tags",
  title: "Tags",
  // liveEdit: true,
  validation: (Rule) =>
    Rule.custom(async (fields) => {
      const tagData = await client.fetch(`*[_type == "tags"]`);
      const tagArray = tagData.map((tag) => tag.tag);
      for (let i = 0; i < tagArray.length; i++) {
        if (
          tagArray[i] === fields.tag &&
          !tagData[i]._id.startsWith("drafts.")
        ) {
          console.log(tagArray[i], fields.tag);
          return "This tag already exists";
        }
      }
      return true;
    }),
  fields: [{ type: "string", name: "tag" }],
};

// NOTE: Unlike the document-type we defined in the introduction, this will not appear in the side bar as a document an editor may create. Objects are meant to be embedded inside documents.
export default {
  name: "mainImage",
  type: "object",
  title: "Image",
  fields: [
    { name: "image", type: "image", title: "Image" },
    { name: "alt", type: "string", title: "Alternative text" },
    { name: "caption", type: "string", title: "Caption text" },
  ],
};

// First, we must import the schema creator
import createSchema from "part:@sanity/base/schema-creator";

// Then import schema types from any plugins that might expose them
import schemaTypes from "all:part:@sanity/base/schema-type";
import richText from "./richText";
import image from "./objects/image";
import videos from "./documents/videos";
import successfulSample from "./documents/successfulSample";
import posts from "./documents/posts";
import tags from "./documents/tags";
import navItem from "./objects/navItem";
import link from "./objects/link";
import sliders from "./documents/sliders";
import siteSettings from "./siteSettings";
import footer from "./documents/footer";
// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: "default",
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    /* Your types here! */
    richText,
    image,
    videos,
    successfulSample,
    posts,
    tags,
    navItem,
    siteSettings,
    link,
    sliders,
    footer,
  ]),
});

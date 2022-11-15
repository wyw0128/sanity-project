// First, we must import the schema creator
import createSchema from "part:@sanity/base/schema-creator";

// Then import schema types from any plugins that might expose them
import schemaTypes from "all:part:@sanity/base/schema-type";
import richText from "./richText";
import image from "./objects/image";
import video from "./objects/video";
import videos from "./documents/videos";
import successfulSample from "./documents/successfulSample";
import posts from "./documents/posts";
import tags from "./documents/tags";
import page from "./page";
import siteConfig from "./siteConfig";
import navItem from "./objects/navItem";
import navigation from "./documents/navigation";
import link from "./objects/link";
// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: "default",
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    /* Your types here! */
    // animal,
    // author,
    richText,
    image,
    video,
    videos,
    successfulSample,
    posts,
    tags,
    page,
    siteConfig,
    navItem,
    navigation,
    link,
  ]),
});

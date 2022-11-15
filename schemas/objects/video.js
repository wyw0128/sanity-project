import React, { useEffect } from "react";
import { useState } from "react";
const videoPreview = ({ value }) => {
  // const [URL, setURL] = useState("");
  useEffect(() => {
    const id = [...value.url].splice(23).join("");

    setURL(`https://www.ixigua.com/${id}`);
  }, [URL]);
  // console.log(value);

  // const urlArray = [...value.url];

  // console.log(urlArray);
  // return <pre>{JSON.stringify(value, null, 2)}</pre>;
  // const url = `https://www.ixigua.com/${id}`;
  // console.log(id);
  // const url = value.url;
  // console.log("djskdjfsndkfsd;", url);
  if (!URL) {
    return <div>Missing URL</div>;
  }
  return (
    <iframe
      width="720"
      height="405"
      frameborder="0"
      src={URL}
      referrerpolicy="unsafe-url"
    ></iframe>
  );
};

export default {
  type: "object",
  name: "video",
  fields: [{ type: "url", name: "url", title: "URL" }],
  preview: {
    select: {
      url: "url",
    },
    // component: videoPreview,
  },
};

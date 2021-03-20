import React, { useState, useEffect } from "react";
import Axios from "axios";
export default function Articles(props) {
  const [post, setPost] = useState(null);

  useEffect(() => {
    Axios.get("https://enterpriseinnovation.org/wp-json/wp/v2/posts/"+ props.match.params.id).then(
      response => {
        setPost(response.data);
      }
    );
  }, [setPost]);

  return (
    <div style={{margin:'2rem'}}>
      {post && (
        <div>
          <div dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
        </div>
      )}
    </div>
  );
}
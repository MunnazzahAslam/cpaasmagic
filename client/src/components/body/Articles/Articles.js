import React, { useState, useEffect } from "react";
import Axios from "axios";
import {Button} from '../../../globalStyles';
export default function Articles(props) {
  const [post, setPost] = useState(null);

  useEffect(() => {
    Axios.get("https://www.innovationaudit.org/cpaasmagic/wp-json/wp/v2/posts/"+ props.match.params.id).then(
      response => {
        setPost(response.data);
      }
    );
  }, [setPost]);

  return (
    <div>
      {post && (
        <div style={{marginBottom:'2rem'}}>
          <div style={{backgroundColor:'#EDEFF9', width:'100%'}}><h1 style={{minWidth:'1000px',maxWidth:'1000px',color: '#1D217E', textAlign: 'center',margin: '0 auto',paddingTop: '44px',paddingBottom:'44px'}}>{post.title.rendered}</h1>
          <div style={{display:'flex', flexDirection:'row', justifyContent:'center', paddingBottom:'44px'}}>
            <Button style={{background:'#FA6396', marginRight:'1rem'}}>Article</Button>
            <Button style={{background:'#14C0A9', marginRight:'1rem'}}>{post.date}</Button>
            <Button style={{background:'#4B65F9', marginRight:'1rem'}}>TransformX</Button>
          </div>
          </div>
          <div dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
        </div>
      )}
    </div>
  );
}
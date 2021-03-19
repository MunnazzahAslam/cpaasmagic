/*import React, { Component } from 'react'
import { DataContext } from '../reduxreactindex'
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import { Button } from '../../../globalStyles';
import axios from 'axios';
var { SocialIcon } = require('react-social-icons');

export class Articles extends Component {

  constructor(props) {
    super(props);
    this.state = {
      posts: {}
    };
  }

  componentDidMount() {
    axios
      .get(
        "https://www.transformx.io/wp-json/wp/v2/posts/" +
        this.props.match.params.id
      )
      .then(res => {
        this.setState({ posts: res.data });
        console.log(this.state.posts);
      })
      .catch(error => console.log(error));
  }

  render() {
    const { posts } = this.state;
    return (
      <>
      
      </>)
  }
}

export default Articles;
*/

import React, { useState, useEffect } from "react";
import Axios from "axios";
export default function Articles(props) {
  const [post, setPost] = useState(null);

  useEffect(() => {
    Axios.get("https://www.transformx.io/wp-json/wp/v2/posts/"+ props.match.params.id).then(
      response => {
        setPost(response.data);
      }
    );
  }, [setPost]);

  return (
    <div style={{margin:'2rem'}}>
      {post && (
        <div>
          <h1>{post.title.rendered}</h1>
          <div style={{marginRight:'2rem'}} dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
        </div>
      )}
    </div>
  );
}
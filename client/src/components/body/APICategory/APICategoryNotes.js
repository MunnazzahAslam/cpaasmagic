import React, { useState, useEffect } from 'react'
import Axios from "axios";
import {Button} from '../../../globalStyles'
import { Pane, Tablist, SidebarTab, Paragraph } from 'evergreen-ui'
import Component from "@reactions/component";


function APICategory() {

  const [posts, setPosts] = useState(null);

  useEffect(() => {
    Axios.get("https://api.airtable.com/v0/appDrjzV9YZk6MRQA/cpaas%20APIs%20(Synced)?api_key=keyIRsjrVlk0Wnz9b").then(
      response => {
        setPosts(response.data.records);
        console.log(response.data.records);
      }
    );
  }, [setPosts]);

  return (
    <div>
      <Component
        initialState={{
          selectedIndex: 0,
          tabs: ['All', 'Video APIs', 'Messaging APIs', 'Voice APIs', 'Network APIs',
            'Omnichannel APIs', 'Email APIs', 'Security APIs', 'Analytics APIs', 'Account Management APIs', 'Number APIs', 'Contact Center APIs', 'IOT APIs', 'Advanced Messaging APIs', 'Contact Management APIs', 'Social Media APIs']
        }}
      >
        {({ state, setState }) => (
          <Pane display="flex" >
            <Tablist marginTop={28} marginBottom={16} flexBasis={240} marginLeft={20} marginRight={20}>
              {state.tabs.map((tab, index) => (
                <SidebarTab
                  key={tab}
                  id={tab}
                  onSelect={() => setState({ selectedIndex: index })}
                  isSelected={index === state.selectedIndex}
                  aria-controls={`panel-${tab}`}
                >
                  {tab}
                </SidebarTab>
              ))}
            </Tablist>
            <Pane padding={16} background="tint1" flex="1">
              {state.tabs.map((tab, index) => (
                <Pane
                  key={tab}
                  id={`panel-${tab}`}
                  role="tabpanel"
                  aria-labelledby={tab}
                  aria-hidden={index !== state.selectedIndex}
                  display={index === state.selectedIndex ? 'block' : 'none'}
                >
                  <Paragraph className="item">
                    {
                      posts && posts.map((item) => {
                        return <div className="item-con" key={item.fields.API_Id}>
                          <div className="item-container">
                            <h2 style={{fontSize:'1.1em', color:'#222'}}>{item.fields.API_Name}</h2><br/>
                            <p style={{fontSize:'0.9em', color:'#222'}}>{item.fields.API_Description}</p>
                            <br/>
                            <Button style={{fontSize:'0.8em', background:'#C2F5E9', padding:'4px 8px', color:'#222'}}>{item.fields.API_Category}</Button>
                          </div>
                        </div>
                      })
                    }
                  </Paragraph>
                </Pane>
              ))}
            </Pane>
          </Pane>
        )}
      </Component>
    </div>
  )
}

export default APICategory




{/*import React, { useState, useEffect } from 'react'
import Axios from "axios";
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';



function APICategory() {
  const useStyles = makeStyles((theme) => ({
    root: {
      maxWidth: 345,
    },
    media: {
      height: 0,
      paddingTop: '56.25%', // 16:9
    },
    expand: {
      transform: 'rotate(0deg)',
      marginLeft: 'auto',
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
      }),
    },
    expandOpen: {
      transform: 'rotate(180deg)',
    },
    avatar: {
      backgroundColor: red[500],
    },
  }));
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const [posts, setPosts] = useState(null);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  useEffect(() => {
    Axios.get("https://api.airtable.com/v0/appDrjzV9YZk6MRQA/cpaas%20APIs%20(Synced)?api_key=keyIRsjrVlk0Wnz9b").then(
      response => {
        setPosts(response.data.records);
        console.log(response.data.records);
      }
    );
  }, [setPosts]);
  return (
    <div className="item">
      {
        posts && posts.map((item) => {
          return <Card className={classes.root} key={item.fields.API_Id}>
            <CardHeader
              avatar={
                <Avatar aria-label="recipe" className={classes.avatar}>
                  API
                </Avatar>
              }
              title={item.fields.API_Name}
              subheader={item.fields.API_Category}
            />

            <CardContent>
              <Typography variant="body2" color="textSecondary" component="p">
                {item.fields.Vendor_Name}  -  {item.fields.API_Description} </Typography>
            </CardContent>
            <CardActions disableSpacing>
              <IconButton aria-label="add to favorites">
                <FavoriteIcon />
              </IconButton>
              <IconButton
                className={clsx(classes.expand, {
                  [classes.expandOpen]: expanded,
                })}
                onClick={handleExpandClick}
                aria-expanded={expanded}
                aria-label="show more"
              >
                <ExpandMoreIcon />
              </IconButton>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
              <CardContent>
                <Typography paragraph>Description:</Typography>
                <Typography paragraph>
                  Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10
                  minutes.
                </Typography>
              </CardContent>
            </Collapse>
          </Card>
        })
      }
    </div>
  )
}

export default APICategory

{/*import React, { useState, useEffect } from "react";
import Axios from "axios";
import Menu from './Menu';
import Button from './Button';

function APICategory() {
  const [posts, setPosts] = useState(null);
  const [buttons, setButtons] = useState(null);
  
  
  useEffect(() => {
    Axios.get("https://api.airtable.com/v0/appDrjzV9YZk6MRQA/cpaas%20APIs%20(Synced)?api_key=keyIRsjrVlk0Wnz9b").then(
      response => {
        setPosts(response.data.records);
        console.log(response.data.records);
        setButtons(response.fields.API_Category);
      }
    );
  }, [setPosts]);
  const [menuItem, setMenuItem] = useState(posts);

  //Filter Function
  const filter = (button) => {

    if (button === 'All') {
      setMenuItem(posts);
      return;
    }

    const filteredData = posts.filter(post => post.fields.API_Category === button);
    setMenuItem(filteredData)
    console.log(filteredData)
  }


  return (
    <div className="App">
      <Button button={buttons} filter={filter} />
      <Menu menuItem={menuItem} />

    </div>
  );
}

export default APICategory;

import React, { useState, useEffect } from "react";
import Axios from "axios";

export default function APICategory() {
    const [post, setPost] = useState(null);

    useEffect(() => {
        Axios.get("https://api.airtable.com/v0/appDrjzV9YZk6MRQA/cpaas%20APIs%20(Synced)?api_key=keyIRsjrVlk0Wnz9b").then(
            response => {
                setPost(response.data.records);
                console.log(response.data.records);
            }
        );
    }, [setPost]);
    return (
        <>
            {post && (
                <div className="item">
                    {
                        post.map((item) => {
                            return <div className="item-con" key={item.fields.API_Id}>
                                <div className="item-container">
                                    <h2 style={{ fontSize: '1.1em', color: '#222' }}>{item.fields.API_Name}</h2>
                                    <p style={{ fontSize: '0.8em', color: '#222' }}>{item.fields.API_Type}</p>
                                </div>
                            </div>
                        })
                    }
                </div>
            )}
        </>
    )
}

{/*import React, { useEffect, useState } from 'react';
import Menu from './Main';
import Button from './Button';
import Axios from "axios";


function APICategory() {

const [post, setPost] = useState(null);

useEffect(() => {
    Axios.get("https://api.airtable.com/v0/appDrjzV9YZk6MRQA/cpaas%20APIs%20(Synced)?api_key=keyIRsjrVlk0Wnz9b").then(
        response => {
            setPost(response.data.records);
            console.log(response.data.records);
        }
    );
}, [setPost]);

    const allCategories = ['All', ...new Set(post && (post.map(item => item.fields.API_Category)))];

console.log(allCategories);
  const [menuItem, setMenuItem] = useState(post);
  const [buttons, setButtons] = useState(allCategories);
  console.log(buttons);
  //Filter Function
  const filter = (button) =>{

    if(button === 'All'){
      setMenuItem(post);
      return;
    }

    const filteredData = post.filter(item => item.fields.API_Category ===  button);
    setMenuItem(filteredData)
    console.log(filteredData);
  }


  return (
    <div className="App">
      <Button button={buttons} filter={filter}/>
       <Menu menuItem={menuItem}/>
    </div>
  );
}

export default APICategory;
*/}

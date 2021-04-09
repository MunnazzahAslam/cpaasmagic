import React, { useState, useEffect } from "react";
import Axios from "axios";
import Card from '@material-ui/core/Card';
import { TwitterTimelineEmbed, TwitterShareButton, TwitterFollowButton, TwitterHashtagButton, TwitterMentionButton, TwitterTweetEmbed, TwitterMomentShare, TwitterDMButton, TwitterVideoEmbed, TwitterOnAirButton } from 'react-twitter-embed';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { Button } from '../../../globalStyles';
var { SocialIcon } = require('react-social-icons');

export default function UsecaseAT(props) {
    const [post, setPost] = useState(null);

    useEffect(() => {

        Axios.get("https://api.airtable.com/v0/appDrjzV9YZk6MRQA/CPaaS%20Usecases%20(Synced)/" + props.match.params.id + "?api_key=keyIRsjrVlk0Wnz9b").then(
            response => {
                setPost(response.data);
            }
        );
    }, [setPost]);

    return (
        <div>
            {post && (
                <div style={{ marginBottom: '2rem' }}>
                    <div style={{ width: '100%', height: '100%' }}>
                        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', padding: '2rem 0', paddingLeft: '10rem', paddingRight: '2rem', background: '#1283DA' }}>{/*
                            <img style={{ margin: '0 2rem', borderRadius: '8px', width: '6vw', height: '6vw', marginLeft: '2rem' }} src={post.fields.Airtable_Usecase_Logo[0].url} alt="VendorProfile" />*/}
                            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                                <p style={{ color: '#E4E7EB', fontSize: '16px', marginBottom: '-0.5rem' }}>{post.fields.Vendor_Name} - Use Case</p>
                                <h2 style={{ fontSize: '40px', fontWeight: '500', color: '#fff' }}>{post.fields.Usecase_Name}</h2>
                                {/*<div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                                <div style={{ marginTop: '0.5rem' }}>
                                    <SocialIcon network="linkedin" style={{ height: 35, width: 35, marginRight: '0.5rem' }} />
                                    <SocialIcon network="youtube" style={{ height: 35, width: 35, marginRight: '0.5rem' }} />
                                    <SocialIcon network="facebook" style={{ height: 35, width: 35, marginRight: '0.5rem' }} />
                                    <SocialIcon network="twitter" style={{ height: 35, width: 35, marginRight: '0.5rem' }} />
                                </div>
                            </div>
                            */}
                            </div>
                        </div>
                        {/* <div style={{ display: 'flex', flexDirection: 'row', marginTop: '1rem', marginLeft: '2rem', marginRight: '2rem' }}>
                           <Card className="card" style={{ padding: '2rem', paddingTop: '0.5rem', margin: '0 2rem', width: '66%' }}>
                                {/* {                                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start' }}>
                                <Button style={{ marginRight: '0.5rem', backgroundImage: 'linear-gradient(45deg,#6DCDF2,#1EB5ED )' }}>Pure Player</Button>
                                <Button style={{ backgroundImage: 'linear-gradient(45deg,#62A6D9,#1F7FC4 )' }}>Top Vendors</Button>
                            </div>}
                                           {/* <div style={{ marginBottom: '2rem' }}>
                    <div style={{ width: '100%', height: '100%' }}>
                        <div style={{ marginTop: '1rem', marginLeft: '2rem', marginRight: '2rem' }}>
                            <Button style={{ marginTop: '1rem', marginLeft: '2rem', marginRight: '2rem', background: '#CFDFFF', color: '#111' }}>{post.fields.TransformX_Vendor_Name}</Button><br />
                            <Button style={{ marginTop: '1rem', marginLeft: '2rem', marginRight: '2rem', background: '#CFDFFF', color: '#111' }}>{post.fields.TransformX_Usecase_Name}</Button><br />
                            <Button style={{ marginTop: '1rem', marginLeft: '2rem', marginRight: '2rem', background: '#CFDFFF', color: '#111' }}>{post.fields.TransformX_Usecase_Industry}</Button><br/>
                            <Button style={{ marginTop: '1rem', marginLeft: '2rem', marginRight: '2rem', background: '#CFDFFF', color: '#111' }}>{post.fields.TransformX_Usecase_Category}</Button><br />
                            <br />
                            <div style={{ minWidth: '800px', maxWidth: '800px', textAlign: 'justify', margin: '0 auto', paddingTop: '24px' }}>
                            <h1 style={{ textAlign: 'left' }}>{post.fields.Vendor_Usecase_Name}</h1><br />
                                <p style={{ textAlign: 'justify', fontSize: 'clamp(1.4rem, 1.2vw, 1rem)', color: '#383838' }}><b>Process</b><br /></p>
                                <br /><p>•  {post.fields.TransformX_Usecase_Process_1}</p><br />
                                <p>•  {post.fields.TransformX_Usecase_Process_2}</p><br />
                                <p>•  {post.fields.TransformX_Usecase_Process_3}</p><br/>
                                <p style={{ textAlign: 'justify', fontSize: 'clamp(1.4rem, 1.2vw, 1rem)', color: '#383838' }}><b>Value Generated</b><br /><br /></p>
                                <p>•  {post.fields.TransformX_Usecase_Value_Generated_1}</p><br />
                                <p>•  {post.fields.TransformX_Usecase_Value_Generated_2}</p><br />
                                <p>•  {post.fields.TransformX_Usecase_Value_Generated_3}</p><br /><br />
                            </div>
                        </div>
                    </div>
            </div> 

                            <br />
                            <p style={{ textAlign: 'justify', fontSize: '16px' }}>{post.fields.TransformX_Usecase_Description}</p>
                            </Card>
                        <Card style={{ width: '490px', height: '450px' }}>
                            <TwitterTimelineEmbed
                                sourceType="profile"
                                screenName={post.fields.TransformX_Vendor_Name}
                                options={{ height: 550, width: 550 }}
                            />
                        </Card>
  
                        </div>
               */}
                        <Tabs defaultIndex={0}>
                            <br />
                            <br />
                            <div className=".react-tabs__tab-list" >
                                <TabList style={{ paddingLeft: '10rem', }}>
                                    <Tab><div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>About</div></Tab>
                                    <Tab><div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>APIs</div></Tab>
                                    <Tab><div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>Similar Use Cases</div></Tab>
                                    <Tab><div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>Successes</div></Tab>
                                </TabList>
                            </div>
                            <TabPanel>
                                <div style={{ display: 'flex', flexDirection: 'row', marginLeft: '9rem', marginRight: '2rem' }}>
                                    <div className="card" style={{ padding: '0rem', paddingTop: '0.5rem' }}>
                                        {/*  <br />
                                        <Button style={{ marginTop: '1rem', background: '#CFDFFF', color: '#111', padding: '14px', marginRight: '0.5rem' }}>{post.fields.Usecase_Category}</Button>
                                        <Button style={{ marginTop: '1rem', background: '#CFDFFF', color: '#111', padding: '14px' }}>{post.fields.Usecase_Industry}</Button>
                                        <br /><br />
                                        */}<p style={{ textAlign: 'justify', fontSize: 'clamp(1.4rem, 1.2vw, 1rem)', color: '#383838' }}><b>Process</b><br /></p>
                                        <br /><p>- {post.fields.Usecase_Process_1}</p><br />
                                        <p>- {post.fields.Usecase_Process_2}</p><br />
                                        <p>- {post.fields.Usecase_Process_3}</p><br />
                                        <p>- {post.fields.Usecase_Process_4}</p><br />
                                        <p>- {post.fields.Usecase_Process_5}</p><br />
                                        <br />
                                        <p style={{ textAlign: 'justify', fontSize: 'clamp(1.4rem, 1.2vw, 1rem)', color: '#383838' }}><b>Value Generated</b><br /><br /></p>
                                        <p>- {post.fields.Usecase_Value_Generated_1}</p><br />
                                        <p>- {post.fields.Usecase_Value_Generated_2}</p><br />
                                        <p>- {post.fields.Usecase_Value_Generated_3}</p><br />
                                        <p>- {post.fields.Usecase_Value_Generated_4}</p><br />
                                        <p>- {post.fields.Usecase_Value_Generated_5}</p><br />
                                        <br />
                                    </div>
                                </div>

                                {/* {   </Card>
                            <Card style={{ width: '490px', height: '450px' }}>
                                <TwitterTimelineEmbed
                                    sourceType="profile"
                                    screenName={post.fields.TransformX_Vendor_Name}
                                    options={{ height: 550, width: 550 }}
                                />
                            </Card>
                             */}
                            </TabPanel>

                            <div style={{ display: 'flex', flexDirection: 'column' }}>
                                <TabPanel>
                                </TabPanel>
                                <TabPanel>
                                </TabPanel>
                                <TabPanel>
                                </TabPanel>
                            </div>
                        </Tabs>
                    </div>
                </div>
            )
            }
        </div >

    );
}
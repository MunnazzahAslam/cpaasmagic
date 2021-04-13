import React, { useState, useEffect } from "react";
import Axios from "axios";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Card from '@material-ui/core/Card';
import { TwitterTimelineEmbed, TwitterShareButton, TwitterFollowButton, TwitterHashtagButton, TwitterMentionButton, TwitterTweetEmbed, TwitterMomentShare, TwitterDMButton, TwitterVideoEmbed, TwitterOnAirButton } from 'react-twitter-embed';
import { Button } from '../../../globalStyles';
var { SocialIcon } = require('react-social-icons');
export default function APIAT(props) {
    const [post, setPost] = useState(null);

    useEffect(() => {

        Axios.get("https://api.airtable.com/v0/appDrjzV9YZk6MRQA/cpaas%20APIs%20(Synced)/" + props.match.params.id + "?api_key=keyIRsjrVlk0Wnz9b").then(
            response => {
                setPost(response.data);
            }
        );
    }, [setPost]);

    return (
        <div>
            {post && (
                <div>
                    <div style={{ width: '100%' }}>
                        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', padding: '2rem 0', paddingLeft: '10rem', paddingRight: '2rem', background: '#1283DA' }}>
                            {/*    <img style={{ margin: '0 2rem', borderRadius: '8px', width: '6vw', height: '6vw', marginLeft: '2rem' }} src={post.fields.Airtable_API_Logo[0].url} alt="VendorProfile" />
                           */} <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                                <p style={{ color: '#E4E7EB', fontSize: '16px', marginBottom: '-0.5rem' }}>API</p>
                                <h2 style={{ fontSize: '40px', fontWeight: '500', color: '#fff' }}>{post.fields.API_Name}</h2>
                                {/*<div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                                    <div style={{ marginTop: '0.5rem' }}>
                                        <SocialIcon network="linkedin" style={{ height: 35, width: 35, marginRight: '0.5rem' }} />
                                        <SocialIcon network="youtube" style={{ height: 35, width: 35, marginRight: '0.5rem' }} />
                                        <SocialIcon network="facebook" style={{ height: 35, width: 35, marginRight: '0.5rem' }} />
                                        <SocialIcon network="twitter" style={{ height: 35, width: 35, marginRight: '0.5rem' }} />
                                    </div>
                                </div>
                                   {/*  <div style={{ marginBottom: '2rem' }}>
                    <div style={{ width: '100%', height: '100%' }}>
                        <div style={{ marginTop: '1rem', marginLeft: '2rem', marginRight: '2rem' }}>
                            <Button style={{ marginTop: '1rem', marginLeft: '2rem', marginRight: '2rem', background: '#CFDFFF', color: '#111' }}>{post.fields.TransformX_Vendor_Name}</Button><br />
                            <br />
                            <h1 style={{ textAlign: 'center' }}>{post.fields.Vendor_API_Name}</h1><br />
                            <div style={{ minWidth: '800px', maxWidth: '800px', textAlign: 'justify', margin: '0 auto', paddingTop: '24px' }}>
                                <p style={{ textAlign: 'justify', fontSize: 'clamp(1.4rem, 1.2vw, 1rem)', color: '#383838' }}><b>Description</b><br /></p>
                                <br /><p>{post.fields.TransformX_API_Description}</p><br /><br />
                                <p style={{ textAlign: 'justify', fontSize: 'clamp(1.4rem, 1.2vw, 1rem)', color: '#383838' }}><b>Features</b><br /></p>
                                <br /><p>{post.fields.TransformX_Vendor_api_feature_1}</p><br />
                                <p>{post.fields.TransformX_Vendor_api_feature_2}</p>
                                <p>{post.fields.TransformX_Vendor_api_feature_3}</p><br /><br />
                            </div>
                        </div>
                    </div>
                </div>
            */}
                            </div>
                        </div>
                        {/* { <Card className="card" style={{ padding: '2rem', paddingTop: '0.5rem', margin: '0 2rem', width: '66%' }}>
                                                                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start' }}>
                                    <Button style={{ marginRight: '0.5rem', backgroundImage: 'linear-gradient(45deg,#6DCDF2,#1EB5ED )' }}>Pure Player</Button>
                                    <Button style={{ backgroundImage: 'linear-gradient(45deg,#62A6D9,#1F7FC4 )' }}>Top Vendors</Button>
                                </div>}
                            <Card style={{ width: '490px', height: '450px' }}>
                                <TwitterTimelineEmbed
                                    sourceType="profile"
                                    screenName={post.fields.TransformX_Vendor_Name}
                                    options={{ height: 550, width: 550 }}
                                />
                            </Card>
                            </Card> */}
                        <Tabs defaultIndex={0}>
                            <br />
                            <br />
                            <div className=".react-tabs__tab-list" >
                                <TabList style={{ paddingLeft: '10rem', }}>
                                    <Tab><div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>API Description</div></Tab>
                                    <Tab><div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>API Vendor</div></Tab>
                                    <Tab><div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>API Use Cases</div></Tab>
                                    <Tab><div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>API Successes</div></Tab>
                                </TabList>
                            </div>
                            <TabPanel>
                                <div style={{ display: 'flex', flexDirection: 'row', marginLeft: '8rem', marginRight: '2rem' }}>
                                    <div className="card" style={{ padding: '0rem', paddingTop: '0.5rem', margin: '0 2rem', width: '45%' }}><br />
                                        <p style={{ textAlign: 'justify', fontSize: 'clamp(1.4rem, 1.2vw, 1rem)', color: '#383838' }}><b>Description</b><br /></p>
                                        <br /><p>{post.fields.API_Description}</p><br />
                                        <p style={{ textAlign: 'justify', fontSize: 'clamp(1.4rem, 1.2vw, 1rem)', color: '#383838' }}><b>Features</b><br /></p>
                                        <br /><p><b>1- {post.fields.API_Feature_1}</b></p><br />
                                        <p>{post.fields.API_Feature_Description_1}</p><br />
                                        <p><b>2- {post.fields.API_Feature_2}</b></p><br />
                                        <p>{post.fields.API_Feature_Description_2}</p><br />
                                        <p><b>3- {post.fields.API_Feature_3}</b></p><br />
                                        <p>{post.fields.API_Feature_Description_3}</p><br />
                                        <p><b>4- {post.fields.API_Feature_4}</b></p><br />
                                        <p>{post.fields.API_Feature_Description_4}</p><br />
                                        <p><b>5- {post.fields.API_Feature_5}</b></p><br />
                                        <p>{post.fields.API_Feature_Description_5}</p><br /><br />
                                    </div>
                                    <Card style={{ width: '490px', height: '450px', margin: '1.5rem', marginLeft: '12rem', marginTop: '8rem' }}>
                                        <TwitterTimelineEmbed
                                            sourceType="profile"
                                            screenName={post.fields.Vendor_Name}
                                            options={{ height: 550, width: 550 }}
                                        />
                                    </Card>
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
                                    <div style={{ display: 'flex', flexDirection: 'row', marginLeft: '8rem', }}>
                                        <div className="card" style={{ padding: '0rem', paddingTop: '0.5rem', margin: '0 2rem', width: '45%' }}>
                                            {/*   <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', marginTop: '2rem' }}>
                                            <Button style={{ marginRight: '0.5rem', marginTop: '1rem', background: '#CFDFFF', color: '#111', padding: '10px' }}>Pure Player</Button>
                                            <Button style={{ marginTop: '1rem', background: '#CFDFFF', color: '#111', padding: '10px' }}>Top Vendors</Button>
                                        </div>*/}
                                            <br />
                                            <p style={{ textAlign: 'justify', fontSize: '16px' }}>Description <br />{post.fields.Vendor_Overview}</p>
                                            <br />
                                            <p style={{ textAlign: 'justify', fontSize: '16px' }}>Founders <br /> <span style={{ color: "#002060" }}>{post.fields.Vendor_Founders}</span></p>
                                            <br />
                                            <p style={{ textAlign: 'justify', fontSize: '16px' }}>Founded in <br /> <span style={{ color: "#002060" }}>{post.fields.Vendor_Founded_Year}</span></p>
                                            <br />
                                            <p style={{ textAlign: 'justify', fontSize: '16px' }}>Industry <br /> <span style={{ color: "#002060" }}>{post.fields.Vendor_Industry}</span></p>
                                            <br />
                                            <p style={{ textAlign: 'justify', fontSize: '16px' }}>Company Size <br /> <span style={{ color: "#002060" }}>{post.fields.Vendor_Company_Size}</span></p>
                                        </div>
                                        <Card style={{ width: '490px', height: '450px', margin: '1.5rem', marginLeft: '12rem' }}>
                                            <TwitterTimelineEmbed
                                                sourceType="profile"
                                                screenName={post.fields.Vendor_Name}
                                                options={{ height: 550, width: 550 }}
                                            />
                                        </Card>
                                        {/* {   </Card>
                            <Card style={{ width: '490px', height: '450px' }}>
                                <TwitterTimelineEmbed
                                    sourceType="profile"
                                    screenName={post.fields.TransformX_Vendor_Name}
                                    options={{ height: 550, width: 550 }}
                                />
                            </Card>
                             */}
                                    </div>
                                </TabPanel>
                                <TabPanel>
                                    <iframe className="airtable-embed" src={`https://airtable.com/embed/shrrzXsxpROZjNZOl/tbl44sysddBnhShw7?filter_API_Id=${post.fields.API_Id}&viewControls=on`} frameborder="0" onmousewheel="" width="80%" height="600" style={{ background: 'transparent', border: 'none', marginBottom: '0rem', paddingTop: '0.5rem', marginLeft: '10rem', marginRight: '10rem' }}></iframe>
                                    <div style={{ backgroundColor: '#fff', marginTop: '-2rem', overflow: 'overlay', height: '50px' }}>
                                    </div>
                                </TabPanel>
                                <TabPanel>
                                    <iframe className="airtable-embed" src={`https://airtable.com/embed/shrBZLziN8jWec6Ff/tblHmjfaRjjnZPh3r?filter_API_Id=${post.fields.API_Id}&viewControls=on`} frameborder="0" onmousewheel="" width="80%" height="600" style={{ background: 'transparent', border: 'none', marginBottom: '0rem', paddingTop: '0.5rem', marginLeft: '10rem', marginRight: '10rem' }}></iframe>
                                    <div style={{ backgroundColor: '#fff', marginTop: '-2rem', overflow: 'overlay', height: '50px' }}>
                                    </div>
                                </TabPanel>
                            </div>
                        </Tabs>
                    </div>
                </div>
            )}
        </div>
    );
}
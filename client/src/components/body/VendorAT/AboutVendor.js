import React, { useState, useEffect } from "react";
import Axios from "axios";
import Card from '@material-ui/core/Card';
import { TwitterTimelineEmbed } from 'react-twitter-embed';
import { Button } from '../../../globalStyles';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
var { SocialIcon } = require('react-social-icons');
export default function AboutVendor(props) {
    const [post, setPost] = useState(null);

    useEffect(() => {
        Axios.get("https://api.airtable.com/v0/appDrjzV9YZk6MRQA/cpaas%20Vendors/" + props.match.params.id + "?api_key=keyIRsjrVlk0Wnz9b").then(
            response => {
                setPost(response.data);
                console.log(response.data);
            }
        );
    }, [setPost]);

    return (
        <div>
            {post && (
                <div>
                    <div style={{ width: '100%' }}>
                        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', padding: '2rem 0', paddingLeft: '8rem', background: '#1283DA' }}>
                            <img style={{ margin: '0 3rem', borderRadius: '8px', width: '6vw', height: '6vw', marginLeft: '2rem', background: '#fff' }} src={post.fields['Vendor Logo'][0].url} alt="VendorProfile" />
                            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                                <p style={{ color: '#E4E7EB', fontSize: '16px', marginBottom: '-0.5rem' }}>Vendor</p>
                                <h2 style={{ fontSize: '40px', fontWeight: '500', color: '#fff' }}>{post.fields['Vendor Name']}</h2>
                            </div>
                        </div>
                        <Tabs defaultIndex={0}>
                            <br />
                            <br />
                            <div className=".react-tabs__tab-list" >
                                <TabList style={{ paddingLeft: '10rem', }}>
                                    <Tab><div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>About</div></Tab>
                                    <Tab><div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>APIs</div></Tab>
                                    <Tab><div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>Use Cases</div></Tab>
                                    <Tab><div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>Successes</div></Tab>
                                </TabList>
                            </div>
                            <TabPanel>
                                <div style={{ display: 'flex', flexDirection: 'row', marginLeft: '8rem', alignItems:'center'}}>
                                    <div className="card" style={{ padding: '0rem', margin: '0 2rem', width: '45%' }}>
                                        {/*   <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', marginTop: '2rem' }}>
                                            <Button style={{ marginRight: '0.5rem', marginTop: '1rem', background: '#CFDFFF', color: '#111', padding: '10px' }}>Pure Player</Button>
                                            <Button style={{ marginTop: '1rem', background: '#CFDFFF', color: '#111', padding: '10px' }}>Top Vendors</Button>
                                    </div> */}
                                        <br />
                                        <p style={{ textAlign: 'justify', fontSize: '16px' }}>Description <br /><span style={{ color: "#002060" }}>{post.fields['Vendor Description']}</span></p>
                                        <br />
                                        <p style={{ textAlign: 'justify', fontSize: '16px' }}>Founders <br /> <span style={{ color: "#002060" }}>{post.fields.Founders}</span></p>
                                        <br />
                                        <p style={{ textAlign: 'justify', fontSize: '16px' }}>Founded in <br /> <span style={{ color: "#002060" }}>{post.fields['Founded Year']}</span></p>
                                        <br />
                                        <p style={{ textAlign: 'justify', fontSize: '16px' }}>Industry <br /> <span style={{ color: "#002060" }}>{post.fields.Industry}</span></p>
                                        <br />
                                        <p style={{ textAlign: 'justify', fontSize: '16px' }}>Company Size <br /> <span style={{ color: "#002060" }}>{post.fields['Company Size']}</span></p>
                                    </div>
                                    <Card style={{ width: '490px', height: '450px', margin: '1.5rem', marginLeft: '8rem' }}>
                                        <TwitterTimelineEmbed
                                            sourceType="profile"
                                            screenName={post.fields['Vendor Name']}
                                            options={{ height: 550, width: 490 }}
                                        />
                                    </Card>
                                    {/* {   </Card>
                            <Card style={{ width: '490px', height: '450px' }}>
                                <TwitterTimelineEmbed
                                    sourceType="profile"
                                    screenName={post.fields.TransformX_Vendor_Name}
                                    options={{ height: 550, width: 550 }}
                                />
                            </Card>*/}
                                </div>
                            </TabPanel>

                            <div style={{ display: 'flex', flexDirection: 'column' }}>
                                <TabPanel style={{ background: '#Fff' }}>
                                    <iframe className="airtable-embed" src={`https://airtable.com/embed/shrJFXIT0ZWH3JIv9?filter_Vendor_Id=${post.fields.Vendor_Id}&viewControls=on`} frameborder="0" onmousewheel="" width="100%" height="610" style={{ background: 'transparent', border: 'none', marginBottom: '-2rem', paddingTop: '0rem', marginRight: '10rem' }}></iframe>

                                </TabPanel>
                                <TabPanel style={{ background: '#Fff' }}>
                                    <iframe className="airtable-embed" src={`https://airtable.com/embed/shrrzXsxpROZjNZOl?filter_Vendor_Id=${post.fields.Vendor_Id}&viewControls=on`} frameborder="0" onmousewheel="" width="100%" height="610" style={{ background: 'transparent', border: 'none', marginBottom: '-2rem', paddingTop: '0rem', marginRight: '10rem' }}></iframe>

                                </TabPanel>
                                <TabPanel style={{ background: '#Fff' }}>
                                    <iframe className="airtable-embed" src={`https://airtable.com/embed/shrBZLziN8jWec6Ff?filter_Vendor_Id=${post.fields.Vendor_Id}&viewControls=on`} onmousewheel="" width="100%" height="610" style={{ background: 'transparent', border: 'none', marginBottom: '-2rem', paddingTop: '0rem', marginRight: '10rem' }}></iframe>

                                </TabPanel>
                            </div>
                        </Tabs>
                    </div>
                </div>
            )}
        </div>
    );
}
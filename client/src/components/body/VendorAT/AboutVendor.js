import React, { useState, useEffect } from "react";
import Axios from "axios";
import Card from '@material-ui/core/Card';
import { TwitterTimelineEmbed } from 'react-twitter-embed';
import { Button } from '../../../globalStyles';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Picture4 from '../home/Picture4.png';
import Picture5 from '../home/Picture5.png';
import Picture6 from '../home/Picture6.png';
import Picture7 from '../home/Picture7.png';
var { SocialIcon } = require('react-social-icons');
export default function AboutVendor(props) {
    const [post, setPost] = useState(null);

    useEffect(() => {
        Axios.get("https://api.airtable.com/v0/appDrjzV9YZk6MRQA/cpaas%20Vendors%20(Synced)/" + props.match.params.id + "?api_key=keyIRsjrVlk0Wnz9b").then(
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
                        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', padding: '2rem 0', paddingLeft: '8rem', background: '#1283DA' }}>
                            <img style={{ margin: '0 3rem', borderRadius: '8px', width: '6vw', height: '6vw', marginLeft: '2rem', background: '#fff' }} src={post.fields.Airtable_Vendor_Logo[0].url} alt="VendorProfile" />
                            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                                <p style={{ color: '#E4E7EB', fontSize: '16px', marginBottom: '-0.5rem' }}>Vendor</p>
                                <h2 style={{ fontSize: '40px', fontWeight: '500', color: '#fff' }}>{post.fields.Vendor_Name}</h2>
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
                                <div style={{ display: 'flex', flexDirection: 'row', marginLeft: '8rem', }}>
                                    <div className="card" style={{ padding: '0rem', paddingTop: '0rem', margin: '0 2rem', width: '45%' }}>
                                        {/*   <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', marginTop: '2rem' }}>
                                            <Button style={{ marginRight: '0.5rem', marginTop: '1rem', background: '#CFDFFF', color: '#111', padding: '10px' }}>Pure Player</Button>
                                            <Button style={{ marginTop: '1rem', background: '#CFDFFF', color: '#111', padding: '10px' }}>Top Vendors</Button>
                                        </div>*/}
                                        <br /><br/>
                                        <p style={{ textAlign: 'justify', fontSize: '16px' }}>Description <br /><span style={{ color: "#002060" }}>{post.fields.Vendor_Overview}</span></p>
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

                            <div style={{ display: 'flex', flexDirection: 'column' }}>
                                <TabPanel style={{background:'#F5F5F5'}}>
                                    <iframe className="airtable-embed" src={`https://airtable.com/embed/shrJFXIT0ZWH3JIv9/tblrZZDI120IzezHW?filter_Vendor_Name=${post.fields.Vendor_Name}&viewControls=on`} frameborder="0" onmousewheel="" width="80%" height="600" style={{ background: 'transparent', border: 'none', marginBottom: '0rem', paddingTop: '0rem', marginLeft: '10rem', marginRight: '10rem' }}></iframe>
                                    <div style={{ backgroundColor: '#F5F5F5', marginTop: '-2rem', overflow: 'overlay', height: '50px' }}>
                                    </div>
                                </TabPanel>
                                <TabPanel style={{background:'#F5F5F5'}}>
                                    <iframe className="airtable-embed" src={`https://airtable.com/embed/shrrzXsxpROZjNZOl/tbl44sysddBnhShw7?filter_Vendor_Name=${post.fields.Vendor_Name}&viewControls=on`} frameborder="0" onmousewheel="" width="80%" height="600" style={{ background: 'transparent', border: 'none', marginBottom: '0rem', paddingTop: '0rem', marginLeft: '10rem', marginRight: '10rem' }}></iframe>
                                    <div style={{ backgroundColor: '#F5F5F5', marginTop: '-2rem', overflow: 'overlay', height: '50px' }}>
                                    </div>
                                </TabPanel>
                                <TabPanel style={{background:'#F5F5F5'}}>
                                       <iframe className="airtable-embed" src={`https://airtable.com/embed/shrBZLziN8jWec6Ff/tblHmjfaRjjnZPh3r?filter_Vendor_Name=${post.fields.Vendor_Name}&viewControls=on`} onmousewheel="" width="80%" height="600" style={{ background: 'transparent', border:'none', marginBottom: '0rem', paddingTop: '0rem', marginLeft: '10rem', marginRight: '10rem' }}></iframe>
                                        <div style={{ backgroundColor: '#F5F5F5', marginTop: '-2rem', overflow: 'overlay', height: '50px' }}>
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
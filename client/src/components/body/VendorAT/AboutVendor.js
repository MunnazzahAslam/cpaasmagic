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
                                <h2 style={{ fontSize: '40px', fontWeight: '500', color: '#fff' }}>{post.fields['Vendor']}</h2>
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
                                <div style={{ display: 'flex', flexDirection: 'row', marginLeft: '8rem', alignItems: 'center' }}>
                                    <div style={{ paddingTop: '2rem', margin: '0 2rem', width: '30%', paddingLeft: '1rem' }}>
                                        <h5 style={{ paddingBottom: '2rem' }}>About</h5>
                                        <p>{post.fields.Headquarters},  {post.fields['Headquarter State or Province']},  {post.fields['Headquarter Country']}</p>
                                        <p>{post.fields['Company Size']}</p>
                                        <p>{post.fields['Ownership Type']}</p>
                                        <p>{post.fields.Founders}</p>
                                        <p>{post.fields['Founded Year']}</p>
                                        <p>{post.fields.Website}</p>
                                    </div>
                                    <div style={{ paddingTop: '2rem', margin: '0 2rem', width: '30%' }}>
                                        <h5 style={{ paddingBottom: '2rem' }}>Highlights</h5>
                                        <p>Stock Symbol<br /><p style={{ color: '#1283DA', padding: '0.3rem' }}>{post.fields['Stock Symbol']}</p></p>
                                        <p>Operational Regions<br /><p style={{ color: '#1283DA', padding: '0.3rem', width: '260px', maxWidth: '260px' }}>{post.fields['Operational Regions']}</p></p>
                                        <p>Number of Supported Countries<br /><p style={{ color: '#1283DA', padding: '0.3rem', width: '260px', maxWidth: '260px' }}>{post.fields['Number of Supported Countries']}</p></p>
                                    </div>
                                    <div style={{ paddingTop: '2rem', margin: '0 2rem', width: '30%' }}>
                                        <h5 style={{ paddingBottom: '2rem' }}>Support</h5>
                                        <p >Scalable Global Platform: <span style={{ color: '#1283DA' }}>{post.fields['Scalable Global Platform']}</span></p>
                                        <p >Voice Routing Reach: <span style={{ color: '#1283DA' }}>{post.fields['Voice Routing Reach']}</span></p>
                                        <p >SMS Routing Reach: <span style={{ color: '#1283DA' }}>{post.fields['SMS Routing Reach']}</span></p>
                                        <p >Messaging API Capability: <span style={{ color: '#1283DA' }}>{post.fields['Messaging API Capability']}</span></p>
                                        <p >Communications API Capability: <span style={{ color: '#1283DA' }}>{post.fields['Communications API Capability']}</span></p>
                                        <p >Advanced API Capability: <span style={{ color: '#1283DA' }}>{post.fields['Advanced API Capability']}</span></p>
                                    </div>
                                </div><hr></hr>
                                <div style={{ display: 'flex', flexDirection: 'row', marginLeft: '8rem', alignItems: 'center' }}>
                                    <div style={{ display: 'flex', paddingTop: '2rem', margin: '0 2rem', width: '60%', paddingLeft: '1rem' }}>
                                        <div><h5 style={{ paddingBottom: '2rem' }}>Details</h5>
                                            <p>Industry<br /><p style={{ color: '#1283DA', padding: '0.3rem' }}>{post.fields['Industry']}</p></p>
                                            <p>Founded Year<br /><p style={{ color: '#1283DA', padding: '0.3rem', width: '260px', maxWidth: '260px' }}>{post.fields['Founded Year']}</p></p>
                                            <p>Local Support Countries<br /><p style={{ color: '#1283DA', padding: '0.3rem', width: '160px', maxWidth: '160px' }}>{post.fields['Local Support Countries']}</p></p>
                                            <p>Phone Number<br /><p style={{ color: '#1283DA', padding: '0.3rem', width: '260px', maxWidth: '260px' }}>{post.fields['Phone Number']}</p></p>
                                        </div>
                                        <div style={{ paddingTop: '4rem', paddingLeft: '8rem' }}>
                                            <p>Languages Supported<br /><p style={{ color: '#1283DA', padding: '0.3rem', width: '160px', maxWidth: '160px' }}>{post.fields['Languages Supported']}</p></p>
                                            <p>Company Type<br /><p style={{ color: '#1283DA', padding: '0.3rem', width: '260px', maxWidth: '260px' }}>{post.fields['Operational Regions']}</p></p>
                                            <p>Contact Email<br /><p style={{ color: '#1283DA', padding: '0.3rem', width: '260px', maxWidth: '260px' }}>{post.fields['Contact Email']}</p></p>
                                        </div>

                                    </div>
                                  
                                </div><hr></hr>
                                <div style={{ display: 'flex', flexDirection: 'row', marginLeft: '8rem', alignItems: 'center' }}>
                                    <div style={{ paddingTop: '2rem', margin: '0 2rem', width: '60%', paddingLeft: '1rem' }}>
                                        <p>{post.fields['Vendor Description']}</p>
                                        <p>{post.fields['Unique Sell Point']}</p>
                                        <p>Support Services<br />{post.fields['Support Services']}</p>
                                        <p>Pricing Tiers<br />{post.fields['Pricing Tiers']}</p>
                                        <p style={{ color: '#1283DA' }}><u>Read More</u></p>

                                    </div>
                                    <Card style={{ width: '400px', height: '400px', marginTop: '2.5rem', marginLeft: '4rem' }}>
                                        <TwitterTimelineEmbed
                                            sourceType="profile"
                                            screenName={post.fields['Vendor']}
                                            options={{ height: 400, width: 400 }}
                                        />
                                    </Card>
                                </div>
                                <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginLeft: '8rem', alignItems: 'center', marginBottom: '5rem' }}>
                                    <div style={{ paddingTop: '2rem', margin: '0 2rem', width: '60%', paddingLeft: '1rem' }}>
                                        <SocialIcon network="linkedin" style={{ height: 35, width: 35, marginRight: '0.5rem' }} />
                                        <SocialIcon network="youtube" style={{ height: 35, width: 35, marginRight: '0.5rem' }} />
                                        <SocialIcon network="facebook" style={{ height: 35, width: 35, marginRight: '0.5rem' }} />
                                        <SocialIcon network="twitter" style={{ height: 35, width: 35, marginRight: '0.5rem' }} />
                                    </div>
                                </div>

                                {/*  <div className="card-one" style={{ padding: '0rem', margin: '0 2rem', width: '45%' }}>
                                           <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', marginTop: '2rem' }}>
                                            <Button style={{ marginRight: '0.5rem', marginTop: '1rem', background: '#CFDFFF', color: '#111', padding: '10px' }}>Pure Player</Button>
                                            <Button style={{ marginTop: '1rem', background: '#CFDFFF', color: '#111', padding: '10px' }}>Top Vendors</Button>
                                    </div> 
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
                                            screenName={post.fields['Vendor']}
                                            options={{ height: 550, width: 490 }}
                                        />
                                    </Card>*/}
                                {/* {   </Card>
                            <Card style={{ width: '490px', height: '450px' }}>
                                <TwitterTimelineEmbed
                                    sourceType="profile"
                                    screenName={post.fields.TransformX_Vendor_Name}
                                    options={{ height: 550, width: 550 }}
                                />
                            </Card>*/}
                            </TabPanel>

                            <div style={{ display: 'flex', flexDirection: 'column' }}>
                                <TabPanel style={{ background: '#Fff' }}>
                                    <iframe className="airtable-embed" src={`https://airtable.com/embed/shrJFXIT0ZWH3JIv9?filter_Vendor%20Id=${post.fields['Vendor Id']}&viewControls=on`} frameborder="0" onmousewheel="" width="100%" height="610" style={{ background: 'transparent', border: 'none', marginBottom: '-2rem', paddingTop: '0rem', marginRight: '10rem' }}></iframe>

                                </TabPanel>
                                <TabPanel style={{ background: '#Fff' }}>
                                    <iframe className="airtable-embed" src={`https://airtable.com/embed/shrrzXsxpROZjNZOl?filter_Vendor%20Id=${post.fields['Vendor Id']}&viewControls=on`} frameborder="0" onmousewheel="" width="100%" height="610" style={{ background: 'transparent', border: 'none', marginBottom: '-2rem', paddingTop: '0rem', marginRight: '10rem' }}></iframe>

                                </TabPanel>
                                <TabPanel style={{ background: '#Fff' }}>
                                    <iframe className="airtable-embed" src={`https://airtable.com/embed/shrBZLziN8jWec6Ff?filter_Vendor%20Id=${post.fields['Vendor Id']}&viewControls=on`} onmousewheel="" width="100%" height="610" style={{ background: 'transparent', border: 'none', marginBottom: '-2rem', paddingTop: '0rem', marginRight: '10rem' }}></iframe>

                                </TabPanel>
                            </div>
                        </Tabs>
                    </div>
                </div>
            )}
        </div>
    );
}
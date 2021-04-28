import React, { useState, useEffect } from "react";
import Axios from "axios";
import { Accordion, Card } from 'react-bootstrap';
import { Button } from '../../../globalStyles';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { TwitterTimelineEmbed } from 'react-twitter-embed';
var { SocialIcon } = require('react-social-icons');
export default function SuccessAT(props) {
    const [post, setPost] = useState(null);
    const [vendor, setVendor] = useState(null);
    const [api, setApi] = useState(null);
    const [success, setSuccess] = useState(null);

    useEffect(() => {

        Axios.get("https://api.airtable.com/v0/appDrjzV9YZk6MRQA/cpaas%20Successes/" + props.match.params.id + "?api_key=keyIRsjrVlk0Wnz9b").then(
            response => {
                setPost(response.data);
            }
        );
    }, [setPost]);


    async function fetchData() {
        try {
            const responsePost = await Axios.get("https://api.airtable.com/v0/appDrjzV9YZk6MRQA/cpaas%20Successes/" + props.match.params.id + "?api_key=keyIRsjrVlk0Wnz9b");
            const res = responsePost.data;

            var get_options = {
                'method': 'get',
                'headers': {
                    Authorization: 'Bearer keyIRsjrVlk0Wnz9b'
                },
            }

            var url = 'https://api.airtable.com/v0/appDrjzV9YZk6MRQA/cpaas%20Vendors?filterByFormula=%7BVendor%20Name%7D+%3D+%22' + responsePost.data.fields['Vendor'] + '%22';

            const responseV = await Axios.get(url, get_options)
            setVendor(responseV.data.records[0].fields);

            var apiurl = 'https://api.airtable.com/v0/appDrjzV9YZk6MRQA/cpaas%20APIs?filterByFormula=%7BVendor%20Name%7D+%3D+%22' + responsePost.data.fields['Vendor'] + '%22';

            const responseA = await Axios.get(apiurl, get_options)
            setApi(responseA.data.records[0].fields);

            var successurl = 'https://api.airtable.com/v0/appDrjzV9YZk6MRQA/cpaas%20Successes?filterByFormula=%7BVendor%20Name%7D+%3D+%22' + responsePost.data.fields['Vendor'] + '%22';

            const responseS = await Axios.get(successurl, get_options)
            setSuccess(responseS.data.records[0].fields);
        }
        catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div>
            {post && (
                <div style={{ marginBottom: '2rem' }}>
                    <div style={{ width: '100%', height: '100%' }}>
                        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', padding: '2rem 0', paddingLeft: '8rem', paddingRight: '2rem', background: '#1283DA', color: '#fff' }}>
                            <img style={{ margin: '0 3rem', borderRadius: '8px', width: '6vw', height: '6vw', marginLeft: '2rem', background: '#fff' }} src={post.fields['Client Logo'][0].url} alt="VendorProfile" />
                            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', marginLeft: '2rem' }}>
                                <p style={{ color: '#E4E7EB', fontSize: '16px', marginBottom: '-0rem' }}>Success</p>
                                <h2 style={{ fontSize: '30px', fontWeight: '500', color: '#fff' }}>{post.fields['Success']}</h2>
                                {/*<div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                                 <div style={{ marginTop: '0.5rem' }}>
                                     <SocialIcon network="linkedin" style={{ height: 35, width: 35, marginRight: '0.5rem' }} />
                                     <SocialIcon network="youtube" style={{ height: 35, width: 35, marginRight: '0.5rem' }} />
                                     <SocialIcon network="facebook" style={{ height: 35, width: 35, marginRight: '0.5rem' }} />
                                     <SocialIcon network="twitter" style={{ height: 35, width: 35, marginRight: '0.5rem' }} />
                                 </div>
                             </div>
                             <div style={{ marginBottom: '2rem' }}>
                    <div style={{ width: '100%', height: '100%' }}>
                        <div style={{ marginTop: '1rem', marginLeft: '2rem', marginRight: '2rem' }}>
                            <Button style={{ marginTop: '1rem', marginLeft: '2rem', marginRight: '2rem', background: '#CFDFFF', color: '#111', padding:'8px' }}>{post.fields.TransformX_Vendor_Name}</Button><br />
                            <Button style={{ marginTop: '1rem', marginLeft: '2rem', marginRight: '2rem', background: '#CFDFFF', color: '#111', padding:'8px'}}>{post.fields.TransformX_Success_Story_Industry}</Button><br />
                            <Button style={{ marginTop: '1rem', marginLeft: '2rem', marginRight: '2rem', background: '#CFDFFF', color: '#111', padding:'8px' }}>{post.fields.TransformX_Success_Story_Sub_Region}</Button>
                            <br /> 
                            <h1 style={{ textAlign: 'center' }}>{post.fields.TransformX_Success_Story_Name}</h1><br/>
                            <div style={{ minWidth: '800px', maxWidth: '800px', textAlign: 'justify', margin: '0 auto', paddingTop: '24px'}}>
                            <p style={{ textAlign: 'justify', fontSize: 'clamp(1.4rem, 1.2vw, 1rem)', color: '#383838' }}><b>Challenge</b><br /></p>
                            <Button style={{ marginTop: '1rem', background: '#CFDFFF', color: '#111', padding:'8px' }}>{post.fields.TransformX_Success_Story_Challenge_Title}</Button><br/>
                            <br /><p>{post.fields.TransformX_Success_Story_Challenge}</p><br /><br />
                            <p style={{ textAlign: 'justify', fontSize: 'clamp(1.4rem, 1.2vw, 1rem)', color: '#383838' }}><b>Solution</b><br /></p>
                            <Button style={{ marginTop: '1rem', background: '#CFDFFF', color: '#111', padding:'8px' }}>{post.fields.Vendor_API_Name_1}</Button><br/>
                            <br /><p>{post.fields.TransformX_Success_Story_Solution}</p><br /><br />
                            <p style={{ textAlign: 'justify', fontSize: 'clamp(1.4rem, 1.2vw, 1rem)', color: '#383838' }}><b>Result</b></p><br /><p>{post.fields.TransformX_Success_Story_Result}</p><br /><br />
                        </div>
                    </div>
                </div>
                </div>
                             */}
                            </div>
                        </div>
                        {/* <div style={{ display: 'flex', flexDirection: 'row', marginTop: '1rem', marginLeft: '2rem', marginRight: '2rem' }}>
                           { <Card className="card" style={{ padding: '2rem', paddingTop: '0rem', margin: '0 2rem', width: '66%' }}>
                                                               <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start' }}>
                                 <Button style={{ marginRight: '0.5rem', backgroundImage: 'linear-gradient(45deg,#6DCDF2,#1EB5ED )' }}>Pure Player</Button>
                                 <Button style={{ backgroundImage: 'linear-gradient(45deg,#62A6D9,#1F7FC4 )' }}>Top Vendors</Button>
                             </div>} 
                           </Card>
                        {/* <Card style={{ width: '490px', height: '450px' }}>
                                <TwitterTimelineEmbed
                                    sourceType="profile"
                                    screenName={post.fields.TransformX_Vendor_Name}
                                    options={{ height: 550, width: 550 }}
                                />
                            </Card>
                        </div>*/}
                        <Tabs defaultIndex={0}>
                            <br />
                            <br />
                            <div className=".react-tabs__tab-list" >
                                <TabList style={{ paddingLeft: '10rem', }}>
                                    <Tab><div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>Success Description</div></Tab>
                                    <Tab><div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>Success Vendor</div></Tab>
                                    <Tab><div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>Success APIs</div></Tab>
                                    <Tab><div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>Sucess Use Cases</div></Tab>
                                </TabList>
                            </div>
                            <TabPanel>
                                <div style={{ display: 'flex', flexDirection: 'row', marginLeft: '8rem', alignItems: 'center' }}>
                                    <div style={{ paddingTop: '2rem', margin: '0 2rem', width: '60%', paddingLeft: '1rem' }}>
                                        <h5 style={{ paddingBottom: '2rem' }}>About</h5>
                                        <p>{post.fields['Client Description']}</p>
                                        <p style={{ fontWeight: '480' }}>Industry</p>
                                        <p><span style={{ background: '#D0F0FD', color: '#222', borderRadius: '33px', padding: '0.5rem', marginRight: '0.5rem' }}>{post.fields['Success Industry']}</span></p>
                                        <p style={{ fontWeight: '480' }}>{post.fields['Client Name']} Headquarter</p>
                                        <p><span style={{ background: '#FFDAF6', color: '#222', borderRadius: '33px', padding: '0.5rem', marginRight: '0.5rem' }}>{post.fields['Client Headquarter']}</span></p>
                                        <p style={{ fontWeight: '480' }}>Country</p>
                                        <p><span style={{ background: '#CFDFFF', color: '#222', borderRadius: '33px', padding: '0.5rem', marginRight: '0.5rem' }}>{post.fields['Success Country']}</span></p>
                                        <p style={{ fontWeight: '480' }}>Region</p>
                                        <p><span style={{ background: '#EDE2FE', color: '#222', borderRadius: '33px', padding: '0.5rem', marginRight: '0.5rem' }}>{post.fields['Success Region']}, {post.fields['Success Sub Region']}</span></p>
                                    </div>
                                    <Card style={{ width: '400px', height: '400px', marginTop: '2.5rem', marginLeft: '4rem' }}>
                                        <TwitterTimelineEmbed
                                            sourceType="profile"
                                            screenName={post.fields['Vendor']}
                                            options={{ height: 400, width: 400 }}
                                        />
                                    </Card>
                                </div>
                                <hr></hr>
                                <div style={{ display: 'flex', flexDirection: 'row', marginLeft: '8rem', alignItems: 'center',height:'300px' }}>
                                    <div style={{ display: 'flex', paddingTop: '2rem', margin: '0 2rem', width: '100%', paddingLeft: '1rem',justifyContent: 'xenter' }}>
                                        <div><h5 style={{ paddingBottom: '2rem', marginRight: '8rem' }}>Success Challenge</h5>
                                            <p style={{ width: '400px', maxWidth: '400px',marginRight:'8rem', textAlign: 'justify' }}>{post.fields['Challenge Description']}</p>
                                        </div>
                                        <div><h5 style={{ paddingBottom: '2rem', marginRight: '8rem' }}>Success Solution</h5>
                                            <p style={{ width: '400px', maxWidth: '400px',marginRight:'8rem', textAlign: 'justify' }}>{post.fields['Success Solution']}</p>
                                        </div>
                                        <div><h5 style={{ paddingBottom: '2rem' }}>Success Result</h5>
                                            <p style={{ width: '400px', maxWidth: '400px', textAlign: 'justify' }}>{post.fields['Success Result']}</p>
                                        </div>
                                    </div>
                                </div>
                                <hr></hr>
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
                                {/*    <div style={{ display: 'flex', flexDirection: 'row', marginLeft: '8rem', marginRight: '2rem', alignItems:'center' }}>
                                    <div className="card-one" style={{ padding: '0rem', margin: '0 2rem', width: '45%' }}>
                                        <p style={{ textAlign: 'justify', fontSize: '16px' }}>Description <br /><span style={{ color: "#002060" }}>{post.fields['API Description']}</span></p>
                                        <br />
                                        <p style={{ textAlign: 'justify', fontSize: '16px' }}>Features <br /></p>
                                        <br />
                                        <p style={{ textAlign: 'justify', fontSize: '14px' }}>{post.fields['API Feature 1']}<br /> <span style={{ color: "#002060" }}>{post.fields['API Feature Description 1']}</span></p>
                                        <br />
                                        <p style={{ textAlign: 'justify', fontSize: '14px' }}>{post.fields['API Feature 2']}<br /> <span style={{ color: "#002060" }}>{post.fields['API Feature Description 2']}</span></p>
                                        <br />
                                        <p style={{ textAlign: 'justify', fontSize: '14px' }}>{post.fields['API Feature 3']}<br /> <span style={{ color: "#002060" }}>{post.fields['API Feature Description 3']}</span></p>
                                        <br />
                                        <p style={{ textAlign: 'justify', fontSize: '14px' }}>{post.fields['API Feature 4']}<br /> <span style={{ color: "#002060" }}>{post.fields['API Feature Description 4']}</span></p>
                                        <br />
                                        <p style={{ textAlign: 'justify', fontSize: '14px' }}>{post.fields['API Feature 5']}<br /> <span style={{ color: "#002060" }}>{post.fields['API Feature Description 5']}</span></p>
                                        </div>
                                    <Card style={{ width: '490px', height: '450px', margin: '1.5rem', marginLeft: '12rem' }}>
                                        <TwitterTimelineEmbed
                                            sourceType="profile"
                                            screenName={post.fields['Vendor']}
                                            options={{ height: 550, width: 490 }}
                                        />
                                    </Card>
                                </div>

                                 {   </Card>
                            <Card style={{ width: '490px', height: '450px' }}>
                                <TwitterTimelineEmbed
                                    sourceType="profile"
                                    screenName={vendorTransformX_Vendor_Name}
                                    options={{ height: 550, width: 550 }}
                                />
                            </Card>
                             */}
                                {/* {     <div style={{ display: 'flex', flexDirection: 'row', marginLeft: '8rem', marginRight: '2rem', alignItems: 'center' }}>
                                    <div className="card-one" style={{ padding: '0rem', margin: '0 2rem', width: '45%' }}>
                                        <p style={{ textAlign: 'justify', fontSize: '16px' }}>Challenge<br /></p>
                                        <Button style={{ marginTop: '1rem', background: '#CFDFFF', color: '#111', fontSize: '14px' }}>{post.fields['Challenge Title']}</Button><br />
                                        <br /><p style={{ color: "#002060" }}>{post.fields['Challenge Description']}</p><br /><br />
                                        <p style={{ textAlign: 'justify', fontSize: '16px' }}>Solution<br /></p>
                                        <p style={{ color: "#002060" }}>{post.fields['Success Solution']}</p><br /><br />
                                        <p style={{ textAlign: 'justify', fontSize: '16px' }}>Result</p><p style={{ color: "#002060" }}>{post.fields['Success Result']}</p>
                                    </div>
                                    <Card style={{ width: '490px', height: '450px', margin: '1.5rem', marginLeft: '12rem', marginTop: '4rem' }}>
                                        <TwitterTimelineEmbed
                                            sourceType="profile"
                                            screenName={post.fields['Vendor']}
                                            options={{ height: 550, width: 550 }}
                                        />
                                    </Card>
                                </div>

                                  </Card>
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
                                    {vendor != null ?
                                        <>
                                            <div style={{ display: 'flex', flexDirection: 'row', marginLeft: '8rem', alignItems: 'center' }}>
                                                <div style={{ paddingTop: '2rem', margin: '0 2rem', width: '30%', paddingLeft: '1rem' }}>
                                                    <h5 style={{ paddingBottom: '2rem' }}>About {vendor.Vendor}</h5>
                                                    <p>{vendor.Headquarters},  {vendor['Headquarter State or Province']},  {vendor['Headquarter Country']}</p>
                                                    <p>{vendor['Company Size']}</p>
                                                    <p>{vendor['Ownership Type']}</p>
                                                    <p>{vendor.Founders}</p>
                                                    <p>{vendor['Founded Year']}</p>
                                                    <p>{vendor.Website}</p>
                                                </div>
                                                <div style={{ paddingTop: '2rem', margin: '0 2rem', width: '30%' }}>
                                                    <h5 style={{ paddingBottom: '2rem' }}>Highlights</h5>
                                                    <p>Stock Symbol<br /><p style={{ color: '#1283DA', padding: '0.3rem' }}>{vendor['Stock Symbol']}</p></p>
                                                    <p>Operational Regions<br /><p style={{ color: '#1283DA', padding: '0.3rem', width: '260px', maxWidth: '260px' }}>{vendor['Operational Regions']}</p></p>
                                                    <p>Number of Supported Countries<br /><p style={{ color: '#1283DA', padding: '0.3rem', width: '260px', maxWidth: '260px' }}>{vendor['Number of Supported Countries']}</p></p>
                                                </div>
                                                <div style={{ paddingTop: '2rem', margin: '0 2rem', width: '30%' }}>
                                                    <h5 style={{ paddingBottom: '2rem' }}>Support</h5>
                                                    <p >Scalable Global Platform: <span style={{ color: '#1283DA' }}>{vendor['Scalable Global Platform']}</span></p>
                                                    <p >Voice Routing Reach: <span style={{ color: '#1283DA' }}>{vendor['Voice Routing Reach']}</span></p>
                                                    <p >SMS Routing Reach: <span style={{ color: '#1283DA' }}>{vendor['SMS Routing Reach']}</span></p>
                                                    <p >Messaging API Capability: <span style={{ color: '#1283DA' }}>{vendor['Messaging API Capability']}</span></p>
                                                    <p >Communications API Capability: <span style={{ color: '#1283DA' }}>{vendor['Communications API Capability']}</span></p>
                                                    <p >Advanced API Capability: <span style={{ color: '#1283DA' }}>{vendor['Advanced API Capability']}</span></p>
                                                </div>
                                            </div><hr></hr>
                                            <div style={{ display: 'flex', flexDirection: 'row', marginLeft: '8rem', alignItems: 'center' }}>
                                                <div style={{ display: 'flex', paddingTop: '2rem', margin: '0 2rem', width: '60%', paddingLeft: '1rem' }}>
                                                    <div><h5 style={{ paddingBottom: '2rem' }}>Details</h5>
                                                        <p>Industry<br /><p style={{ color: '#1283DA', padding: '0.3rem' }}>{vendor['Industry']}</p></p>
                                                        <p>Founded Year<br /><p style={{ color: '#1283DA', padding: '0.3rem', width: '260px', maxWidth: '260px' }}>{vendor['Founded Year']}</p></p>
                                                        <p>Local Support Countries<br /><p style={{ color: '#1283DA', padding: '0.3rem', width: '160px', maxWidth: '160px' }}>{vendor['Local Support Countries']}</p></p>
                                                        <p>Phone Number<br /><p style={{ color: '#1283DA', padding: '0.3rem', width: '260px', maxWidth: '260px' }}>{vendor['Phone Number']}</p></p>
                                                    </div>
                                                    <div style={{ paddingTop: '4rem', paddingLeft: '8rem' }}>
                                                        <p>Languages Supported<br /><p style={{ color: '#1283DA', padding: '0.3rem', width: '180px', maxWidth: '180px' }}>{vendor['Languages Supported']}</p></p>
                                                        <p>Company Type<br /><p style={{ color: '#1283DA', padding: '0.3rem', width: '260px', maxWidth: '260px' }}>{vendor['Operational Regions']}</p></p>
                                                        <p>Contact Email<br /><p style={{ color: '#1283DA', padding: '0.3rem', width: '260px', maxWidth: '260px' }}>{vendor['Contact Email']}</p></p>
                                                    </div>

                                                </div>
                                                <Card style={{ width: '400px', height: '400px', marginTop: '2.5rem', marginLeft: '4rem', marginBottom: '2.5rem' }}>
                                                    <TwitterTimelineEmbed
                                                        sourceType="profile"
                                                        screenName={vendor['Vendor']}
                                                        options={{ height: 400, width: 400 }}
                                                    />
                                                </Card>
                                            </div><hr></hr>
                                            <div style={{ display: 'flex', flexDirection: 'row', marginLeft: '8rem', alignItems: 'center' }}>
                                                <div style={{ paddingTop: '2rem', margin: '0 2rem', width: '60%', paddingLeft: '1rem' }}>
                                                    <p>{vendor['Vendor Description']}</p>
                                                    <p>{vendor['Unique Sell Point']}</p>
                                                    <p>Support Services<br />{vendor['Support Services']}</p>
                                                    <p>Pricing Tiers<br />{vendor['Pricing Tiers']}</p>
                                                    <p style={{ color: '#1283DA' }}><u>Read More</u></p>

                                                </div>
                                                <Card style={{ width: '400px', height: '400px', marginTop: '2.5rem', marginLeft: '4rem' }}>
                                                    <TwitterTimelineEmbed
                                                        sourceType="profile"
                                                        screenName={vendor['Vendor']}
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
                                          <p style={{ textAlign: 'justify', fontSize: '16px' }}>Founders <br /> <span style={{ color: "#002060" }}>{vendorFounders}</span></p>
                                          <br />
                                          <p style={{ textAlign: 'justify', fontSize: '16px' }}>Founded in <br /> <span style={{ color: "#002060" }}>{post.fields['Founded Year']}</span></p>
                                          <br />
                                          <p style={{ textAlign: 'justify', fontSize: '16px' }}>Industry <br /> <span style={{ color: "#002060" }}>{vendorIndustry}</span></p>
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
                                      screenName={vendorTransformX_Vendor_Name}
                                      options={{ height: 550, width: 550 }}
                                  />
                              </Card>*/}</> : ""}
                                </TabPanel>
                                <TabPanel style={{ background: '#F5F5F5' }}>
                                    <iframe className="airtable-embed" src={`https://airtable.com/embed/shrJFXIT0ZWH3JIv9?filter_Success%20Id=${post.fields['Success Id']}&viewControls=on`} width="100%" height="610" style={{ background: 'transparent', border: 'none', marginBottom: '-4rem', paddingTop: '0rem', marginRight: '10rem' }}></iframe>
                                </TabPanel>
                                <TabPanel style={{ background: '#Fff' }}>
                                    <iframe className="airtable-embed" src={`https://airtable.com/embed/shrrzXsxpROZjNZOl?filter_Success%20Id=${post.fields['Success Id']}&viewControls=on`} width="100%" height="610" style={{ background: 'transparent', border: 'none', marginBottom: '-4rem', paddingTop: '0rem', marginRight: '10rem' }}></iframe>
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
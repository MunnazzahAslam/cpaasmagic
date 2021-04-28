import React, { useState, useEffect } from "react";
import Axios from "axios";
import Card from '@material-ui/core/Card';
import { TwitterTimelineEmbed, TwitterShareButton, TwitterFollowButton, TwitterHashtagButton, TwitterMentionButton, TwitterTweetEmbed, TwitterMomentShare, TwitterDMButton, TwitterVideoEmbed, TwitterOnAirButton } from 'react-twitter-embed';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { Button } from '../../../globalStyles';
var { SocialIcon } = require('react-social-icons');

export default function UsecaseAT(props) {
    const [post, setPost] = useState(null);
    const [vendor, setVendor] = useState(null);

    useEffect(() => {

        Axios.get("https://api.airtable.com/v0/appDrjzV9YZk6MRQA/cpaas%20Usecases/" + props.match.params.id + "?api_key=keyIRsjrVlk0Wnz9b").then(
            response => {
                setPost(response.data);
                console.log(response.data);
            }
        );
    }, [setPost]);


    async function fetchData() {
        try {
            const responsePost = await Axios.get("https://api.airtable.com/v0/appDrjzV9YZk6MRQA/cpaas%20Usecases/" + props.match.params.id + "?api_key=keyIRsjrVlk0Wnz9b");
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
                        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', padding: '2rem 0', paddingLeft: '10rem', paddingRight: '2rem', background: '#1283DA' }}>{/*
                            <img style={{ margin: '0 2rem', borderRadius: '8px', width: '6vw', height: '6vw', marginLeft: '2rem' }} src={post.fields.Airtable_Usecase_Logo[0].url} alt="VendorProfile" />*/}
                            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                                <p style={{ color: '#E4E7EB', fontSize: '16px', marginBottom: '-0.5rem' }}>Use Case</p>
                                <h2 style={{ fontSize: '40px', fontWeight: '500', color: '#fff' }}>{post.fields['Usecase']}</h2>
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
                           <Card className="card" style={{ padding: '2rem', paddingTop: '0rem', margin: '0 2rem', width: '66%' }}>
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
                                    <Tab><div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>Use Case Description</div></Tab>
                                    <Tab><div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>Use Case Vendor</div></Tab>
                                    <Tab><div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>Use Case APIs</div></Tab>
                                    <Tab><div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>Use Case Successes</div></Tab>
                                </TabList>
                            </div>
                            <TabPanel>
                                <div style={{ display: 'flex', flexDirection: 'row', marginLeft: '8rem', alignItems: 'center' }}>
                                    <div style={{ paddingTop: '2rem', margin: '0 2rem', width: '70%', paddingLeft: '1rem' }}>
                                        <h5 style={{ paddingBottom: '0.5rem' }}>About</h5>
                                        <p>{post.fields['Usecase Description']}</p>
                                        <p style={{ fontWeight: '480' }}>Industry</p>
                                        <p>{post.fields['Industry']}</p>
                                        <p>Category</p>
                                        <p><span  style={{ fontWeight: '480', background:'#D1F7C4', color: '#222', borderRadius: '33px', padding: '0.5rem', marginRight: '0.5rem' }}>{post.fields['Category']}</span></p>
                                        <p style={{ fontWeight: '480' }}>APIs Used</p>
                                        <p><span style={{ background: '#D0F0FD', color: '#222', borderRadius: '33px', padding: '0.5rem', marginRight: '0.5rem' }}>{post.fields['API Used 1']}</span><span style={{ padding: '0.5rem', marginRight: '0.5rem', background: '#D0F0FD', color: '#222', borderRadius: '33px' }}>{post.fields['API Used 2']}</span></p>
                                    </div>
                                </div><hr></hr>
                                <div style={{ display: 'flex', flexDirection: 'row', marginLeft: '8rem', alignItems: 'center' }}>
                                    <div style={{ display: 'flex', paddingTop: '2rem', margin: '0 2rem', width: '60%', paddingLeft: '1rem' }}>
                                        <div><h5 style={{ paddingBottom: '2rem' }}>Process</h5>
                                            <br /><p> {post.fields['Process Step 1']}</p><br />
                                            <p> {post.fields['Process Step 2']}</p><br />
                                            <p> {post.fields['Process Step 3']}</p><br />
                                            <p> {post.fields['Process Step 4']}</p><br />
                                            <p> {post.fields['Process Step 5']}</p><br />
                                        </div>
                                    </div>
                                    <Card style={{ width: '400px', height: '400px', marginTop: '2.5rem', marginLeft: '4rem', marginBottom: '2.5rem' }}>
                                        <TwitterTimelineEmbed
                                            sourceType="profile"
                                            screenName={post.fields['Vendor']}
                                            options={{ height: 400, width: 400 }}
                                        />
                                    </Card>
                                </div><hr></hr>
                                <div style={{ display: 'flex', flexDirection: 'row', marginLeft: '8rem', alignItems: 'center' }}>
                                    <div style={{ paddingTop: '2rem', margin: '0 2rem', width: '60%', paddingLeft: '1rem' }}>
                                        <h5 style={{ paddingBottom: '2rem' }}>Value Generated</h5><br/>
                                        <p> {post.fields['Usecase Value Generated 1']}</p><br />
                                        <p> {post.fields['Usecase Value Generated 2']}</p><br />
                                        <p> {post.fields['Usecase Value Generated 3']}</p><br />
                                        <p> {post.fields['Usecase Value Generated 4']}</p><br />
                                        <p> {post.fields['Usecase Value Generated 5']}</p>
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
                                        <p style={{ textAlign: 'justify', fontSize: '16px' }}>Description <br /><span>{post.fields['Vendor Description']}</span></p>
                                        <br />
                                        <p style={{ textAlign: 'justify', fontSize: '16px' }}>Founders <br /> <span>{post.fields.Founders}</span></p>
                                        <br />
                                        <p style={{ textAlign: 'justify', fontSize: '16px' }}>Founded in <br /> <span>{post.fields['Founded Year']}</span></p>
                                        <br />
                                        <p style={{ textAlign: 'justify', fontSize: '16px' }}>Industry <br /> <span>{post.fields.Industry}</span></p>
                                        <br />
                                        <p style={{ textAlign: 'justify', fontSize: '16px' }}>Company Size <br /> <span>{post.fields['Company Size']}</span></p>
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
                                        <p style={{ textAlign: 'justify', fontSize: '16px' }}>Description <br /><span>{post.fields['API Description']}</span></p>
                                        <br />
                                        <p style={{ textAlign: 'justify', fontSize: '16px' }}>Features <br /></p>
                                        <br />
                                        <p style={{ textAlign: 'justify', fontSize: '14px' }}>{post.fields['API Feature 1']}<br /> <span>{post.fields['API Feature Description 1']}</span></p>
                                        <br />
                                        <p style={{ textAlign: 'justify', fontSize: '14px' }}>{post.fields['API Feature 2']}<br /> <span>{post.fields['API Feature Description 2']}</span></p>
                                        <br />
                                        <p style={{ textAlign: 'justify', fontSize: '14px' }}>{post.fields['API Feature 3']}<br /> <span>{post.fields['API Feature Description 3']}</span></p>
                                        <br />
                                        <p style={{ textAlign: 'justify', fontSize: '14px' }}>{post.fields['API Feature 4']}<br /> <span>{post.fields['API Feature Description 4']}</span></p>
                                        <br />
                                        <p style={{ textAlign: 'justify', fontSize: '14px' }}>{post.fields['API Feature 5']}<br /> <span>{post.fields['API Feature Description 5']}</span></p>
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
                                {/*   <div style={{ display: 'flex', flexDirection: 'row', marginLeft: '9rem', alignItems: 'center' }}>
                                    <div className="card-one" style={{ paddingTop: '1.5rem', margin: '0 2rem', width: '45%', paddingBottom: '2rem' }}>
                                         <br />
                                        <Button style={{ marginTop: '1rem', background: '#CFDFFF', color: '#111', padding: '14px', marginRight: '0.5rem' }}>{post.fields.Usecase_Category}</Button>
                                        <Button style={{ marginTop: '1rem', background: '#CFDFFF', color: '#111', padding: '14px' }}>{post.fields.Usecase_Industry}</Button>
                                        <br /><br />
                                       <p style={{ textAlign: 'justify', fontSize: '16px' }}>Process<br /></p>
                                        <br /><p>- {post.fields['Process Step 1']}</p><br />
                                        <p>- {post.fields['Process Step 2']}</p><br />
                                        <p>- {post.fields['Process Step 3']}</p><br />
                                        <p>- {post.fields['Process Step 4']}</p><br />
                                        <p>- {post.fields['Process Step 5']}</p><br />
                                        <br />
                                        <p style={{ textAlign: 'justify', fontSize: '16px' }}>Value Generated<br /><br /></p>
                                        <p>- {post.fields['Usecase Value Generated 1']}</p><br />
                                        <p>- {post.fields['Usecase Value Generated 2']}</p><br />
                                        <p>- {post.fields['Usecase Value Generated 3']}</p><br />
                                        <p>- {post.fields['Usecase Value Generated 4']}</p><br />
                                        <p>- {post.fields['Usecase Value Generated 5']}</p>
                                    </div>
                                    <Card style={{ width: '490px', height: '450px', margin: '1.5rem', marginLeft: '12rem', marginTop: '5rem' }}>
                                        <TwitterTimelineEmbed
                                            sourceType="profile"
                                            screenName={post.fields['Vendor']}
                                            options={{ height: 550, width: 550 }}
                                        />
                                    </Card>
                                </div> */}
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
                                           <p style={{ textAlign: 'justify', fontSize: '16px' }}>Description <br /><span>{post.fields['Vendor Description']}</span></p>
                                           <br />
                                           <p style={{ textAlign: 'justify', fontSize: '16px' }}>Founders <br /> <span>{vendorFounders}</span></p>
                                           <br />
                                           <p style={{ textAlign: 'justify', fontSize: '16px' }}>Founded in <br /> <span>{post.fields['Founded Year']}</span></p>
                                           <br />
                                           <p style={{ textAlign: 'justify', fontSize: '16px' }}>Industry <br /> <span>{vendorIndustry}</span></p>
                                           <br />
                                           <p style={{ textAlign: 'justify', fontSize: '16px' }}>Company Size <br /> <span>{post.fields['Company Size']}</span></p>
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
                                    <iframe className="airtable-embed" src={`https://airtable.com/embed/shrJFXIT0ZWH3JIv9?filter_Usecase%20Id=${post.fields['Usecase Id']}&viewControls=on`} width="100%" height="610" style={{ background: 'transparent', border: 'none', marginBottom: '-4rem', paddingTop: '0rem', marginRight: '10rem' }}></iframe>
                                </TabPanel>
                                <TabPanel style={{ background: '#F5F5F5' }}>
                                    <iframe className="airtable-embed" src={`https://airtable.com/embed/shrBZLziN8jWec6Ff?filter_Usecase%20Id=${post.fields['Usecase Id']}&viewControls=on`} width="100%" height="610" style={{ background: 'transparent', border: 'none', marginBottom: '-4rem', paddingTop: '0rem', marginRight: '10rem' }}></iframe>
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
import React, { useState, useEffect } from "react";
import Axios from "axios";
import Card from '@material-ui/core/Card';
import { Button } from '../../../globalStyles';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { TwitterTimelineEmbed } from 'react-twitter-embed';

export default function SuccessAT(props) {
    const [post, setPost] = useState(null);
    const [vendor, setVendor] = useState(null);

    useEffect(() => {

        Axios.get("https://api.airtable.com/v0/appDrjzV9YZk6MRQA/cpaas%20Successes%20(Synced)/" + props.match.params.id + "?api_key=keyIRsjrVlk0Wnz9b").then(
            response => {
                setPost(response.data);
            }
        );
    }, [setPost]);


    async function fetchData() {
        try {
            const responsePost = await Axios.get("https://api.airtable.com/v0/appDrjzV9YZk6MRQA/cpaas%20Successes%20(Synced)/" + props.match.params.id + "?api_key=keyIRsjrVlk0Wnz9b");
            const res = responsePost.data;

            var get_options = {
                'method': 'get',
                'headers': {
                    Authorization: 'Bearer keyIRsjrVlk0Wnz9b'
                },
            }

            var url = 'https://api.airtable.com/v0/appDrjzV9YZk6MRQA/cpaas%20Vendors%20(Synced)?filterByFormula=%7BVendor%7D+%3D+%22' + responsePost.data.fields.Vendor + '%22';

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
                        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', padding: '2rem 0', paddingLeft: '8rem', paddingRight: '2rem', background: '#1283DA', color: '#fff' }}>
                            <img style={{ margin: '0 3rem', borderRadius: '8px', width: '6vw', height: '6vw', marginLeft: '2rem', background: '#fff' }} src={post.fields['Client Logo'][0].url} alt="VendorProfile" />
                            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', marginLeft: '2rem' }}>
                                <p style={{ color: '#E4E7EB', fontSize: '16px', marginBottom: '-0rem' }}>Success</p>
                                <h2 style={{ fontSize: '30px', fontWeight: '500', color: '#fff' }}>{post.fields.Success}</h2>
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
                                <div style={{ display: 'flex', flexDirection: 'row', marginLeft: '8rem', marginRight: '2rem' }}>
                                    <div className="card" style={{ padding: '0rem', paddingTop: '2rem', margin: '0 2rem', width: '45%' }}>
                                        <p style={{ textAlign: 'justify', fontSize: '16px' }}>Challenge<br /></p>
                                        <Button style={{ marginTop: '1rem', background: '#CFDFFF', color: '#111', fontSize: '14px' }}>{post.fields.Challenge}</Button><br />
                                        <br /><p style={{ color: "#002060" }}>{post.fields['Success Challenge']}</p><br /><br />
                                        <p style={{ textAlign: 'justify', fontSize: '16px' }}>Solution<br /></p>
                                        <p style={{ color: "#002060" }}>{post.fields['Success Solution']}</p><br /><br />
                                        <p style={{ textAlign: 'justify', fontSize: '16px' }}>Result</p><p style={{ color: "#002060" }}>{post.fields['Success Result']}</p>
                                    </div>
                                    <Card style={{ width: '490px', height: '450px', margin: '1.5rem', marginLeft: '12rem', marginTop: '4rem' }}>
                                        <TwitterTimelineEmbed
                                            sourceType="profile"
                                            screenName={post.fields.Vendor}
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
                                    {vendor != null ?
                                        <div style={{ display: 'flex', flexDirection: 'row', marginLeft: '8rem' }}>
                                            <div className="card" style={{ padding: '0rem', margin: '0 2rem', width: '45%' }}>
                                                <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                                                    <img style={{ borderRadius: '8px', width: '6vw', height: '6vw', marginTop: '2rem' }} src={vendor.Logo[0].url} alt="VendorProfile" />
                                                </div>
                                                <br />
                                                <p style={{ textAlign: 'justify', fontSize: '16px' }}>Description <br /><span style={{ color: "#002060" }}>{vendor.Description}</span></p>
                                                <br />
                                                <p style={{ textAlign: 'justify', fontSize: '16px' }}>Founders <br /> <span style={{ color: "#002060" }}>{vendor.Founders}</span></p>
                                                <br />
                                                <p style={{ textAlign: 'justify', fontSize: '16px' }}>Founded in <br /> <span style={{ color: "#002060" }}>{vendor['Founded Year']}</span></p>
                                                <br />
                                                <p style={{ textAlign: 'justify', fontSize: '16px' }}>Industry <br /> <span style={{ color: "#002060" }}>{vendor.Industry}</span></p>
                                                <br />
                                                <p style={{ textAlign: 'justify', fontSize: '16px' }}>Company Size <br /> <span style={{ color: "#002060" }}>{vendor['Company Size']}</span></p>
                                            </div>
                                            <Card style={{ width: '490px', height: '450px', margin: '1.5rem', marginLeft: '12rem' }}>
                                                <TwitterTimelineEmbed
                                                    sourceType="profile"
                                                    screenName={vendor.Vendor_Name}
                                                    options={{ height: 550, width: 490 }}
                                                />
                                            </Card>
                                        </div> : ""}
                                </TabPanel>
                                <TabPanel style={{ background: '#F5F5F5' }}>
                                    <iframe className="airtable-embed" src={`https://airtable.com/embed/shrJFXIT0ZWH3JIv9?filter_Success_Id=${post.fields.Success_Id}&viewControls=on`} width="100%" height="610" style={{ background: 'transparent', border: 'none', marginBottom: '-4rem', paddingTop: '0rem', marginRight: '10rem' }}></iframe>
                                </TabPanel>
                                <TabPanel style={{ background: '#Fff' }}>
                                    <iframe className="airtable-embed" src={`https://airtable.com/embed/shrrzXsxpROZjNZOl?filter_Success_Id=${post.fields.Success_Id}&viewControls=on`} width="100%" height="610" style={{ background: 'transparent', border: 'none', marginBottom: '-4rem', paddingTop: '0rem', marginRight: '10rem' }}></iframe>
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
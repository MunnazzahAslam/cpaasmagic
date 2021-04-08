import React, { useState, useEffect } from "react";
import Axios from "axios";
import Card from '@material-ui/core/Card';
import { Button } from '../../../globalStyles';
import { TwitterTimelineEmbed } from 'react-twitter-embed';
var { SocialIcon } = require('react-social-icons');

export default function SuccessAT(props) {
    const [post, setPost] = useState(null);

    useEffect(() => {

        Axios.get("https://api.airtable.com/v0/appX0cUWA9Pu6oveS/CPaaS%20Successes%20(Table)/" + props.match.params.id + "?api_key=keyIRsjrVlk0Wnz9b").then(
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
                        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', margin: '2rem 0', marginLeft: '2rem', marginRight: '2rem' }}>
                            <img style={{ margin: '0 2rem', borderRadius: '8px', width: '6vw', height: '6vw', marginLeft: '2rem' }} src={post.fields.TransformX_Success_Logo[0].url} alt="VendorProfile" />
                            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                                <p style={{ color: '#ced4da', fontSize: '16px', marginBottom: '-0.5rem' }}>{post.fields.TransformX_Vendor_Name} - Success</p>
                                <h2 style={{ fontSize: '30px', fontWeight: '500', color: '#383838' }}>{post.fields.TransformX_Success_Story_Name}</h2>
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
                           { <Card className="card" style={{ padding: '2rem', paddingTop: '0.5rem', margin: '0 2rem', width: '66%' }}>
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
                        <div style={{ display: 'flex', flexDirection: 'row', marginTop: '-2rem', marginLeft: '2rem', marginRight: '2rem' }}>
                            <div className="card" style={{ padding: '0rem', paddingTop: '0.5rem', margin: '0 2rem',minWidth: '800px', maxWidth: '800px', textAlign: 'justify', marginLeft: '11rem', }}>
                                <br />
                                <p style={{ textAlign: 'justify', fontSize: 'clamp(1.4rem, 1.2vw, 1rem)', color: '#383838' }}><b>Challenge</b><br /></p>
                                <Button style={{ marginTop: '1rem', background: '#CFDFFF', color: '#111', padding: '14px' }}>{post.fields.TransformX_Success_Story_Challenge_Title}</Button><br />
                                <br /><p>{post.fields.TransformX_Success_Story_Challenge}</p><br /><br />
                                <p style={{ textAlign: 'justify', fontSize: 'clamp(1.4rem, 1.2vw, 1rem)', color: '#383838' }}><b>Solution</b><br /></p>
                                <Button style={{ marginTop: '1rem', background: '#CFDFFF', color: '#111', padding: '14px' }}>{post.fields.Vendor_API_Name_1}</Button><br />
                                <br /><p>{post.fields.TransformX_Success_Story_Solution}</p><br /><br />
                                <p style={{ textAlign: 'justify', fontSize: 'clamp(1.4rem, 1.2vw, 1rem)', color: '#383838' }}><b>Result</b></p><br /><p>{post.fields.TransformX_Success_Story_Result}</p><br /><br />
                            </div>
                        </div>
                    </div>
                </div>
            )
            }
        </div >
    );
}
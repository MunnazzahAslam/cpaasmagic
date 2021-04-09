import React, { useState, useEffect } from "react";
import Axios from "axios";
import Card from '@material-ui/core/Card';
import { TwitterTimelineEmbed, TwitterShareButton, TwitterFollowButton, TwitterHashtagButton, TwitterMentionButton, TwitterTweetEmbed, TwitterMomentShare, TwitterDMButton, TwitterVideoEmbed, TwitterOnAirButton } from 'react-twitter-embed';
import { Button } from '../../../globalStyles';
var { SocialIcon } = require('react-social-icons');
export default function APIAT(props) {
    const [post, setPost] = useState(null);

    useEffect(() => {

        Axios.get("https://api.airtable.com/v0/appDrjzV9YZk6MRQA/CPaaS%20APIs%20(Synced)/" + props.match.params.id + "?api_key=keyIRsjrVlk0Wnz9b").then(
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
                        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', margin: '2rem 0', marginLeft: '2rem', marginRight: '2rem',background:'#1283DA' }}>
                            {/*    <img style={{ margin: '0 2rem', borderRadius: '8px', width: '6vw', height: '6vw', marginLeft: '2rem' }} src={post.fields.Airtable_API_Logo[0].url} alt="VendorProfile" />
                           */} <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                                <p style={{ color: '#ced4da', fontSize: '16px', marginBottom: '-0.5rem' }}>{post.fields.Vendor_Name} - API</p>
                                <h2 style={{ fontSize: '40px', fontWeight: '500' }}>{post.fields.API_Name}</h2>
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
                        <div style={{ display: 'flex', flexDirection: 'row', marginTop: '-2rem', marginLeft: '2rem', marginRight: '2rem' }}>
                            <div className="card" style={{ padding: '0rem', paddingTop: '0.5rem', margin: '0 2rem', minWidth: '800px', maxWidth: '800px', textAlign: 'justify', marginLeft: '11rem' }}>
                                <Button style={{ background: '#CFDFFF', color: '#111', padding: '14px' }} >{post.fields.API_Category}</Button><br />
                                <br />
                                <br />
                                <p style={{ textAlign: 'justify', fontSize: 'clamp(1.4rem, 1.2vw, 1rem)', color: '#383838' }}><b>Description</b><br /></p><br />
                                <br /><p>{post.fields.API_Description}</p><br /><br />
                                <p style={{ textAlign: 'justify', fontSize: 'clamp(1.4rem, 1.2vw, 1rem)', color: '#383838' }}><b>Features</b><br /></p>
                                <br /><p>{post.fields.API_Feature_1}</p><br />
                                <p>{post.fields.API_Feature_Description_1}</p><br />
                                <p>{post.fields.API_Feature_2}</p><br />
                                <p>{post.fields.API_Feature_Description_2}</p><br />
                                <p>{post.fields.API_Feature_3}</p><br />
                                <p>{post.fields.API_Feature_Description_3}</p><br />
                                <p>{post.fields.API_Feature_4}</p><br />
                                <p>{post.fields.API_Feature_Description_4}</p><br />
                                <p>{post.fields.API_Feature_5}</p><br />
                                <p>{post.fields.API_Feature_Description_5}</p><br />
                                <p>{post.fields.API_Feature_6}</p><br />
                                <p>{post.fields.API_Feature_Description_6}</p><br />
                                <p>{post.fields.API_Feature_7}</p><br />
                                <p>{post.fields.API_Feature_Description_7}</p><br />
                                <p>{post.fields.API_Feature_8}</p><br />
                                <p>{post.fields.API_Feature_Description_8}</p><br />
                                <p>{post.fields.API_Feature_9}</p><br />
                                <p>{post.fields.API_Feature_Description_9}</p><br />
                                <p>{post.fields.API_Feature_10}</p><br />
                                <p>{post.fields.API_Feature_Description_10}</p><br />
                            </div>
                        </div>

                    </div>
                </div>
            )}
        </div>
    );
}
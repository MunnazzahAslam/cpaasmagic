import React, { useState, useEffect } from "react";
import Axios from "axios";
import Card from '@material-ui/core/Card';
import { TwitterTimelineEmbed, TwitterShareButton, TwitterFollowButton, TwitterHashtagButton, TwitterMentionButton, TwitterTweetEmbed, TwitterMomentShare, TwitterDMButton, TwitterVideoEmbed, TwitterOnAirButton } from 'react-twitter-embed';
import { Button } from '../../../globalStyles';
var { SocialIcon } = require('react-social-icons');
export default function AboutVendor(props) {
    const [post, setPost] = useState(null);

    useEffect(() => {

        Axios.get("https://api.airtable.com/v0/appX0cUWA9Pu6oveS/CPaaS%20Vendors%20(Table)/"+props.match.params.id+"?api_key=keyIRsjrVlk0Wnz9b").then(
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
                        <img style={{ width: '100%', height: '400px', backgroundSize:'fit' }} src={post.fields.TransformX_Vendor_Cover[0].url} alt="VendorProfile" />
                        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', margin: '2rem 0', marginLeft: '2rem', marginRight: '2rem', marginTop:'-1rem' }}>
                            <img style={{ margin: '0 2rem', borderRadius: '8px', width: '8vw', height: '8vw', marginLeft: '2rem', marginTop:'-3rem' }} src={post.fields.TransformX_Vendor_Logo[0].url} alt="VendorProfile" />
                            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                                {/* <p style={{ color: '#ced4da', fontSize: '16px', marginBottom: '0.2rem' }}>Vendor</p>
                                <h2 style={{ fontSize: '40px', fontWeight: '500' }}>{post.fields.TransformX_Vendor_Name}</h2>*/}
                                <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                                    <div style={{  marginTop: '0.5rem' }}>
                                        <SocialIcon network="linkedin" style={{ height: 35, width: 35, marginRight: '0.5rem' }} />
                                        <SocialIcon network="youtube" style={{ height: 35, width: 35, marginRight: '0.5rem' }} />
                                        <SocialIcon network="facebook" style={{ height: 35, width: 35, marginRight: '0.5rem' }} />
                                        <SocialIcon network="twitter" style={{ height: 35, width: 35, marginRight: '0.5rem' }} />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'row', marginTop: '1rem', marginLeft: '2rem', marginRight: '2rem' }}>
                            <Card className="card" style={{ padding: '2rem',paddingTop:'0.5rem', margin: '0 2rem', width: '66%' }}>
{/* {                                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start' }}>
                                    <Button style={{ marginRight: '0.5rem', backgroundImage: 'linear-gradient(45deg,#6DCDF2,#1EB5ED )' }}>Pure Player</Button>
                                    <Button style={{ backgroundImage: 'linear-gradient(45deg,#62A6D9,#1F7FC4 )' }}>Top Vendors</Button>
                                </div>} */}
                                <br />
                                <p style={{ textAlign: 'justify', fontSize: '16px' }}>{post.fields.LinkedIn_Vendor_Overview}</p>
                                <br />
                                <p style={{ textAlign: 'justify', fontSize: '16px' }}>Founders <br /> <span style={{ color: "#002060" }}>{post.fields.Crunchbase_Vendor_Founders}</span></p>
                                <br />
                                <p style={{ textAlign: 'justify', fontSize: '16px' }}>Founded in <br /> <span style={{ color: "#002060" }}>{post.fields.LinkedIn_Vendor_Founded}</span></p>
                                <br />
                                <p style={{ textAlign: 'justify', fontSize: '16px' }}>Industry <br /> <span style={{ color: "#002060" }}>{post.fields.LinkedIn_Vendor_Industry}</span></p>
                                <br />
                                <p style={{ textAlign: 'justify', fontSize: '16px' }}>Company Size <br /> <span style={{ color: "#002060" }}>{post.fields.LinkedIn_Vendor_Company_Size}</span></p>
                            </Card>
                            <Card style={{ width: '550px', height: '450px' }}>
                                <TwitterTimelineEmbed
                                    sourceType="profile"
                                    screenName={post.fields.TransformX_Vendor_Name}
                                    options={{ height: 550, width: 550 }}
                                />
                            </Card>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
import React, { useState, useEffect } from "react";
import Axios from "axios";
import Card from '@material-ui/core/Card';
import { TwitterTimelineEmbed, TwitterShareButton, TwitterFollowButton, TwitterHashtagButton, TwitterMentionButton, TwitterTweetEmbed, TwitterMomentShare, TwitterDMButton, TwitterVideoEmbed, TwitterOnAirButton } from 'react-twitter-embed';
import { Button } from '../../../globalStyles';
var { SocialIcon } = require('react-social-icons');
export default function APIAT(props) {
    const [post, setPost] = useState(null);

    useEffect(() => {

        Axios.get("https://api.airtable.com/v0/appX0cUWA9Pu6oveS/CPaaS%20APIs%20(Table)/" + props.match.params.id + "?api_key=keyIRsjrVlk0Wnz9b").then(
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
            )}
        </div>
    );
}
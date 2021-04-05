import React, { useState, useEffect } from "react";
import Axios from "axios";
import Card from '@material-ui/core/Card';
import { TwitterTimelineEmbed, TwitterShareButton, TwitterFollowButton, TwitterHashtagButton, TwitterMentionButton, TwitterTweetEmbed, TwitterMomentShare, TwitterDMButton, TwitterVideoEmbed, TwitterOnAirButton } from 'react-twitter-embed';
import { Button } from '../../../globalStyles';
var { SocialIcon } = require('react-social-icons');
export default function UsecaseAT(props) {
    const [post, setPost] = useState(null);

    useEffect(() => {

        Axios.get("https://api.airtable.com/v0/appX0cUWA9Pu6oveS/CPaaS%20Use%20Case%20(Table)/" + props.match.params.id + "?api_key=keyIRsjrVlk0Wnz9b").then(
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
            )}
        </div>
    );
}
import React, { useState, useEffect } from "react";
import Axios from "axios";
import Card from '@material-ui/core/Card';
import { Button } from '../../../globalStyles';
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
    )
}
        </div >
    );
}
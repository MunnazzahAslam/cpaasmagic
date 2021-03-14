//import InstagramEmbed from 'react-instagram-embed';
import React from 'react'
import Card from '@material-ui/core/Card';
import { TwitterTimelineEmbed, TwitterShareButton, TwitterFollowButton, TwitterHashtagButton, TwitterMentionButton, TwitterTweetEmbed, TwitterMomentShare, TwitterDMButton, TwitterVideoEmbed, TwitterOnAirButton } from 'react-twitter-embed';

function InstaEmbed() {
    return (
        <>
      {/*  <Card style={{margin:'2rem',width:'504px',height:'620px'}}>
            <TwitterTimelineEmbed
                sourceType="profile"
                screenName="infobip"
                options={{ height: 600, width: 600 }}
            />
        </Card>
    */}
        <iframe style={{margin:'2rem'}} 
        src="https://www.linkedin.com/embed/feed/update/urn:li:share:6773640221171953664" 
        height="620" width="504" frameborder="0" allowfullscreen="" title="Embedded post"></iframe>
        
   </>
    )
}

export default InstaEmbed


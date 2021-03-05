import React from 'react';
import { Button } from '../../globalStyles';
import { FaFacebook, FaInstagram, FaGoodreads, FaTwitter, FaLinkedin } from 'react-icons/fa';
import {FooterContainer, FooterSubscription, FooterSubHeading, FooterSubText, Form, FormInput, SocialMedia, SocialMediaWrap, SocialLogo, SocialIconLink, SocialIcons, WebsiteRights} from './Footer.elements';
const Footer = () => {
    return (
            <FooterContainer>
                <FooterSubscription>
                    <FooterSubHeading>
                        Join our exclusive membership to receive the latest news and trends.
                    </FooterSubHeading>
                    <FooterSubText>
                        You can subscribe at any time.
                    </FooterSubText>
                    <Form>
                        <FormInput name="email" type="email" placeholder="Your Email"></FormInput>
                            <Button style={{background:'#00BFA5'}}> Subscribe</Button>
                    </Form>
                </FooterSubscription>
            <SocialMedia>
                <SocialMediaWrap>
                    <SocialLogo to="/">cpaasmagic
                    </SocialLogo>
                    <WebsiteRights style={{fontSize:'1rem'}}>
                        cpaasmagic©2020
                    </WebsiteRights>
                    <SocialIcons>
                        <SocialIconLink href="/" target="_blank" arial-label="Facebook">
                            <FaFacebook/>
                        </SocialIconLink>
                        <SocialIconLink href="/" target="_blank" arial-label="Facebook">
                            <FaInstagram/>
                        </SocialIconLink>
                        <SocialIconLink href="/" target="_blank" arial-label="Gmail" >
                            <FaGoodreads/>
                        </SocialIconLink> 
                        <SocialIconLink href="/" target="_blank" arial-label="Twitter">
                            <FaTwitter/>
                        </SocialIconLink>
                        <SocialIconLink href="/" target="_blank" arial-label="Linkedin">
                            <FaLinkedin/>
                        </SocialIconLink>                       
                    </SocialIcons>
                </SocialMediaWrap>
            </SocialMedia>
        </FooterContainer>
    )
}

export default Footer
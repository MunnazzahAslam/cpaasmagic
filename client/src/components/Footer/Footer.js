import React from 'react';
import { Button } from '../../globalStyles';
import { FaFacebook, FaInstagram, FaGoodreads, FaTwitter, FaLinkedin } from 'react-icons/fa';
import {FooterContainer, FooterLink, FooterLinkTitle, FooterLinksContainer, FooterLinksWrapper, FooterLinksItems, FooterSubscription, FooterSubHeading, FooterSubText, Form, FormInput, SocialMedia, SocialMediaWrap, SocialLogo, SocialIconLink, SocialIcons, WebsiteRights} from './Footer.elements';
const Footer = () => {
    return (
            <FooterContainer>
                <SocialMedia>
                <SocialMediaWrap>
                    <SocialLogo to="/">cpaasmagic
                    </SocialLogo>
                    
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
              
                <FooterLinksContainer>
                    <FooterLinksWrapper>
                        <FooterLinksItems>
                            <FooterLinkTitle>Resources</FooterLinkTitle>
                            <FooterLink to="/signup">How it works</FooterLink>
                            <FooterLink to="/about">Testimonials</FooterLink>
                            <FooterLink to="/pricing">Careers</FooterLink>
                            <FooterLink to="/services">Investors</FooterLink>
                        </FooterLinksItems>
                        <FooterLinksItems>
                            <FooterLinkTitle>Offerings</FooterLinkTitle>
                            <FooterLink to="/signup">How it works</FooterLink>
                            <FooterLink to="/about">Testimonials</FooterLink>
                            <FooterLink to="/pricing">Careers</FooterLink>
                            <FooterLink to="/services">Investors</FooterLink>
                        </FooterLinksItems>
                        </FooterLinksWrapper>
                        <FooterLinksWrapper>
                        <FooterLinksItems>
                            <FooterLinkTitle>Pricing</FooterLinkTitle>
                            <FooterLink to="/signup">How it works</FooterLink>
                            <FooterLink to="/about">Testimonials</FooterLink>
                            <FooterLink to="/pricing">Careers</FooterLink>
                            <FooterLink to="/services">Investors</FooterLink>
                        </FooterLinksItems>
                        <FooterLinksItems>
                            <FooterLinkTitle>About</FooterLinkTitle>
                            <FooterLink to="/signup">How it works</FooterLink>
                            <FooterLink to="/about">Testimonials</FooterLink>
                            <FooterLink to="/pricing">Careers</FooterLink>
                            <FooterLink to="/services">Investors</FooterLink>
                        </FooterLinksItems>
                    </FooterLinksWrapper>
                </FooterLinksContainer>
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
                <WebsiteRights>
                        cpaasmagic©2020
                    </WebsiteRights>
        </FooterContainer>
    )
}

export default Footer
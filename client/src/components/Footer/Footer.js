import React from 'react';
import { Button } from '../../globalStyles';
import logo from './logo.png';
import { FaFacebook, FaInstagram, FaGoodreads, FaTwitter, FaLinkedin } from 'react-icons/fa';
import {FooterContainer, FooterLink, FooterLinkTitle, FooterLinksContainer, FooterLinksWrapper, FooterLinksItems, FooterSubscription, FooterSubHeading, FooterSubText, Form, FormInput, SocialMedia, SocialMediaWrap, SocialLogo, SocialIconLink, SocialIcons, WebsiteRights} from './Footer.elements';
const Footer = () => {
    return (
            <FooterContainer style={{marginTop:'2rem'}}>
                <SocialMedia>
                <SocialMediaWrap>
                    <SocialLogo to="/home"><img src={logo} alt="logo" className="logo"/>
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
                            <FooterLinkTitle>Stay Connected</FooterLinkTitle>
                            <FooterLink to="/signup">cpaasmagic News</FooterLink>
                            <FooterLink to="/about">Contact Us</FooterLink>
                            <FooterLink to="/pricing">Partner with Us</FooterLink>
                        </FooterLinksItems>
                        </FooterLinksWrapper>
                        <FooterLinksWrapper>
                        <FooterLinksItems>
                            <FooterLinkTitle>Who we are</FooterLinkTitle>
                            <FooterLink to="/signup">Company</FooterLink>
                            <FooterLink to="/about">Partners</FooterLink>
                            <FooterLink to="/pricing">Careers</FooterLink>
                        </FooterLinksItems>
                        <FooterLinksItems>
                            <FooterLinkTitle>What we do</FooterLinkTitle>
                            <FooterLink to="/signup">cpaasmagic pro</FooterLink>
                            <FooterLink to="/about">Data Licensing</FooterLink>
                            <FooterLink to="/pricing">Pricing</FooterLink>
                        </FooterLinksItems>
                    </FooterLinksWrapper>
                </FooterLinksContainer>
                <WebsiteRights>
                        cpaasmagic | A product of TransformX
                    </WebsiteRights>
        </FooterContainer>
    )
}

export default Footer
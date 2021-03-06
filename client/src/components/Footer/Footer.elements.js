import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FaMagento } from 'react-icons/fa';
export const FooterContainer = styled.div`
    background-image: linear-gradient(to right,#1283DA, #19C2AB);
    padding: 3rem 0 3rem 0;
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    align-items:center;
    bottom:0;

`

export const FooterSubscription = styled.section`
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    align-items:center;
    margin-bottom:24px;
    padding:24px;
    color:#fff;
`

export const FooterSubHeading = styled.p`
    font-weight: 700;
    margin-bottom:24px;
    font-size: 22px;
    color: '#fff';
`

export const FooterSubText = styled.h3`
    margin-bottom:24px;
    font-weight: 100;
    color: #fff;
`

export const Form = styled.form`
    display:flex;
    justify-content:center;
    align-items:center;
    @media screen and (max-width: 820px){
        flex-direction:column;
        width:80%;
    }
`

export const FormInput = styled.input`
    padding: 10px 20px;
    border-radius: 2px;
    outline:none;
    border:none;
    font-size:16px;
    width: 400px;
    border:1px solid #fff;
    &::placeholder{
        color: #A6B1BB;
    }
    @media screen and (max-width: 820px){
        margin: 0 0 16px 0;
    }
`

export const FooterLinksContainer = styled.div`
   width:100%;
    display:flex;
    justify-content: center;
    @media screen and (max-width:620px){
        padding: 32px;
    justify-content: inherit;
    }
`

export const FooterLinksWrapper = styled.div`
    display:flex;
    @media screen and (max-width:820px){
        flex-direction:column;
    }
`

export const FooterLinksItems = styled.div`
    display:flex;
    flex-direction:column;
    align-items:flex-start;
    margin: 2.6rem;
    text-align:left;
    width:160px;
    box-sizing:border-box;
    color: #fff;
    @media screen and (max-width:420px){
        margin:0;
        padding:10px;
        width:100%;
    }
`

export const FooterLinkTitle = styled.h3`
    font-weight: 700;
    margin-bottom:16px;
`

export const FooterLink = styled.h3`
    color: #fff;
    font-weight: 100;
    text-decoration:none;
    &:hover{
        color:#fff;
        cursor: pointer;
        transition:0.3s ease-out;
    }
`


export const SocialMedia = styled.section`
    max-width:1000px;
    width:100%;
`

export const SocialMediaWrap = styled.div`
    display:flex;
    justify-content:space-between;
    align-items:center;
    width:90%;
    max-width:1000px;
    margin: 40px auto 0 auto;
    @media screen and (max-width:820px){
        flex-direction:column;
    }
`

export const SocialLogo = styled(Link)`
    color:#fff;
    justify-self:start;
    cursor: pointer;
    text-decoration:none;
    font-size:2rem;
    display:flex;
    align-items:center;
    margin-bottom:16px;
    font-weight: bold;
    letter-spacing: 2px;
`

export const SocialIcon = styled(FaMagento)`
    margin-right:10px;
`

export const WebsiteRights = styled.h3`
    color: #fff;
    margin-bottom:16px;
    margin-bottom:24px;
    font-weight: 200;
`

export const SocialIcons = styled.div`
    display:flex;
    justify-content:space-between;
    align-items:center;
    width:240px;    
`

export const SocialIconLink = styled.a`
    color:#fff;
    font-size:24px;    
`
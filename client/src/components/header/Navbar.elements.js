import styled from 'styled-components';
import { Container } from '../../globalStyles';
import { Link } from 'react-router-dom';
 
export const Nav= styled.nav`
background:  #1B2653;
height: 80px;
display:flex;
justify-content: center;
align-items: center;
font-size: 1.2rem;
position: sticky;
top:0;
z-index: 999;
`
export const NavbarContainer=styled(Container)`
display:flex;
justify-content: space-between;
color: #00BFA5;
height:80px;
&:hover{
    color:#fff;
    border-bottom: 0px;
}
${Container}
`;

export const NavLogo=styled(Link)`
font-size: 2rem;
font-weight: 800;
letter-spacing: 1.5px;
color:#fff;
justify-self:flex-start;
cursor:pointer;
text-decoration:none;
display:flex;
align-items:center; 
`

export const MobileIcon = styled.div`
display:none;
@media screen and (max-width: 960px){
    display:block;
    position:absolute;
    margin: 30px;
    cursor:pointer;
    top:0;
    right:1.5rem;
    transform:translated(-100,60%);
    font-size:1.2rem;
}
`
export const NavMenu= styled.ul`
    display:flex;
    align-items:center;
    list-style:none;
    text-align:center;
    @media screen and (max-width: 960px){
    display:flex;
    flex-direction:column;
    align-items:center;
    width:100%;
    height: 100vh;
    position:absolute;
    top:80px;
    left:${({click})=>(click ? 0 : '-100%')};
    opacity:1;
    transition: all 0.5s ease;
    background: #ffffff;
    }
`

export const NavItem = styled.li`
height:80px;
color: #fff;
opacity: '90';
border-bottom: 2px solid transparent;
&:hover{
    opacity:'20';
    color: #fff;
}
@media screen and (max-width: 960px){
    width:100%;
    &:hover{
    color: #fff;
    }
} 
`

export const NavLinks = styled(Link)`
color:#fff;
opacity: '90';
display: flex;
align-items: center;
text-decoration: none;
padding: 0.5rem 1rem;
margin-right: 1rem;
font-weight: 400;
height: 100%;
&:hover{
    transition:all 0.3s ease-out;
    opacity:'20';
    transform: scale(1.1);
}
@media screen and (max-width:960px){
    text-align: center;
    padding: 2rem;
    width: 100%;
    display: table;
    
}
`
export const NavItemBtn = styled.li`
@media screen and (max-width:960px){
display:flex;
justify-content:center;
align-items:center;
width:100%;
height:120px;
}
`

export const NavBtnLink=styled(Link)`
display:flex;
justify-content:center;
align-items:center;
text-decoration:none;
padding: 8px 16px;
height:100%;
width:100%;
border:none;
outline:none;
`
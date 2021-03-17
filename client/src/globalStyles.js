import styled, {createGlobalStyle} from 'styled-components';

const GlobalStyle = createGlobalStyle`
*{
    box-sizing: border-box;
    margin:0;
    padding:0;
 }
`

export const Container=styled.div`
color:inherit;
z-index:1;
width:100%;
max-width:100%;
margin-right:auto;
margin-left: auto;
padding-right:50px;
padding-left:50px;
@media screen and (max-width: 991px){
    padding-right: 30px;
    padding-left: 30px;
}
`
export const Button = styled.button`
border-radius: 28px;
background: #00BFA5;
white-space:no-wrap;
padding: 6px 25px;
color: #fff;
outline:none;
border:none;
cursor:pointer;
&:hover{
    transition:all 0.3s ease-out;
    color: #fff;
    transform: scale(1.1);
}
    `

export default GlobalStyle;
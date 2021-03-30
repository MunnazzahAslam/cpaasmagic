import styled from 'styled-components';

export const InfoSec = styled.div`
    display:flex;
    justify-content: center;
    flex-direction:row;
    color: #1D217E;
    padding: 160px 0;
    background: #fff;
    @media screen and (max-width: 960px){
        padding: 40px 0;
    }
`

export const InfoRow= styled.div`
    display:flex;
    margin: 0 -15px -15px -15px;
    flex-wrap:wrap;
    align-items:center;
    flex-direction: ${({imgStart}) =>(imgStart ? 'row-reverse' : 'row')};
`

export const InfoColumn=styled.div`
    margin-bottom:15px;
    padding-right:15px;
    padding-left:15px;
    flex:1;
    max-width:100%;
    flex-basis:100%;
@media screen and (max-width: 768px){
    padding: 0.5rem;
    justify-content:center;
    display:flex;
    flex-direction:column;
}
`

export const InfoColumnHalf=styled.div`
    padding-right:15px;
    padding-left:15px;
    flex:1;
    max-width: 50%;
    flex-basis: 50%;
@media screen and (max-width: 768px){
    max-width: 100%;
    flex-basis:100%;
    justify-content:center;
    display:flex;
}
`


export const TextWrapper = styled.div`
    //max-width:540px;
    text-align: center;
    display:flex;
    justify-content:center;
    align-items: center;
    flex-direction:column;
    padding-top:0;
    padding-bottom:60px;
@media screen and (max-width: 768px){
    padding-bottom:65px;
}
`

export const Heading = styled.h1`
    text-align: center;
    margin-bottom: 10px;
    font-size: 1.8em;
    font-weight: 700;
    line-height: 1.1;
    color: '#fff';
    @media screen and (max-width: 960px){
    margin-bottom: 8px;
    font-size: 1.6em;
    }
    @media screen and (max-width: 450px){
    margin-bottom: 4px;
    font-size: 1.4em;
    }
`

export const Subtitle= styled.p`
    padding-top: 5px;
    margin-bottom:35px;
    text-align: center;
    font-size: 1.2em;
    font-weight:400;
    line-height:22px;
    @media screen and (max-width: 960px){
    margin-bottom: 12px;
    font-size: 1.1em;
    }
    @media screen and (max-width: 450px){
    margin-bottom: 12px;
    font-size: 1em;
    }
`

export const ImgWrapper=styled.div`
    display:flex;
    justify-content:center;
    align-items: center;
`

export const Img=styled.img`
    padding-right: 0;
    border:0;
    max-width:100%;
    vertical-align:middle;
    display:inline-block;
    max-height:500px;
    @media screen and (max-width: 450px){
    max-height:700px;
    display:none;
    }
`
export const Image=styled.img`
    padding-right: 0;
    border:0;
    max-width:100%;
    vertical-align:middle;
    display:inline-block;
    max-height:500px;
    margin: 1rem;
    @media screen and (max-width: 450px){
    max-height:700px;
    }
`
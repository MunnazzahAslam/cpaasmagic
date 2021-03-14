import React from 'react';
import './NewLayout.css';
import { InfoSec, InfoRow, InfoColumn, TextWrapper, Heading, Subtitle, ImgWrapper, Img, Image, InfoColumnHalf } from '../home/InfoSection.elements';
import { Button } from '../../../globalStyles';
function NewLayout() {
    return (
        <div  className="top">
        <Heading style={{color:'#fff'}}>CPaaS Intelligence at your finger tips</Heading>
        <br/>
        <div style={{display:'flex', flexDirection:'row', margin: '1rem'}}>
            <Button>Vendors</Button>
            <Button>Vendors</Button>
            <Button>Vendors</Button>
            <Button>Vendors</Button>
        </div>
        </div>
    )
}

export default NewLayout

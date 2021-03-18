import React from 'react'
import { Card } from '@material-ui/core'
import CardContent from '@material-ui/core/CardContent';
import { Button, Container } from '../../../globalStyles';
import { InfoSec, InfoRow, InfoColumn, TextWrapper, Heading, Subtitle, ImgWrapper, Img, Image, InfoColumnHalf } from '../home/InfoSection.elements';
import { Link } from 'react-router-dom';

function Dashboard() {
    return (
        <div style={{ color: '#1B2653' }}>
            <InfoRow style={{ backgroundColor: '#F1F3FE' }}>
                <InfoColumn>
                    <TextWrapper>
                        <Heading style={{ marginTop: '30px' }}>Seller Dashboard</Heading>
                        <div style={{ display: 'flex', justifyContent: 'center' }}>
                            <Link to="/search/vendors" ><Button style={{ marginRight: '0.5rem', background: '#FAD069', fontWeight: '700', marginTop: '-1rem' }}>Get Started ►</Button></Link>
                        </div>
                    </TextWrapper>
                </InfoColumn>
            </InfoRow>
        </div>
    )
}
export default Dashboard

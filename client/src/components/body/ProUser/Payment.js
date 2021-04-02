import React from 'react'
import {Button} from '../../../globalStyles'
import { Link }from 'react-router-dom'
import { InfoSec, InfoRow, InfoColumn, TextWrapper, Heading, Subtitle, ImgWrapper, Img, Image, InfoColumnHalf } from '../home/InfoSection.elements';
import { useSelector } from 'react-redux'
function Payment() {
    const auth = useSelector(state => state.auth)

    const { user, isLogged } = auth

    const onClick = event => {
        localStorage.setItem('isSuperUser', 1)
    }

    return (
        <div style={{ color: '#1B2653' }}>
            <div className="topbar" style={{ paddingLeft:'0%',height: '250px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
                <Heading>Upgrade to Pro</Heading>
                <Subtitle style={{ textAlign: 'center' }}>Discover industry trends, competitor insights, in-demand APIs, popular
                use cases, trending success stories all within cpaasmagic seller dashboard.
                                </Subtitle>
                    <Link to="/dashboardpro" ><Button onClick={onClick} style={{ marginRight: '0.5rem', background: '#FAD069', fontWeight: '700' }}>Pay Now</Button></Link>
            </div>
        </div>
    )
}

export default Payment

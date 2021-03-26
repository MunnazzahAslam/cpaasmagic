import React from 'react'
import { Card } from '@material-ui/core'
import CardContent from '@material-ui/core/CardContent';
import { Button, Container } from '../../../globalStyles';
import { InfoSec, InfoRow, InfoColumn, TextWrapper, Heading, Subtitle, ImgWrapper, Img, Image, InfoColumnHalf } from '../home/InfoSection.elements';
import { Link } from 'react-router-dom';
import Vendors from '../Dashboard/Vendors'
import APIs from '../Dashboard/APIs'
import Usecases from '../Dashboard/Usecases'
import SuccessStories from '../Dashboard/SuccessStories'
import '../Dashboard/Dashboard.css';

function Dashboard() {
    return (
        <div style={{ color: '#1B2653' }}>
           <iframe class="airtable-embed" src="https://airtable.com/embed/shrHkYaVbBXJZ3Di5?backgroundColor=purple" frameborder="0" onmousewheel="" width="100%" height="533" style="background: transparent; border: 1px solid #ccc;"></iframe> 
           {/*<iframe src="https://x.formito.com/app/F2FPYp0OzqtnPsJ9xcwJ" width="480" height="840" frameBorder="0" style="border:1px solid #eee"></iframe>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <Card className="card1" style={{ boxShadow: 'none' }}>
                    <CardContent style={{ color: '#fff' }}>
                        <span style={{ fontSize: '0.8em', fontWeight: '300', marginRight: '0.5rem', marginLeft: '0.5rem' }}>Vendors</span>21
                    <br /><Link to="/search/vendors" style={{ color: '#fff', fontWeight: '400' }}><u>View All</u></Link>
                    </CardContent>
                </Card>
                <Card className="card2" style={{ boxShadow: 'none' }}><CardContent style={{ color: '#fff' }}>
                    <span style={{ fontSize: '0.8em', fontWeight: '300', marginRight: '0.5rem' }}>Communication APIs</span>141 <br /><Link to="/search/apis" style={{ color: '#fff', fontWeight: '400' }}><u>View All</u></Link>
                </CardContent></Card>
                <Card className="card3" style={{ boxShadow: 'none' }}><CardContent style={{ color: '#fff' }}>
                    <span style={{ fontSize: '0.8em', fontWeight: '300', marginRight: '0.5rem' }}>Use Cases</span>425 <br /><Link to="/search/usecases" style={{ color: '#fff', fontWeight: '400' }}><u>View All</u></Link>
                </CardContent></Card>
                <Card className="card4" style={{ boxShadow: 'none' }}><CardContent style={{ color: '#fff' }}>
                    <span style={{ fontSize: '0.8em', fontWeight: '300', marginRight: '0.5rem' }}>Successes</span>342 <br /><Link to="/search/successes" style={{ color: '#fff', fontWeight: '400' }}><u>View All</u></Link>
                </CardContent></Card>
            </div>
            
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <Vendors />
                <APIs />
            </div>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <Usecases />
                <SuccessStories />
    </div>*/}
        </div >
    )
}
export default Dashboard

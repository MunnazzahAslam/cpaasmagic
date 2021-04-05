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
import Picture3 from '../home/Picture3.png';
function Dashboard() {
    return (
        <div style={{ color: '#1B2653', marginBottom: '-2rem' }}>
            <iframe class="airtable-embed" src="https://airtable.com/embed/shrG809ltLoLwuy9i?backgroundColor=blue" frameborder="0" onmousewheel="" width="100%" height="1500" style={{ background: 'transparent', border: 'none', marginBottom: '-2rem' }}></iframe>
            <div className="topbar banner Cards" style={{ paddingLeft: '0%', justifyContent: 'center', overflow: 'overlay', marginTop: '-2rem' }} >
                <div>
                    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', paddingTop: '15%' }}>
                        <Heading style={{ textAlign: 'left' }}>Elevate your search with cpaasmagic Pro</Heading>
                        <Subtitle style={{ textAlign: 'left', maxWidth: '550px' }}>Intelligently search and target the right opportunities with advanced search filters, analysis tools, and company alerts.</Subtitle>
                        <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
                            <Link to="/payment" ><Button style={{ background: '#FAD069', fontWeight: '500' }}>Upgrade to Pro</Button></Link>
                        </div>
                    </div>
                </div>
                <div>
                    <ImgWrapper>
                        <Image src={Picture3} className="laptop" style={{ margin: '0rem' }} />
                    </ImgWrapper>
                </div>
            </div>
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

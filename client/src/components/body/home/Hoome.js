import { Card } from '@material-ui/core'
import React from 'react'
import './home.css'
import RightPortion from './card'
import FeaturedSuccesses from './successes'
import CardContent from '@material-ui/core/CardContent';
import { Button, Container } from '../../../globalStyles';
import { InfoSec, InfoRow, InfoColumn, TextWrapper, Heading, Subtitle, ImgWrapper, Img, Image, InfoColumnHalf } from './InfoSection.elements';
import { Link } from 'react-router-dom';
import Picture1 from './Picture1.png';
import Picture4 from './Picture4.png';
import Picture5 from './Picture5.png';
import Picture6 from './Picture6.png';
import Picture7 from './Picture7.png';
import Picture2 from './Picture2.png';
import Picture3 from './Picture3.png';
import WordPress from './WordPress';
import sell from './sell.png'
import TopCards from './TopCards'
import NewFeatures from './newfeatures'
function Hoome() {
    return (
        <div className="app">
            <div className="topbar">
                <Heading style={{ textAlign: 'left', marginLeft: '2rem' }}>Discover APIs and the companies behind them</Heading>
                <div style={{ display: 'flex', justifyContent: 'flex-start', marginLeft: '2rem' }}>
                    <Link to="/register" ><Button style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginRight: '1rem', background: '#fff', color: '#1B2653', fontSize: '0.8rem' }}><img src={Picture4} style={{ marginRight: '0.2rem', color: '#04C0A6' }} />Vendors</Button></Link>
                    <Link to="/register" ><Button style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginRight: '1rem', background: '#fff', color: '#1B2653' }}><img src={Picture5} style={{ marginRight: '0.5rem', color: '#04C0A6' }} />APIs</Button></Link>
                    <Link to="/register" ><Button style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginRight: '1rem', background: '#fff', color: '#1B2653' }}><img src={Picture6} style={{ marginRight: '0.5rem', color: '#04C0A6' }} />Use Cases</Button></Link>
                    <Link to="/register" ><Button style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginRight: '1rem', background: '#fff', color: '#1B2653' }}><img src={Picture7} style={{ marginRight: '0.5rem', color: '#04C0A6' }} />Success Stories</Button></Link>
                </div>
            </div>
            <div className="Cards">
                <Heading style={{ textAlign: 'left', marginLeft: '2rem' }}>Do even more with cpaasmagic</Heading>
                <div className="cardContainer">
                    <Card className="hover" style={{ boxShadow: 'inset 1px 0.5px 2px 0.5px #d6fffa, 1px 1px 2.5px 0.5px #d6fffa' }}  >
                        <CardContent>
                            <ImgWrapper>
                                <Image style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} src={sell} />
                            </ImgWrapper>    
                            <Heading style={{ color: '#00BFA5' }}>Sell CPaaS</Heading>
                            <Subtitle style={{ color: '#1D217E' }}>Explore how your sales reps and marketing wizards can sell better through our platform</Subtitle>
                            <div style={{ display: 'flex', justifyContent: 'center' }}>
                                <Link to="/getstarted" ><Button style={{ marginRight: '0.5rem', background: '#FAD069', fontWeight: '700', marginTop: '-1rem' }}>Learn More ►</Button></Link>
                            </div>
                        </CardContent>
                    </Card>
                    <Card className="hover" style={{ boxShadow: 'inset 1px 0.5px 2px 0.5px #d6fffa, 1px 1px 2.5px 0.5px #d6fffa' }}  >
                        <CardContent style={{ textAlign: 'left' }}>
                            <ImgWrapper>
                                <Image style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} src={Picture1} />
                            </ImgWrapper> <Heading style={{ color: '#00BFA5' }}>Buy CPaaS</Heading>
                            <Subtitle style={{ color: '#1D217E' }}>Assess CPaaS Solutions from 100+ vendors across key parameters that assist in your buying decision</Subtitle>
                            <div style={{ display: 'flex', justifyContent: 'center' }}>
                                <Link to="/getstarted" ><Button style={{ marginRight: '0.5rem', background: '#FAD069', fontWeight: '700', marginTop: '-1rem' }}>Learn More ►</Button></Link>
                            </div>
                        </CardContent>
                    </Card>
                    <Card className="hover" style={{ boxShadow: 'inset 1px 0.5px 2px 0.5px #d6fffa, 1px 1px 2.5px 0.5px #d6fffa' }}  >
                        <CardContent>
                            <ImgWrapper>
                                <Image style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} src={Picture2} />
                            </ImgWrapper><Heading style={{ color: '#00BFA5' }}>Learn CPaaS</Heading>
                            <Subtitle style={{ color: '#1D217E' }}>Get latest insights or enroll in our trainings that help you get up to speed with CPaaS</Subtitle>
                            <div style={{ display: 'flex', justifyContent: 'center' }}>
                            <Link to="/getstarted" ><Button style={{ marginRight: '0.5rem', background: '#FAD069', fontWeight: '700', marginTop: '-1rem' }}>Learn More ►</Button></Link>
                            </div>              </CardContent>
                    </Card>
                </div>
            </div>
            <div className="topbar banner">
                <div style={{ display: 'flex' }}>
                    <div style={{ paddingTop: '6rem' }}>
                        <Heading style={{ textAlign: 'left', marginLeft: '2rem' }}>Elevate your search with cpaasmagic Pro</Heading>
                        <Subtitle style={{ textAlign: 'left', marginLeft: '2rem', maxWidth: '750px' }}>Intelligently search and target the right opportunities with advanced search filters, analysis tools, and company alerts.</Subtitle>
                        <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
                        <Link to="/register" ><Button style={{ marginLeft: '2rem', marginRight: '0.5rem', background: '#FAD069', fontWeight: '700', marginTop: '-1rem' }}>Start Free Trial ►</Button></Link>
                        </div>
                    </div>
                    <div>
                        <ImgWrapper>
                            <Image src={Picture3} />
                        </ImgWrapper>
                    </div>
                </div>
            </div>
            <div className="Cards" style={{ backgroundColor: '#F1F3FE' }}>
                <Heading style={{ textAlign: 'left', marginLeft: '2rem' }}>cpaasmagic insights & analysis</Heading>
                <div style={{ display: 'flex', flexDirection: 'row' }}>
                    <div style={{ width: '50%' }}>
                        <WordPress />
                    </div>
                    <div style={{ width: '50%', paddingRight:'10%'}}>
                    <Heading style={{ 
                            padding: '0.5rem',
                            color: '#19C2AB',
                            textAlign: 'center',
                            fontWeight: '600',
                            marginTop:'2rem'
                            }}>This Week on cpaasmagic</Heading>
                        <TopCards />
                        <RightPortion />
                    </div>
                </div>
                <div  style={{ display: 'flex', justifyContent:'flex-end', paddingRight:'10%' }}>
               
                <div style={{ display: 'flex', flexDirection: 'column', width: '75%', marginTop:'1rem' }}>
                    <FeaturedSuccesses />
                </div>
                </div>
                
                </div>
        </div>
    )
}

export default Hoome

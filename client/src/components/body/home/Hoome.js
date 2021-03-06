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
                <Heading style={{ textAlign: 'left' }}>Discover APIs and the companies behind them</Heading>
                <div style={{ display: 'flex', justifyContent: 'flex-start', flexWrap: 'wrap' }}>
                    <Link to="/search/vendors" ><Button className="small" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginRight: '0.8em', marginTop: '1em', padding: '0.8em', background: '#fff', color: '#666666', fontSize: '1rem' }}><img src={Picture4} style={{ marginRight: '0.3rem', color: '#666666', width: '1.2rem', height: '1.2rem' }} />Vendors</Button></Link>
                    <Link to="/search/apis" ><Button className="small" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginRight: '0.8em', marginTop: '1em', padding: '0.8em', background: '#fff', color: '#666666', fontSize: '1rem' }}><img src={Picture5} style={{ marginRight: '0.3rem', color: '#666666', width: '1.2rem', height: '1.2rem' }} />APIs</Button></Link>
                    <Link to="/search/usecases" ><Button className="small" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginRight: '0.8em', marginTop: '1em', padding: '0.8em', background: '#fff', color: '#666666', fontSize: '1rem' }}><img src={Picture6} style={{ marginRight: '0.3rem', color: '#666666', width: '1.2rem', height: '1.2rem' }} />Use Cases</Button></Link>
                    <Link to="/search/successes" ><Button className="small" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginRight: '0.8em', marginTop: '1em', padding: '0.8em', background: '#fff', color: '#666666', fontSize: '1rem' }}><img src={Picture7} style={{ marginRight: '0.3rem', color: '#666666', width: '1.2rem', height: '1.2rem' }} />Successes</Button></Link>
                </div>
            </div>
            <div className="Cards">
                <Heading style={{ textAlign: 'left', color: '#282828', paddingLeft: '10%' }}>Do even more with cpaasmagic</Heading>
                <div className="cardContainer">
                    <Card className="hover" style={{ boxShadow: 'inset 1px 0.5px 2px 0.5px #d6fffa, 1px 1px 2.5px 0.5px #d6fffa' }}  >
                        <CardContent>
                            <ImgWrapper>
                                <Image style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} src={sell} />
                            </ImgWrapper>
                            <Heading style={{ color: '#282828', fontSize: '1.2em' }}>Sell CPaaS</Heading>
                            <Subtitle style={{ color: '#666666' }}>Explore how your sales reps and marketing wizards can sell better through our platform</Subtitle>
                            <div style={{ display: 'flex', justifyContent: 'center' }}>
                                <Link to="/getstarted" ><Button style={{ background: '#FAD069', fontWeight: '500', fontSize: '1em' }}>Learn More</Button></Link>
                            </div>
                        </CardContent>
                    </Card>
                    <Card className="hover" style={{ boxShadow: 'inset 1px 0.5px 2px 0.5px #d6fffa, 1px 1px 2.5px 0.5px #d6fffa' }}  >
                        <CardContent style={{ textAlign: 'left' }}>
                            <ImgWrapper>
                                <Image style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} src={Picture1} />
                            </ImgWrapper> <Heading style={{ color: '#282828', fontSize: '1.2em' }}>Buy CPaaS</Heading>
                            <Subtitle style={{ color: '#666666' }}>Assess CPaaS Solutions from 100+ vendors across key parameters that assist in your buying decision</Subtitle>
                            <div style={{ display: 'flex', justifyContent: 'center' }}>
                                <Link to="/getstarted" ><Button style={{ background: '#FAD069', fontWeight: '500', fontSize: '1em' }}>Learn More</Button></Link>
                            </div>
                        </CardContent>
                    </Card>
                    <Card className="hover" style={{ boxShadow: 'inset 1px 0.5px 2px 0.5px #d6fffa, 1px 1px 2.5px 0.5px #d6fffa' }}  >
                        <CardContent>
                            <ImgWrapper>
                                <Image style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} src={Picture2} />
                            </ImgWrapper><Heading style={{ color: '#282828', fontSize: '1.2em' }}>Learn CPaaS</Heading>
                            <Subtitle style={{ color: '#666666' }}>Get latest insights or enroll yourself in our trainings that help you get up to speed with CPaaS </Subtitle>
                            <div style={{ display: 'flex', justifyContent: 'center' }}>
                                <Button style={{ background: '#FAD069', fontWeight: '500' }}>Coming Soon</Button>
                            </div>              </CardContent>
                    </Card>
                </div>
            </div>
            <div className="topbar banner Cards" style={{ paddingLeft: '0%', justifyContent: 'center' }} >
                <div>
                    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', paddingTop: '15%' }}>
                        <Heading style={{ textAlign: 'left' }}>Elevate your search with cpaasmagic Pro</Heading>
                        <Subtitle style={{ textAlign: 'left', maxWidth: '550px' }}>Intelligently search and target the right opportunities with advanced search filters, analysis tools, and company alerts.</Subtitle>
                        <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
                            <Link to="/register" ><Button style={{ background: '#FAD069', fontWeight: '500' }}>Start Free Trial</Button></Link>
                        </div>
                    </div>
                </div>
                <div>
                    <ImgWrapper>
                        <Image src={Picture3} className="laptop" style={{ margin: '0rem' }} />
                    </ImgWrapper>
                </div>

            </div>
            <div className="bottomCards" style={{ backgroundColor: '#EFEFEF', paddingTop: '4rem' }}>
                <Heading style={{ color: '#319CEE' }}>Latest insights and analysis</Heading>
                <div style={{minWidth:'1000px',maxWidth:'1000px',margin: '0 auto',padding: '20px'}}>
                    <iframe class="airtable-embed" src="https://airtable.com/embed/shryOk2MnNXSgEIGm?backgroundColor=blue" frameborder="0" onmousewheel="" width="100%" height="533" style={{ background: 'transparent', border: 'none', marginBottom: '2rem' }}></iframe>
               </div>
                <div style={{ backgroundColor: '#EFEFEF', marginTop: '-8rem', overflow: 'overlay', height: '100px' }}>
                </div>
                <div className="widgets">
                    <div className="left" style={{ marginRight: '4rem', marginLeft: '4rem' }}>
                        <Heading style={{ margin: '2rem', marginTop: '0rem', color: '#319CEE', backgroundColor: '#EFEFEF' }}>Trending Vendors</Heading>
                        <iframe class="airtable-embed" src="https://airtable.com/embed/shrLSDY7v2PmnDR2G?backgroundColor=blue" frameborder="0" onmousewheel="" width="100%" height="533" style={{ background: 'transparent', border: 'none', marginBottom: '2rem' }}></iframe>
                        <div style={{ backgroundColor: '#EFEFEF', marginTop: '-4rem', overflow: 'overlay', height: '100px' }}>
                        </div>
                        <Heading style={{ margin: '2rem', color: '#319CEE', marginTop: '0rem' }}>Trending Use Cases</Heading>
                        <iframe class="airtable-embed" src="https://airtable.com/embed/shrRHIaHgyAjbBAno?backgroundColor=blue" frameborder="0" onmousewheel="" width="100%" height="533" style={{ background: 'transparent', border: 'none', marginBottom: '2rem' }}></iframe>
                    </div>
                    <div className="right" style={{ marginRight: '4rem' }}>
                        <Heading style={{ margin: '2rem', color: '#319CEE', marginTop: '0rem' }}>Trending APIs</Heading>
                        <iframe class="airtable-embed" src="https://airtable.com/embed/shrA1r26aL7Mb7lJ6?backgroundColor=blue" frameborder="0" onmousewheel="" width="100%" height="533" style={{ background: 'transparent', border: 'none', marginBottom: '2rem' }}></iframe>
                        <div style={{ backgroundColor: '#EFEFEF', marginTop: '-4rem', overflow: 'overlay', height: '100px' }}>
                        </div>
                        <Heading style={{ margin: '2rem', color: '#319CEE', marginTop: '0rem' }}>Trending Successes</Heading>
                        <iframe class="airtable-embed" src="https://airtable.com/embed/shrovw7KLtwo45lFG?backgroundColor=blue" frameborder="0" onmousewheel="" width="100%" height="533" style={{ background: 'transparent', border: 'none', marginBottom: '2rem' }}></iframe>
                    </div>
                </div>
                <div style={{ backgroundColor: '#EFEFEF', marginTop: '-4rem', overflow: 'overlay', height: '100px' }}>
                </div>

                {/*
                <div className="widgets">
                    <div className="left">
                       <WordPress /> 
                    </div>
                    <div className="right">
                        <RightPortion />
                        <FeaturedSuccesses />
                    </div>
                </div>
                */}
            </div>
            <div data-formito-id="Via9siQjZtVQ4DAXB0rx" data-trigger="fab"></div>
        </div >
    )
}

export default Hoome

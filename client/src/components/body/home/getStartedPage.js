import React from 'react'
import { Card } from '@material-ui/core'
import CardContent from '@material-ui/core/CardContent';
import { Button, Container } from '../../../globalStyles';
import bg1 from './bg1.png';
import { InfoSec, InfoRow, InfoColumn, TextWrapper, Heading, Subtitle, ImgWrapper, Img, Image, InfoColumnHalf } from './InfoSection.elements';
import { Link } from 'react-router-dom';
import api from './api.png'
import search from './search.png'
import graph from './graph.png'
import flowchart from './flowchart.png'
import dollar from './dollar.png'
import { useSelector } from 'react-redux'
import './home.css'
const GetStartedPage = () => { 
    const auth = useSelector(state => state.auth)

    const { user, isLogged } = auth

    return (
        <div style={{ color: '#1B2653' }}>
            <div className="topbar" style={{ paddingLeft:'0%',height: '250px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
                <Heading>Seller - CPaaS Intelligence at your Fingertips</Heading>
                <Subtitle style={{ textAlign: 'center' }}>Discover industry trends, competitor insights, in-demand APIs, popular
                use cases, trending success stories all within cpaasmagic seller dashboard.
                                </Subtitle>
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <Link to={isLogged? "/sellerdashboard": "/register"} ><Button style={{ marginRight: '0.5rem', background: '#FAD069', fontWeight: '700', marginTop: '-1rem' }}>Get Started</Button></Link>
                </div>
            </div>
            <div style={{ height: '300px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-end', padding: '2rem' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                        <br /><br />
                        <button style={{ color: '#fff', background: '#19C2AB', borderRadius: '50%', padding: '0.5rem 0.8rem' }}>1</button>
                        <Heading style={{ marginTop: '30px' }}>Get Industry Intelligence</Heading>
                        <Subtitle style={{ maxWidth: '350px' }}>Start with industry insights and learn
                        what your closest competitors are up to.
                                        </Subtitle>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                        <ImgWrapper>
                            <Image style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginLeft: '2rem' }} src={search} />
                        </ImgWrapper>
                    </div>
                </div>
            </div>

            <div style={{ height: '300px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <div style={{ display: 'flex', flexDirection: 'row', backgroundColor: '#fff', justifyContent: 'space-between', alignItems: 'flex-end', padding: '2rem' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                        <ImgWrapper>
                            <Image style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginRight: '2rem' }} src={api} />
                        </ImgWrapper>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                        <br /><br />
                        <button style={{ color: '#fff', background: '#19C2AB', borderRadius: '50%', padding: '0.5rem 0.8rem' }}>2</button>
                        <Heading style={{ marginTop: '30px' }}>Compare Competitor Solutions</Heading>
                        <Subtitle style={{ maxWidth: '350px' }}>Filter through CPaaS vendors and
                        compare their APIs and services with yours.
                                        </Subtitle>
                    </div>
                </div>
            </div>


            <div style={{ height: '300px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <div style={{ display: 'flex', flexDirection: 'row', backgroundColor: '#fff', justifyContent: 'space-between', alignItems: 'flex-end', padding: '2rem' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                        <br /><br />
                        <button style={{ color: '#fff', background: '#19C2AB', borderRadius: '50%', padding: '0.5rem 0.8rem' }}>3</button>
                        <Heading style={{ marginTop: '30px' }}>Understand Market Challenges</Heading>
                        <Subtitle style={{ maxWidth: '350px' }}>Empower your internal research by
                        knowing top challenges faced by your prospects.
                                        </Subtitle>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                        <ImgWrapper>
                            <Image style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginLeft: '2rem' }} src={graph} />
                        </ImgWrapper>
                    </div>
                </div>
            </div>


            <div style={{ height: '300px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <div style={{ display: 'flex', flexDirection: 'row', backgroundColor: '#fff', justifyContent: 'space-between', alignItems: 'flex-end', padding: '2rem' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                        <ImgWrapper>
                            <Image style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '1rem', marginRight: '2rem' }} src={flowchart} />
                        </ImgWrapper>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                        <br /><br />
                        <button style={{ color: '#fff', background: '#19C2AB', borderRadius: '50%', padding: '0.5rem 0.8rem' }}>4</button>
                        <Heading style={{ marginTop: '30px' }}>Suggest Targeted Use Cases</Heading>
                        <Subtitle style={{ maxWidth: '350px' }}>Curate your sales pitch deck with specific
                        use cases designed to address these problems.
                                        </Subtitle>
                    </div>
                </div>
            </div>

            <div style={{ height: '300px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <div style={{ display: 'flex', flexDirection: 'row', backgroundColor: '#fff', justifyContent: 'space-between', alignItems: 'flex-end', padding: '2rem' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                        <br /><br />
                        <button style={{ color: '#fff', background: '#19C2AB', borderRadius: '50%', padding: '0.5rem 0.8rem' }}>5</button>
                        <Heading style={{ marginTop: '30px' }}>Close More Deals</Heading>
                        <Subtitle style={{ maxWidth: '350px' }}>Close more deals by showcasing popular
                        success stories along with outcomes achieved
                                        </Subtitle>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                        <ImgWrapper>
                            <Image style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginLeft: '2rem' }} src={dollar} />
                        </ImgWrapper>
                    </div>
                </div>
            </div>

            <div className="Cards" style={{marginTop:'2rem', paddingLeft:'0%'}}>
                <Heading>Cast your sales spell on your prospects, now:</Heading>
                <div className="cardContainer">
                    <Card className="hover" style={{ width: '320px', boxShadow: 'inset 1px 0.5px 2px 0.5px #d6fffa, 1px 1px 2.5px 0.5px #d6fffa' }}  >
                        <CardContent style={{ textAlign: 'left' }}>
                            <Heading style={{ color: '#00BFA5', fontSize: '1.2em' }}>cpaasmagic Pro</Heading>
                            <Subtitle style={{ color: '#1D217E', textAlign: 'justify' }}>For those who would like to research directly
                                        within the cpaasmagic web interface. Access:<br /><br/>
                                        • Advanced search<br />
                                        • Personalized alerts<br />
                                        • Data visualizations<br />
                                        • CSV exports</Subtitle>
                            <div style={{ display: 'flex', justifyContent: 'center' }}>
                                <Link to="/register" ><Button style={{ marginRight: '0.5rem', background: '#FAD069', fontWeight: '500' }}>Start Free Trial</Button></Link>
                            </div>
                        </CardContent>
                    </Card>
                    <Card className="hover" style={{ width: '320px',  boxShadow: 'inset 1px 0.5px 2px 0.5px #d6fffa, 1px 1px 2.5px 0.5px #d6fffa' }}  >
                        <CardContent>
                            <Heading style={{ color: '#00BFA5', fontSize: '1.2em' }}>cpaasmagic Enterprise</Heading>
                            <Subtitle style={{ color: '#1D217E', textAlign: 'center' }}>Bring cpaasmagic data – from 100+ vendors across the globe – to your database. Get:<br /><br />
                                • Actionable data for your sales reps<br />
                                        • Seamless integration with your systems<br /></Subtitle><br/>
                            <div style={{ display: 'flex', justifyContent: 'center' }}><br />
                                <Button style={{ marginRight: '0.5rem', background: '#FAD069', fontWeight: '500' }}>Coming Soon</Button>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div >
    )
}

export default GetStartedPage

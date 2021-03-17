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
function getStartedPage() {
    return (
        <div style={{ color: '#1B2653' }}>
            <InfoRow style={{ backgroundColor: '#F1F3FE' }}>
                <InfoColumn>
                    <TextWrapper>
                        <Heading style={{ marginTop: '30px' }}>CPaaS Intelligence at your Fingertips</Heading>
                        <Subtitle style={{ maxWidth: '350px' }}>Discover industry trends, competitor insights, in-demand APIs, popular
                        use cases, trending success stories all within cpaasmagic seller dashboard.
                                </Subtitle>
                        <div style={{ display: 'flex', justifyContent: 'center' }}>
                            <Link to="/register" ><Button style={{ marginRight: '0.5rem', background: '#FAD069', fontWeight: '700', marginTop: '-1rem' }}>Get Started ►</Button></Link>
                        </div>
                    </TextWrapper>
                </InfoColumn>
            </InfoRow>
            <InfoRow style={{ backgroundColor: '#fff' }}>
                <InfoColumn>
                    <TextWrapper>
                        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                                <br /><br />
                                <button style={{ color: '#fff', background: '#19C2AB', borderRadius: '50%', padding: '0.3rem 0.5rem' }}>1</button>
                                <Heading style={{ marginTop: '30px' }}>Get Industry Intelligence</Heading>
                                <Subtitle style={{ maxWidth: '350px' }}>Start with industry insights and learn
                                what your closest competitors are up to.
                                        </Subtitle>
                                <ImgWrapper>
                                    <Image style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} src={api} />
                                </ImgWrapper>
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                                <ImgWrapper>
                                    <Image style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} src={search} />
                                </ImgWrapper>
                                <br /><br />
                                <button style={{ color: '#fff', background: '#19C2AB', borderRadius: '50%', padding: '0.3rem 0.5rem' }}>2</button>
                                <Heading style={{ marginTop: '30px' }}>Compare Competitor Solutions</Heading>
                                <Subtitle style={{ maxWidth: '350px' }}>Filter through CPaaS vendors and
                                compare their APIs and services with yours.
                                        </Subtitle>
                            </div>
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                                <br /><br />
                                <button style={{ color: '#fff', background: '#19C2AB', borderRadius: '50%', padding: '0.3rem 0.5rem' }}>3</button>
                                <Heading style={{ marginTop: '30px' }}>Understand Market Challenges</Heading>
                                <Subtitle style={{ maxWidth: '350px' }}>Empower your internal research by
                                knowing top challenges faced by your prospects.
                                        </Subtitle>
                                <ImgWrapper>
                                    <Image style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '1rem' }} src={flowchart} />
                                </ImgWrapper>
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                                <ImgWrapper>
                                    <Image style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} src={graph} />
                                </ImgWrapper>
                                <br /><br />
                                <button style={{ color: '#fff', background: '#19C2AB', borderRadius: '50%', padding: '0.3rem 0.5rem' }}>4</button>
                                <Heading style={{ marginTop: '30px' }}>Suggest Targeted Use Cases</Heading>
                                <Subtitle style={{ maxWidth: '350px' }}>Curate your sales pitch deck with specific
                                use cases designed to address these problems.
                                        </Subtitle>
                            </div>
                        </div>
                        <div style={{ display: 'flex',flexDirection: 'column',}}>
                            <div>
                                <br /><br />
                                <button style={{ color: '#fff', background: '#19C2AB', borderRadius: '50%', padding: '0.3rem 0.5rem' }}>5</button>
                                <Heading style={{ marginTop: '30px' }}>Close More Deals</Heading>
                                <Subtitle style={{ maxWidth: '350px' }}>Close more deals by showcasing popular
                                success stories along with outcomes achieved
                                        </Subtitle>
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                                <ImgWrapper>
                                    <Image src={dollar} />
                                </ImgWrapper>
                                <br /><br />
                            </div>
                        </div>
                        <div style={{marginTop:'2rem'}}>
                            <Heading style={{ textAlign: 'center' }}>Cast your sales spell on your prospects, now:</Heading>
                            <div style={{display:'flex', flexDirection:'row', justifyContent:'center'}}>
                                <Card className="hover" style={{ boxShadow: 'inset 1px 0.5px 2px 0.5px #d6fffa, 1px 1px 2.5px 0.5px #d6fffa' }}  >
                                    <CardContent style={{ textAlign: 'left' }}>
                                        <Heading style={{ color: '#00BFA5' }}>cpaasmagic Pro</Heading>
                                        <Subtitle style={{ color: '#1D217E', textAlign:'center' }}>For those who would like to research directly
                                        within the cpaasmagic web interface. Access:<br/><br/>
                                        <Subtitle style={{textAlign:'left', marginLeft:'1rem'}}>• Advanced search<br/>
                                        • Personalized alerts<br/>
                                        • Data visualizations<br/>
                                        • CSV exports</Subtitle></Subtitle>
                                        <div style={{ display: 'flex', justifyContent: 'center' }}>
                                            <Link to="/register" ><Button style={{ marginRight: '0.5rem', background: '#FAD069', fontWeight: '700' }}>Start Free Trial ►</Button></Link>
                                        </div>
                                    </CardContent>
                                </Card>
                                <Card className="hover" style={{ boxShadow: 'inset 1px 0.5px 2px 0.5px #d6fffa, 1px 1px 2.5px 0.5px #d6fffa' }}  >
                                    <CardContent>
                                        <Heading style={{ color: '#00BFA5' }}>cpaasmagic Enterprise</Heading>
                                        <Subtitle style={{ color: '#1D217E', textAlign:'center' }}>Bring cpaasmagic data – from 100+ vendors across the globe – to your database. Get:<br/><br/><br/>
                                        <Subtitle style={{textAlign:'left', marginLeft:'1rem'}}>• Actionable data for your sales reps<br/>
                                        • Seamless integration with your systems<br/>
                                        • Bulk exports via CSV or Excel data that’s updated automatically</Subtitle></Subtitle>
                                        <div style={{ display: 'flex', justifyContent: 'center' }}><br/>
                                            <Button style={{ marginRight: '0.5rem', background: '#FAD069', fontWeight: '700' }}>Coming Soon</Button>
                                        </div>
                                    </CardContent>
                                </Card>
                            </div>
                        </div>
                    </TextWrapper>
                </InfoColumn>
            </InfoRow>
        </div>
    )
}

export default getStartedPage

import React from 'react';
import { useSelector } from 'react-redux';
import svg5 from './svg5.svg';
import svg6 from './svg6.svg';
import svg8 from './svg8.svg';
import './home.css';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { Button, Container } from '../../../globalStyles';
import { InfoSec, InfoRow, InfoColumn, TextWrapper, Heading, Subtitle, ImgWrapper, Img, Image, InfoColumnHalf } from './InfoSection.elements';
import { Link } from 'react-router-dom';

const Home = () => {
    const auth = useSelector(state => state.auth)

    const { user, isLogged } = auth

    return (
        <div>
          {
                            isLogged
                                ? 
       <div>
            <InfoSec>
                <Container>
                    <InfoRow>
                    <InfoColumn>
                            <TextWrapper>
                                <Heading style={{ marginTop: '30px' }}>CPaaS Intelligence at your Fingertips</Heading>
                                <Subtitle>Our collective and up-to-date platform of CPaaS Vendors, APIs, Use cases and Successes empowers businesses to make better decisions.</Subtitle>
                                <InfoRow style={{ display: 'flex', justifyContent: 'center' }}>
                                    <Link to="/search/vendors">
                                        <Card className="hover"  >
                                            <CardContent>
                                                <Heading style={{ color: '#00BFA5' }}>20</Heading>
                                                <Subtitle style={{ color: '#1D217E' }}>Vendors</Subtitle>
                                            </CardContent>
                                        </Card>
                                    </Link>
                                    <Link to="/search/apis">
                                        <Card className="hover"  >
                                            <CardContent>

                                                <Heading style={{ color: '#00BFA5' }}>140</Heading>
                                                <Subtitle style={{ color: '#1D217E' }}> APIs </Subtitle>
                                            </CardContent>
                                        </Card>
                                    </Link>
                                    <Link to="/search/usecases">
                                        <Card className="hover"  >
                                            <CardContent>

                                                <Heading style={{ color: '#00BFA5' }}>425</Heading>
                                                <Subtitle style={{ color: '#1D217E' }}>Use cases</Subtitle>
                                            </CardContent>
                                        </Card>
                                    </Link>
                                    <Link to="/search/successes">
                                        <Card className="hover"  >
                                            <CardContent>
                                                <Heading style={{ color: '#00BFA5' }}>342</Heading>
                                                <Subtitle style={{ color: '#1D217E' }}> Successes</Subtitle>
                                            </CardContent>
                                        </Card>
                                    </Link>
                                </InfoRow>
                            </TextWrapper>
                        </InfoColumn>
                    </InfoRow>
                </Container>
            </InfoSec>
        </div>
        :
        <div>
        <div>
            <InfoSec>
                <Container>
                <InfoRow>
                    <InfoColumn>
                            <TextWrapper>
                                <Heading style={{ marginTop: '30px' }}>CPaaS Intelligence at your Fingertips</Heading>
                                <Subtitle>Our collective and up-to-date platform of CPaaS Vendors, APIs, Use cases and Successes empowers businesses to make better decisions.</Subtitle>
                                <InfoRow style={{ display: 'flex', justifyContent: 'center' }}>
                                    <Link to="/search/vendors/notloggedin">
                                        <Card className="hover"  >
                                            <CardContent>
                                                <Heading style={{ color: '#00BFA5' }}>20</Heading>
                                                <Subtitle style={{ color: '#1D217E' }}>Vendors</Subtitle>
                                            </CardContent>
                                        </Card>
                                    </Link>
                                    <Link to="/search/apis/notloggedin">
                                        <Card className="hover"  >
                                            <CardContent>

                                                <Heading style={{ color: '#00BFA5' }}>140</Heading>
                                                <Subtitle style={{ color: '#1D217E' }}> APIs </Subtitle>
                                            </CardContent>
                                        </Card>
                                    </Link>
                                    <Link to="/search/usecases/notloggedin">
                                        <Card className="hover"  >
                                            <CardContent>

                                                <Heading style={{ color: '#00BFA5' }}>425</Heading>
                                                <Subtitle style={{ color: '#1D217E' }}>Use cases</Subtitle>
                                            </CardContent>
                                        </Card>
                                    </Link>
                                    <Link to="/search/successes/notloggedin">
                                        <Card className="hover"  >
                                            <CardContent>
                                                <Heading style={{ color: '#00BFA5' }}>342</Heading>
                                                <Subtitle style={{ color: '#1D217E' }}> Successes</Subtitle>
                                            </CardContent>
                                        </Card>
                                    </Link>
                                </InfoRow>
                            </TextWrapper>
                        </InfoColumn>
                    </InfoRow>
                </Container>
            </InfoSec>
        </div>    <div>
                <InfoSec style={{ background: '#FAFBFF' }}>
                    <Container >
                        <Heading style={{ marginBottom: '3rem' }}>Here’s How We Can Help You</Heading>
                        <InfoRow style={{ display: 'flex', justifyContent: 'center',padding: '1rem' }}>
                            <Card style={{ width: '500px'}} className="card">
                                <CardContent>
                                    <InfoColumn >
                                        <Heading style={{ color: '#00BFA5' }}>
                                                        Are you a buyer?<br /></Heading>
                                        <Subtitle style={{ color: "#1D217E" }}>Explore our solution that brings together CPaaS Solutions from around the world in one-place.</Subtitle>
                                        <br />
                                        <Link to="/register">
                                            <Button className="hover" style={{ background: '#1D217E', margin: '0 auto', display: 'block' }} >
                                                            Begin Now
                                    </Button>
                                        </Link>
                                    </InfoColumn>
                                </CardContent>
                            </Card>
                            <Card style={{ width: '500px'}} className="card">
                                <CardContent>
                                    <InfoColumn >
                                        <Heading style={{ color: '#00BFA5' }}>
                                                        Are you a seller?<br />
                                        </Heading>
                                        <Subtitle style={{ color: "#1D217E" }}>Explore how your sales reps and marketing wizards can sell better through competitor intelligence. </Subtitle>
                                        <br />
                                        <Link to="/register">
                                            <Button className="hover" style style={{ background: '#1D217E', margin: '0 auto', display: 'block' }}>
                                                            Begin Now
                                    </Button>
                                        </Link>
                                    </InfoColumn>
                                </CardContent>
                            </Card>
                        </InfoRow>
                    </Container>
                </InfoSec>
            </div>
            <div>
                <InfoSec>
                    <Container>
                        <InfoRow  style={{ display: 'flex', justifyContent: 'center',margin:'1rem' }}>
                            <InfoColumnHalf>
                                <TextWrapper>
                                    <Heading>Want to know more? ​<br /> <span style={{ color: '#00BFA5' }}>Request a Demo.</span></Heading>
                                    <Subtitle style={{ textAlign: 'left' }}>
                                                    ✓  Benchmark against your competitors and industry
                                    <br />
                                    ✓  Reveal your competition's analytics and online strategy
<br />
✓  Discover new opportunities - partners, leads or affiliates
<br />
✓  Identify emerging trends and new players
<br />
✓  Understand consumer intent and journey</Subtitle>
                                    <Link to="/register">
                                        <Button big fontBig style={{ background: '#00BFA5' }}>
                                                        Schedule a Demo
                                    </Button>
                                    </Link>
                                </TextWrapper>
                            </InfoColumnHalf>
                            <InfoColumnHalf>
                                <ImgWrapper>
                                    <Img src={svg5} />
                                </ImgWrapper>
                            </InfoColumnHalf>
                        </InfoRow>
                    </Container>
                </InfoSec>
            </div>
            <div>
                <InfoSec style={{ background: '#FAFBFF' }}>
                    <Container>
                        <InfoRow>
                            <InfoColumnHalf>
                                <ImgWrapper>
                                    <Image src={svg8} />
                                </ImgWrapper>
                            </InfoColumnHalf>
                            <InfoColumnHalf>
                                <TextWrapper>
                                    <Heading>Using APIs? ​<br /> <span style={{ color: '#00BFA5' }}>Write a Review.</span></Heading>
                                    <Subtitle>Help others making the right choice for their business.</Subtitle>
                                    <Link to="/register">
                                        <Button big fontBig style={{ background: '#00BFA5' }}>
                                                        Write a Review
                                    </Button>
                                    </Link>
                                </TextWrapper>
                            </InfoColumnHalf>
                        </InfoRow>
                    </Container>
                </InfoSec>
            </div>
            <div>
                <InfoSec  style={{ background: '#FAFBFF' }}>
                    <Container>
                        <InfoRow>
                            <InfoColumn>
                                <Card>
                                    <CardContent>
                                        <TextWrapper style={{ textAlign: 'center' }}>
                                            <br/> <Heading style={{color: '#1D217E'}}>Ready to get started?</Heading>
                                            <Subtitle>Start transforming your business today</Subtitle>
                                            <Link to="/register">
                                                <Button big fontBig style={{ background: '#00BFA5' }}>
                                                                Try it for free
                                    </Button>
                                            </Link>
                                        </TextWrapper>
                                <ImgWrapper>
                                    <Img src={svg6}/>
                                </ImgWrapper>
                                    </CardContent>
                                </Card>
                            </InfoColumn>
                            
                        </InfoRow>
                    </Container>
                </InfoSec>
            </div>
            </div>
}
        </div>
    )
}

export default Home
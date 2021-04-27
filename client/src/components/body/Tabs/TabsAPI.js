import React from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
//import 'react-tabs/style/react-tabs.css';
import Vendors from '../Vendors/Vendors';
import APIs from '../APIs/APIs';
import Usecases from '../Usecases/Usecases';
import Successstories from '../SuccessStories/SuccessStories';
import LocationCityIcon from '@material-ui/icons/LocationCity';
import ExtensionIcon from '@material-ui/icons/Extension';
import RateReviewIcon from '@material-ui/icons/RateReview';
import ShowChartIcon from '@material-ui/icons/ShowChart';
import Picture4 from '../home/Picture4.png';
import Picture5 from '../home/Picture5.png';
import Picture6 from '../home/Picture6.png';
import Picture7 from '../home/Picture7.png';
import { Button } from '../../../globalStyles';
import { Link } from 'react-router-dom';
import Picture3 from '../home/Picture3.png';
import { InfoSec, InfoRow, InfoColumn, TextWrapper, Heading, Subtitle, ImgWrapper, Img, Image, InfoColumnHalf } from '../home/InfoSection.elements';
import './Tabs.css';

export default () => (
    <Tabs defaultIndex={1}>
        <br />
        <br />
        <div className=".react-tabs__tab-list" >
            <TabList style={{ paddingLeft: '10rem', fontSize: '1em'  }}>
                <Tab><div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>cpaas Vendors</div></Tab>
                <Tab><div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>cpaas APIs</div></Tab>
                <Tab><div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>cpaas Usecases</div></Tab>
                <Tab><div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>cpaas Successes</div></Tab>
            </TabList>
        </div>
        <div className="boxt">
            <TabPanel>
                <iframe class="airtable-embed" src="https://airtable.com/embed/shrJqJKEkBFkSlEfQ?filter_Column_Accessibility=Freemium?backgroundColor=blue&viewControls=on" frameborder="0" onmousewheel="" width="100%" height="533"></iframe>
                <div className="topbar banner Cards" style={{ paddingLeft: '0%', justifyContent: 'center', overflow: 'overlay', marginTop: '-2rem' }} >
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
            </TabPanel >
            <TabPanel>
                <iframe class="airtable-embed" src="https://airtable.com/embed/shrJFXIT0ZWH3JIv9?filter_Column_Accessibility=Freemium?backgroundColor=blue&viewControls=on" frameborder="0" onmousewheel="" width="100%" height="533" ></iframe>
                <div className="topbar banner Cards" style={{ paddingLeft: '0%', justifyContent: 'center', overflow: 'overlay', marginTop: '-2rem' }} >
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
            </TabPanel>
            <TabPanel>
                <iframe class="airtable-embed" src="https://airtable.com/embed/shrrzXsxpROZjNZOl?filter_Column_Accessibility=Freemium?backgroundColor=blue&viewControls=on" frameborder="0" onmousewheel="" width="100%" height="533"></iframe>
                <div className="topbar banner Cards" style={{ paddingLeft: '0%', justifyContent: 'center', overflow: 'overlay', marginTop: '-2rem' }} >
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
            </TabPanel>
            <TabPanel>
                <iframe class="airtable-embed" src="https://airtable.com/embed/shrBZLziN8jWec6Ff?filter_Column_Accessibility=Freemium?backgroundColor=blue&viewControls=on" frameborder="0" onmousewheel="" width="100%" height="533"></iframe>
                <div className="topbar banner Cards" style={{ paddingLeft: '0%', justifyContent: 'center', overflow: 'overlay', marginTop: '-2rem' }} >
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
            </TabPanel>
        </div>
    </Tabs>
);
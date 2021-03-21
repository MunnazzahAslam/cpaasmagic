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
import './Tabs.css';

export default () => (
    <>
        <Tabs defaultIndex={0}>
            <br />
            <br />
            <div className=".react-tabs__tab-list" style={{ margin: '0 auto', marginTop: '4rem', width: '1400px' }} >
                <TabList style={{ margin: '0 2rem', color: '#282828' }}>
                    <Tab style={{ color: '#282828' }} ><div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}><img src={Picture4} style={{ width: '2rem', height: '2rem', borderRadius: '0px', transform: 'translateY(0px)', marginRight: '0.5em' }} />Vendors</div></Tab>
                    <Tab style={{ color: '#282828' }}><div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}><img src={Picture5} style={{ width: '2rem', height: '2rem', borderRadius: '0px', transform: 'translateY(0px)', marginRight: '0.5em' }} />APIs</div></Tab>
                    <Tab style={{ color: '#282828' }}><div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}><img src={Picture6} style={{ width: '2rem', height: '2rem', borderRadius: '0px', transform: 'translateY(0px)', marginRight: '0.5em' }} />Use Cases</div></Tab>
                    <Tab style={{ color: '#282828' }}><div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}><img src={Picture7} style={{ width: '2rem', height: '2rem', borderRadius: '0px', transform: 'translateY(0px)', marginRight: '0.5em' }} />Successes</div></Tab>
                </TabList>
            </div>
            <div className="boxt">
                <TabPanel>
                    <Vendors />
                </TabPanel >
                <TabPanel>
                    <APIs />
                </TabPanel>
                <TabPanel>
                    <Usecases />
                </TabPanel>
                <TabPanel>
                    <Successstories />
                </TabPanel>
            </div>
        </Tabs>
    </>
);
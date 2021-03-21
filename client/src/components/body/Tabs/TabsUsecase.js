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
import './Tabs.css';

export default () => (
    <Tabs defaultIndex={2}>
         <br />
            <br />
            <div className=".react-tabs__tab-list" style={{ margin:'0 auto', marginTop: '4rem', width: '1400px' }} >
                <TabList style={{ margin: '0 2rem', color: '#282828' }}>
                    <Tab style={{ color: '#282828' }} ><div style={{ display: 'flex', flexDirection: 'row' }}><LocationCityIcon style={{ marginRight: '0.5rem', color: '#282828' }} />Vendors</div></Tab>
                    <Tab style={{ color: '#282828' }}><div style={{ display: 'flex', flexDirection: 'row' }}><ExtensionIcon style={{ marginRight: '0.5rem', color: '#282828' }} />APIs</div></Tab>
                    <Tab style={{ color: '#282828' }}><div style={{ display: 'flex', flexDirection: 'row' }}><RateReviewIcon style={{ marginRight: '0.5rem', color: '#282828' }} />Use Cases</div></Tab>
                    <Tab style={{ color: '#282828' }}><div style={{ display: 'flex', flexDirection: 'row' }}><ShowChartIcon style={{ marginRight: '0.5rem', color: '#282828' }} />Success Stories</div></Tab>
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
);
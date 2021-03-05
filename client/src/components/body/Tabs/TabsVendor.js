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
    <Tabs defaultIndex={0} className="boxt"  style={{color:'#00BFA5'}}>
        <div className=".react-tabs__tab-list"  style={{color:'#00BFA5'}}>
            <TabList style={{  margin:'0 1.2rem',color:'#00BFA5' }}>
                <Tab  style={{color:'#00BFA5'}}><div style={{ display: 'flex', flexDirection: 'row' }}><LocationCityIcon fontSize='inherit' />Vendors</div></Tab>
                <Tab  style={{color:'#00BFA5'}}><div style={{ display: 'flex', flexDirection: 'row' }}><ExtensionIcon fontSize='inherit' />APIS</div></Tab>
                <Tab  style={{color:'#00BFA5'}}><div style={{ display: 'flex', flexDirection: 'row' }}><RateReviewIcon fontSize='inherit' />Use Cases</div></Tab>
                <Tab  style={{color:'#00BFA5'}}><div style={{ display: 'flex', flexDirection: 'row' }}><ShowChartIcon fontSize='inherit' />Success Stories</div></Tab>
            </TabList>
        </div>

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
    </Tabs>
);
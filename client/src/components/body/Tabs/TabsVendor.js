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
import {Button} from '../../../globalStyles';
import './Tabs.css';

export default () => (
    <>
    <div style={{display:'flex', justifyContent:'space-around', margin:'2.3rem'}}>
        <h2 style={{ fontSize: 'clamp(1.7rem, 1.5vw, 1.2rem)', fontWeight: '400', fontSize: '4rem' }}>Search Vendors</h2>
        <Button style={{fontSize:'1rem'}}>Save Search</Button>
    </div>
    <Tabs defaultIndex={0}>
        <br/>
        <br/>
        <div className=".react-tabs__tab-list" style={{margin:'0 auto', width: '1400px'}} >
            <TabList style={{  margin:'0 2rem',color: '#282828'}}>
                <Tab style={{color: '#282828'}} ><div style={{ display: 'flex', flexDirection: 'row'}}><LocationCityIcon     style={{marginRight:'0.5rem',color: '#282828'}}/>Vendors</div></Tab>
                <Tab style={{color: '#282828'}}><div style={{ display: 'flex', flexDirection: 'row' }}><ExtensionIcon    style={{marginRight:'0.5rem',color: '#282828'}} />APIs</div></Tab>
                <Tab style={{color: '#282828'}}><div style={{ display: 'flex', flexDirection: 'row' }}><RateReviewIcon     style={{marginRight:'0.5rem',color: '#282828'}} />Use Cases</div></Tab>
                <Tab style={{color: '#282828'}}><div style={{ display: 'flex', flexDirection: 'row' }}><ShowChartIcon     style={{marginRight:'0.5rem',color: '#282828'}}/>Success Stories</div></Tab>
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
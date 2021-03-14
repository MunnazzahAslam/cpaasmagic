import React, { Component } from 'react'
import { DataContext } from '../reduxreactindex'
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import GoogleMapReact from 'google-map-react';
import LocationCityIcon from '@material-ui/icons/LocationCity';
import { TwitterTimelineEmbed, TwitterShareButton, TwitterFollowButton, TwitterHashtagButton, TwitterMentionButton, TwitterTweetEmbed, TwitterMomentShare, TwitterDMButton, TwitterVideoEmbed, TwitterOnAirButton } from 'react-twitter-embed';
import ExtensionIcon from '@material-ui/icons/Extension';
import RateReviewIcon from '@material-ui/icons/RateReview';
import ShowChartIcon from '@material-ui/icons/ShowChart';
import LocationOnSharpIcon from '@material-ui/icons/LocationOnSharp';
import BusinessSharpIcon from '@material-ui/icons/BusinessSharp';
import PeopleSharpIcon from '@material-ui/icons/PeopleSharp';
import LanguageSharpIcon from '@material-ui/icons/LanguageSharp';
import MaterialTable, { MTableToolbar } from 'material-table'
import { forwardRef } from 'react';
import AddBox from '@material-ui/icons/AddBox';
import ArrowDownward from '@material-ui/icons/ArrowDownward';
import Check from '@material-ui/icons/Check';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import Clear from '@material-ui/icons/Clear';
import DeleteOutline from '@material-ui/icons/DeleteOutline';
import Edit from '@material-ui/icons/Edit';
import FilterList from '@material-ui/icons/FilterList';
import FirstPage from '@material-ui/icons/FirstPage';
import LastPage from '@material-ui/icons/LastPage';
import Remove from '@material-ui/icons/Remove';
import SaveAlt from '@material-ui/icons/SaveAlt';
import Search from '@material-ui/icons/Search';
import ViewColumn from '@material-ui/icons/ViewColumn';
import InstaEmbed from '../Social/InstaEmbed';
import Maps from '../Maps/Maps';
import { Link } from 'react-router-dom';
import { Button } from '../../../globalStyles';
var { SocialIcon } = require('react-social-icons');
const tableIcons = {
    Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
    Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
    Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
    DetailPanel: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
    Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
    Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
    Filter: forwardRef((props, ref) => <Search {...props} ref={ref} />),
    FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
    LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
    NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
    PreviousPage: forwardRef((props, ref) => <ChevronLeft {...props} ref={ref} />),
    ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
    SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />),
    ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
    ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />)
};

export class Vendor extends Component {
    static defaultProps = {
        center: {
            lat: 59.95,
            lng: 30.33
        },
        zoom: 11
    };
    static contextType = DataContext;
    state = {
        vendors: [],
        apis: [],
        usecases: [],
        successstories: []
    }

    getVendor = () => {
        if (this.props.match.params.TransformX_Vendor_Id) {
            const res = this.context.vendors;
            const resApi = this.context.apis;
            const resUsecase = this.context.usecases;
            const resSuccessstory = this.context.successstories;

            const data = res.filter(vendor => {
                return vendor.TransformX_Vendor_Id === this.props.match.params.TransformX_Vendor_Id
            })
            const dataApi = resApi.filter(api => {
                return api.TransformX_Vendor_Id === this.props.match.params.TransformX_Vendor_Id
            })
            const dataUseCase = resUsecase.filter(usecase => {
                return usecase.TransformX_Vendor_Id === this.props.match.params.TransformX_Vendor_Id
            })
            const dataSuccessStories = resSuccessstory.filter(successstory => {
                return successstory.TransformX_Vendor_Id === this.props.match.params.TransformX_Vendor_Id
            })
            this.setState({ vendors: data, apis: dataApi, usecases: dataUseCase, successstories: dataSuccessStories })
        }
    };

    componentDidMount() {
        this.getVendor();
    }

    render() {
        const { vendors, apis, usecases, successstories } = this.state;
        return (
            <>
                {
                    vendors.map(vendor => (
                        <div key={vendor.TransformX_Vendor_Id}>
                            <br />
                            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center',margin:'2rem 0' }}>
                                <img style={{ margin: '0 2rem', borderRadius: '8px', width: '12vw', height: '12vw' }} src={vendor.TransformX_Vendor_Logo} alt="VendorProfile" />
                                <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                                    <p style={{ color: '#ced4da', fontSize: '1.5rem' }}>Vendor</p>
                                    <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center'  }}>
                                    <h2 style={{ fontSize: 'clamp(1.7rem, 1.5vw, 1.2rem)', fontWeight: '400', fontSize: '4rem' }}>{vendor.TransformX_Vendor_Name}</h2>
                                      <div style={{marginLeft:'0.5rem', marginTop:'0.5rem'}}>
                                        <SocialIcon network="linkedin" style={{ height: 35, width: 35, marginRight: '1rem' }} />
                                        <SocialIcon network="youtube" style={{ height: 35, width: 35, marginRight: '1rem' }} />
                                        <SocialIcon network="facebook" style={{ height: 35, width: 35, marginRight: '1rem' }} />
                                        <SocialIcon network="twitter" style={{ height: 35, width: 35, marginRight: '1rem' }} />
                                        </div>
                                    </div>
                                    <div style={{ display: 'flex', flexDirection: 'row', margin:'1rem 0' }}>
                                        <Button>Compare</Button>
                                        <Button style={{ color: '#00BFA5', background: '#fff' }}>Visit Website</Button>
                                    </div>
                                </div>
                            </div>
                            <Tabs defaultIndex={0}>
                                <br />
                                <br />
                                <div className=".react-tabs__tab-list"  >
                                    <TabList style={{ margin: '0 2.5rem', color: '#282828' }}>
                                        <Tab style={{ color: '#282828' }} ><div style={{ display: 'flex', flexDirection: 'row' }}><LocationCityIcon style={{ marginRight: '0.5rem', color: '#282828' }} />About</div></Tab>
                                        <Tab style={{ color: '#282828' }}><div style={{ display: 'flex', flexDirection: 'row' }}><ExtensionIcon style={{ marginRight: '0.5rem', color: '#282828' }} />APIs</div></Tab>
                                        <Tab style={{ color: '#282828' }}><div style={{ display: 'flex', flexDirection: 'row' }}><RateReviewIcon style={{ marginRight: '0.5rem', color: '#282828' }} />Use Cases</div></Tab>
                                        <Tab style={{ color: '#282828' }}><div style={{ display: 'flex', flexDirection: 'row' }}><ShowChartIcon style={{ marginRight: '0.5rem', color: '#282828' }} />Success Stories</div></Tab>
                                    </TabList>
                                </div>
                                <div className="boxt">
                                    <TabPanel>
                                        <div style={{ display: 'flex', flexDirection: 'row', marginTop: '1rem' }}>
                                            <Card className="card" style={{ padding: '2rem', margin: '0 2rem', width: '70%' }}>
                                                {/* <Button variant="contained" style={{ background: "#00B0F0", color: '#fff', borderRadius: '0.5rem', marginLeft: 'auto', padding: '0.6rem' }}>
                                                        Pure Player
                                                        </Button>
                                                    <Button variant="contained" style={{ background: "#002060", color: '#fff', borderRadius: '0.5rem', marginLeft:'4px', padding: '0.6rem' }}>
                                                        Top Choice
                                                    </Button>*/}
                                                <br />
                                                <h2 style={{ fontSize: 'clamp(1.7rem, 1.5vw, 1.2rem)', margin: '1.5rem 0', fontWeight: '700' }}><LocationCityIcon style={{ marginRight: '0.5rem', color: '#282828' }} />About</h2>
                                                <p style={{ textAlign: 'justify', fontSize: 'clamp(0.8rem, 1vw, 1.4rem)' }}>{vendor.LinkedIn_Vendor_Overview}</p>
                                                <br />
                                                <p style={{ textAlign: 'justify', fontSize: 'clamp(0.8rem, 1vw, 1.4rem)' }}>Founders <br /> <span style={{ color: "#002060" }}>{vendor.Crunchbase_Vendor_Founders}</span></p>
                                                <br />
                                                <p style={{ textAlign: 'justify', fontSize: 'clamp(0.8rem, 1vw, 1.4rem)' }}>Founded in <br /> <span style={{ color: "#002060" }}>{vendor.LinkedIn_Vendor_Founded}</span></p>
                                                <br />
                                                <p style={{ textAlign: 'justify', fontSize: 'clamp(0.8rem, 1vw, 1.4rem)' }}>Industry <br /> <span style={{ color: "#002060" }}>{vendor.LinkedIn_Vendor_Industry}</span></p>
                                                <br />
                                                <p style={{ textAlign: 'justify', fontSize: 'clamp(0.8rem, 1vw, 1.4rem)' }}>Company Size <br /> <span style={{ color: "#002060" }}>{vendor.LinkedIn_Vendor_Company_Size}</span></p>
                                            </Card>
                                            <Card style={{ width: '504px', height: '600px' }}>
                                                <TwitterTimelineEmbed
                                                    sourceType="profile"
                                                    screenName={vendor.TransformX_Vendor_Name}
                                                    options={{ height: 600, width: 600 }}
                                                />
                                            </Card>
                                        </div>
                                    </TabPanel >
                                    <TabPanel>
                                        <h2 style={{ fontSize: 'clamp(1.7rem, 1.5vw, 1.2rem)', margin: '2rem', fontWeight: '700' }}>  <ExtensionIcon style={{ marginRight: '0.5rem', color: '#282828' }} />APIs</h2>
                                        <div style={{ display: 'flex', flexDirection: 'row', marginTop: '2rem' }}>
                                            <MaterialTable
                                                icons={tableIcons}
                                                style={{ width: '70%', fontSize: 'clamp(0.8rem, 1vw, 1.4rem)', tableLayout: 'fixed', margin: '0 2rem' }}
                                                columns={[
                                                    {
                                                        title: 'API', field: 'Vendor_API_Name',filterPlaceholder: 'Search by Keyword', render: rowData => <div style={{ display: 'flex', justifyContent: 'justify', alignItems: 'center' }}>
                                                            <Link to={`/apis/${rowData.TransformX_API_Id}`}>
                                                                <p>{rowData.Vendor_API_Name}</p>
                                                            </Link></div>
                                                    },
                                                    {
                                                        title: 'Category', field: 'TransformX_API_Category1',filterPlaceholder: 'Search by Keyword', render: rowData => <div style={{ display: 'flex', justifyContent: 'justify', alignItems: 'center' }}>
                                                            <Link to={`/apis/${rowData.TransformX_API_Id}`}>
                                                                <p>{rowData.TransformX_API_Category1}</p>
                                                            </Link></div>
                                                    }
                                                ]}
                                                key={apis.TransformX_API_Id}
                                                data={apis}
                                                options={{
                                                    paging: true,
                                                    pageSize: 10,       // make initial page size
                                                    emptyRowsWhenPaging: false,   //to make page size fix in case of less data rows
                                                    pageSizeOptions: [10, 15, 20],    // rows selection options                                   

                                                    filtering: true,
                                                    headerStyle: {
                                                        fontSize: 'clamp(0.8rem, 1vw, 1.4rem)',
                                                        backgroundColor: '#F6F9FC'
                                                    },
                                                    cellStyle: {
                                                        textAlign: 'center'
                                                    },
                                                    filterCellStyle: {
                                                        fontSize: 'clamp(0.8rem, 1vw, 1.4rem)'
                                                    },
                                                    exportButton: false,
                                                    showTitle: false,
                                                    search: false
                                                }
                                                }
                                                components={{
                                                    Toolbar: props => (
                                                        <div style={{ height: '0px' }}>
                                                            <MTableToolbar {...props} />
                                                        </div>
                                                    ),
                                                }}
                                                localization={{ toolbar: { searchPlaceholder: 'Search here..' } }}
                                            />
                                            <Card style={{ height: '480px', width: '504px' }}>
                                                <GoogleMapReact
                                                    bootstrapURLKeys={{ key: 'AIzaSyD9LDJdrqc0aDzNu3IpJ3tuS5d9pW_XE_I' }}
                                                    defaultCenter={this.props.center}
                                                    defaultZoom={this.props.zoom}
                                                >
                                                    <div
                                                        lat={59.955190}
                                                        lng={30.33789}
                                                    ></div>
                                                </GoogleMapReact>
                                            </Card>
                                        </div>
                                    </TabPanel>
                                    <TabPanel>
                                        <h2 style={{ fontSize: 'clamp(1.7rem, 1.5vw, 1.2rem)', margin: '2rem', fontWeight: '700' }}><RateReviewIcon style={{ marginRight: '0.5rem', color: '#282828' }} />Use Cases</h2>
                                        <div style={{ display: 'flex', flexDirection: 'row', marginTop: '2rem' }}>
                                            <MaterialTable
                                                icons={tableIcons}
                                                style={{ width: '70%', fontSize: 'clamp(0.8rem, 1vw, 1.4rem)', tableLayout: 'fixed', margin: '2rem' }}
                                                columns={[
                                                    {
                                                        title: 'Usecase', field: 'TransformX_Usecase_Name',filterPlaceholder: 'Search by Keyword', render: rowData => <div style={{ display: 'flex', justifyContent: 'start' }}>
                                                            <Link to={`/usecases/${rowData.TransformX_Usecase_Id}`}>
                                                                <p style={{ textAlign: 'justify' }}>{rowData.TransformX_Usecase_Name}</p>
                                                            </Link></div>
                                                    },
                                                    {
                                                        title: 'Industry', field: 'TransformX_Usecase_Industry',filterPlaceholder: 'Search by Keyword', render: rowData => <div style={{ display: 'flex', justifyContent: 'start' }}>
                                                            <Link to={`/usecases/${rowData.TransformX_Usecase_Id}`}>
                                                                <p style={{ textAlign: 'justify' }}>{rowData.TransformX_Usecase_Industry}</p>
                                                            </Link></div>
                                                    },
                                                    {
                                                        title: 'Category', field: 'TransformX_Usecase_Category',filterPlaceholder: 'Search by Keyword', render: rowData => <div style={{ display: 'flex', justifyContent: 'start' }}>
                                                            <Link to={`/usecases/${rowData.TransformX_Usecase_Id}`}>
                                                                <p style={{ textAlign: 'justify' }}>{rowData.TransformX_Usecase_Category}</p>
                                                            </Link></div>
                                                    },
                                                ]}
                                                key={usecases.TransformX_API_Id}
                                                data={usecases}
                                                options={{
                                                    paging: true,
                                                    pageSize: 10,       // make initial page size
                                                    emptyRowsWhenPaging: true,   //to make page size fix in case of less data rows
                                                    pageSizeOptions: [10, 15, 20],    // rows selection options                                   

                                                    filtering: true,
                                                    headerStyle: {
                                                        fontSize: 'clamp(0.8rem, 1vw, 1.4rem)',
                                                        backgroundColor: '#F6F9FC'
                                                    },
                                                    cellStyle: {
                                                        textAlign: 'left'
                                                    },
                                                    filterCellStyle: {
                                                        fontSize: 'clamp(0.8rem, 1vw, 1.4rem)'
                                                    },
                                                    exportButton: false,
                                                    showTitle: false,
                                                    search: false
                                                }

                                                }
                                                components={{
                                                    Toolbar: props => (
                                                        <div style={{ height: '0px' }}>
                                                            <MTableToolbar {...props} />
                                                        </div>
                                                    ),
                                                }}
                                            />
                                            <Card style={{ width: '504px', height: '600px',marginTop:'2rem' }}>
                                                <TwitterTimelineEmbed
                                                    sourceType="profile"
                                                    screenName={vendor.TransformX_Vendor_Name}
                                                    options={{ height: 600, width: 600 }}
                                                />
                                            </Card>
                                        </div>
                                    </TabPanel>
                                    <TabPanel>
                                        <h2 style={{ fontSize: 'clamp(1.7rem, 1.5vw, 1.2rem)', margin: '2rem', fontWeight: '700' }} ><ShowChartIcon style={{ marginRight: '0.5rem', color: '#282828' }} />Successes</h2>
                                        <div style={{ display: 'flex', flexDirection: 'row', margin: '2rem 0' }}>
                                            <MaterialTable
                                                icons={tableIcons}
                                                style={{ width: '70%', fontSize: 'clamp(0.8rem, 1vw, 1.4rem)', tableLayout: 'fixed', margin: '2rem' }}
                                                columns={[
                                                    {
                                                        title: 'Story', field: 'Vendor_Success_Story_Client_Name', filterPlaceholder: 'Search by Keyword',render: rowData => <div>
                                                            <Link to={`/successstories/${rowData.TransformX_Success_Story_Id}`}>
                                                                <p>{rowData.Vendor_Success_Story_Client_Name}</p>
                                                            </Link></div>
                                                    },
                                                    {
                                                        title: 'Story', field: 'TransformX_Success_Story_Name',filterPlaceholder: 'Search by Keyword', render: rowData => <div>
                                                            <Link to={`/successstories/${rowData.TransformX_Success_Story_Id}`}>
                                                                <p>{rowData.TransformX_Success_Story_Name}</p>
                                                            </Link></div>
                                                    },
                                                    {
                                                        title: 'Industry', field: 'TransformX_Success_Story_Industry',filterPlaceholder: 'Search by Keyword', render: rowData => <div>
                                                            <Link to={`/successstories/${rowData.TransformX_Success_Story_Id}`}>
                                                                <p>{rowData.TransformX_Success_Story_Industry}</p>
                                                            </Link></div>
                                                    },
                                                ]}
                                                key={successstories.TransformX_Success_Story_Id}
                                                data={successstories}
                                                options={{
                                                    paging: true,
                                                    pageSize: 10,       // make initial page size
                                                    emptyRowsWhenPaging: true,   //to make page size fix in case of less data rows
                                                    pageSizeOptions: [10, 15, 20],    // rows selection options                                   
                                                    filtering: true,
                                                    headerStyle: {
                                                        fontSize: 'clamp(0.8rem, 1vw, 1.4rem)',
                                                        backgroundColor: '#F6F9FC'
                                                    },
                                                    cellStyle: {
                                                        textAlign: 'left'
                                                    },
                                                    filterCellStyle: {
                                                        fontSize: 'clamp(0.8rem, 1vw, 1.4rem)'
                                                    },
                                                    exportButton: false,
                                                    showTitle: false,
                                                    search: false
                                                }
                                                }
                                                components={{
                                                    Toolbar: props => (
                                                        <div style={{ height: '0px' }}>
                                                            <MTableToolbar {...props} />
                                                        </div>
                                                    ),
                                                }}
                                            />
                                            <Card style={{ width: '504px', height: '600px',marginTop:'2rem' }}>
                                                <TwitterTimelineEmbed
                                                    sourceType="profile"
                                                    screenName={vendor.TransformX_Vendor_Name}
                                                    options={{ height: 600, width: 600 }}
                                                />
                                            </Card>
                                        </div>
                                    </TabPanel>
                                </div>
                            </Tabs>
                        </div>
                    ))
                }
            </>
        )
    }
}

export default Vendor

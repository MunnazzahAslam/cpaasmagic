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
import Picture4 from '../home/Picture4.png';
import Picture5 from '../home/Picture5.png';
import Picture6 from '../home/Picture6.png';
import Picture7 from '../home/Picture7.png';
import { Link } from 'react-router-dom';
import '../Tabs/Tabs.css';
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
                        <div key={vendor.TransformX_Vendor_Id}  >
                            <br />
                            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', margin: '2rem 0',paddingLeft: '5%', }}>
                                <img style={{ margin: '0 2rem', borderRadius: '8px', width: '8vw', height: '8vw', marginLeft: '2rem' }} src={vendor.TransformX_Vendor_Logo} alt="VendorProfile" />
                                <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                                    <p style={{ color: '#ced4da', fontSize: '1.5rem' }}>Vendor</p>
                                    <h2 style={{ fontSize: 'clamp(1.7rem, 1.5vw, 1.2rem)', fontWeight: '400', fontSize: '4rem' }}>{vendor.TransformX_Vendor_Name}</h2>
                                    <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                                        <div style={{ marginLeft: '0.5rem', marginTop: '0.5rem' }}>
                                            <SocialIcon network="linkedin" style={{ height: 35, width: 35, marginRight: '1rem' }} />
                                            <SocialIcon network="youtube" style={{ height: 35, width: 35, marginRight: '1rem' }} />
                                            <SocialIcon network="facebook" style={{ height: 35, width: 35, marginRight: '1rem' }} />
                                            <SocialIcon network="twitter" style={{ height: 35, width: 35, marginRight: '1rem' }} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <Tabs defaultIndex={0}>
                                <br />
                                <br />
                                <div className=".react-tabs__tab-list" style={{ marginLeft: '4rem', width: '1400px' }} >
                                    <TabList style={{ color: '#282828', paddingLeft: '5%', }}>
                                        <Tab style={{ color: '#282828' }} ><div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}><img src={Picture4} style={{ width: '2rem', height: '2rem', borderRadius: '0px', transform: 'translateY(0px)', marginRight: '0.5em' }} />About</div></Tab>
                                        <Tab style={{ color: '#282828' }}><div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}><img src={Picture5} style={{ width: '2rem', height: '2rem', borderRadius: '0px', transform: 'translateY(0px)', marginRight: '0.5em' }} />APIs</div></Tab>
                                        <Tab style={{ color: '#282828' }}><div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}><img src={Picture6} style={{ width: '2rem', height: '2rem', borderRadius: '0px', transform: 'translateY(0px)', marginRight: '0.5em' }} />Use Cases</div></Tab>
                                        <Tab style={{ color: '#282828' }}><div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}><img src={Picture7} style={{ width: '2rem', height: '2rem', borderRadius: '0px', transform: 'translateY(0px)', marginRight: '0.5em' }} />Successes</div></Tab>
                                    </TabList>
                                </div>
                                <div className="boxt">
                                    <TabPanel>
                                        <div style={{ display: 'flex', flexDirection: 'row', marginTop: '1rem', paddingLeft:'5%' }}>
                                            <Card className="card" style={{ padding: '2rem', margin: '0 2rem', width: '60%' }}>
                                                {/* <Button variant="contained" style={{ background: "#00B0F0", color: '#fff', borderRadius: '0.5rem', marginLeft: 'auto', padding: '0.6rem' }}>
                                                        Pure Player
                                                        </Button>
                                                    <Button variant="contained" style={{ background: "#002060", color: '#fff', borderRadius: '0.5rem', marginLeft:'4px', padding: '0.6rem' }}>
                                                        Top Choice
                                                    </Button>*/}
                                                <div style={{display: 'flex', flexDirection:'row', justifyContent:'flex-start'}}>
                                                    <Button style={{marginRight:'0.5rem', backgroundImage: 'linear-gradient(45deg,#6DCDF2,#1EB5ED )'}}>Pure Player</Button>
                                                    <Button style={{backgroundImage: 'linear-gradient(45deg,#62A6D9,#1F7FC4 )'}}>Top Vendors</Button>
                                                </div>
                                                <br/><br/>
                                                <br/>
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
                                        <div style={{ display: 'flex', flexDirection: 'row', marginTop: '2rem', marginLeft: '2rem',paddingLeft:'5%', width:'100%',paddingRight:'5%' }}>
                                            <MaterialTable
                                                title={<h1 style={{ color: '#1D217E' }}>APIs</h1>}
                                                icons={tableIcons}
                                                style={{ fontSize: 'clamp(0.8rem, 1vw, 1.4rem)', tableLayout: 'fixed' }}
                                                columns={[

                                                    {
                                                        title: 'API Name', field: 'Vendor_API_Name', filterPlaceholder: 'Search by Name', render: rowData => <div>
                                                            <Link to={`/apis/${rowData.TransformX_API_Id}`}>
                                                                <div style={{ display: 'flex', flexDirection: 'row' }}>
                                                                    <img src={rowData.TransformX_API_Logo} style={{ color: '#2dce89', marginRight: '0.3rem' }} />
                                                                    <p>{rowData.Vendor_API_Name}</p>
                                                                </div>
                                                            </Link></div>
                                                    },
                                                    {
                                                        title: 'API Category', field: 'TransformX_API_Category1', filterPlaceholder: 'Search by Category', render: rowData => <div style={{ display: 'flex', justifyContent: 'justify', alignItems: 'center' }}>
                                                            <Link to={`/apis/${rowData.TransformX_API_Id}`}>
                                                                <div style={{ display: 'flex', flexDirection: 'row' }}>
                                                                    <p>{rowData.TransformX_API_Category1}</p>
                                                                </div>
                                                            </Link></div>
                                                    },


                                                    {
                                                        title: 'API Description', field: 'TransformX_API_Description', filterPlaceholder: 'Search by keyword', cellStyle: {
                                                            whiteSpace: 'nowrap'
                                                        }, render: rowData => <div style={{ display: 'flex', justifyContent: 'justify', alignItems: 'center' }}>
                                                            <Link to={`/apis/${rowData.TransformX_API_Id}`}>
                                                                <p>{rowData.TransformX_API_Description}</p>
                                                            </Link></div>
                                                    }
                                                ]}
                                                key={this.state.apis.TransformX_API_Id}
                                                data={this.state.apis}
                                                options={{
                                                    selection: true,
                                                    paging: true,
                                                    pageSize: 5,       // make initial page size
                                                    emptyRowsWhenPaging: true,   //to make page size fix in case of less data rows
                                                    pageSizeOptions: [5, 10, 15],    // rows selection options

                                                    filtering: true,
                                                    headerStyle: {
                                                        fontSize: 'clamp(0.8rem, 1vw, 1.4rem)',
                                                        backgroundColor: '#F6F9FC'
                                                    },
                                                    filterCellStyle: {
                                                        fontSize: 'clamp(0.8rem, 1vw, 1.4rem)'
                                                    },
                                                    exportButton: true,
                                                    showTitle: true,
                                                    search: true
                                                }
                                                }
                                                components={{
                                                    Toolbar: props => (
                                                        <div style={{ height: '60px' }}>
                                                            <MTableToolbar {...props} />
                                                        </div>
                                                    ),
                                                }}
                                            />
                                        </div>
                                    </TabPanel>
                                    <TabPanel>
                                        <div style={{ display: 'flex', flexDirection: 'row', marginTop: '2rem', marginLeft: '2rem',paddingLeft:'5%', width:'100%',paddingRight:'5%' }}>
                                            <MaterialTable
                                                title={<h1 style={{ color: '#1D217E' }}>Use Cases</h1>}
                                                icons={tableIcons}
                                                style={{ fontSize: 'clamp(0.8rem, 1vw, 1.4rem)', tableLayout: 'fixed', color: '#32325d !important' }}
                                                columns={[


                                                    {
                                                        title: 'Use Case Name', field: 'TransformX_Usecase_Name', filterPlaceholder: 'Search by keyword', cellStyle: {
                                                            whiteSpace: 'nowrap', textAlign: 'left'
                                                        }, render: rowData => <div style={{ display: 'flex', justifyContent: 'start' }}>
                                                            <Link to={`/usecases/${rowData.TransformX_Usecase_Id}`}>
                                                                <p style={{ textAlign: 'justify' }}>{rowData.TransformX_Usecase_Name}</p>
                                                            </Link></div>
                                                    },

                                                    /* { title: 'Category', field: 'TransformX_Usecase_Category',filterPlaceholder: 'Search by Category', cellStyle: {
                                                         whiteSpace: 'nowrap', textAlign: 'left'
                                                        }, render: rowData => <div style={{ display: 'flex', justifyContent: 'start' }}>
                                                     <Link to={`/usecases/${rowData.TransformX_Usecase_Id}`}>
                                                         <p style={{ textAlign: 'justify' }}>{rowData.TransformX_Usecase_Category}</p>
                                                     </Link></div> }, */
                                                    {
                                                        title: 'Use Case Industry', field: 'TransformX_Usecase_Industry', filterPlaceholder: 'Search by Industry', cellStyle: {
                                                            whiteSpace: 'nowrap', textAlign: 'left'
                                                        }, render: rowData => <div style={{ display: 'flex', justifyContent: 'start' }}>
                                                            <Link to={`/usecases/${rowData.TransformX_Usecase_Id}`}>
                                                                <p style={{ textAlign: 'justify' }}>{rowData.TransformX_Usecase_Industry}</p>
                                                            </Link></div>
                                                    },

                                                    {
                                                        title: 'Use Case Industry', field: 'TransformX_Usecase_Industry', filterPlaceholder: 'Search by Industry', cellStyle: {
                                                            whiteSpace: 'nowrap', textAlign: 'left'
                                                        }, render: rowData => <div style={{ display: 'flex', justifyContent: 'start' }}>
                                                            <Link to={`/usecases/${rowData.TransformX_Usecase_Id}`}>
                                                                <p style={{ textAlign: 'justify' }}>{rowData.TransformX_Usecase_Industry}</p>
                                                            </Link></div>
                                                    },

                                                    {
                                                        title: 'Use Case Category', field: 'TransformX_Usecase_Category', filterPlaceholder: 'Search by keyword', cellStyle: {
                                                            width: '40%'
                                                        }, render: rowData => <div style={{ display: 'flex', justifyContent: 'start' }}>
                                                            <Link to={`/usecases/${rowData.TransformX_Usecase_Id}`}>
                                                                <p style={{ textAlign: 'justify' }}>{rowData.TransformX_Usecase_Category}</p>
                                                            </Link></div>
                                                    },

                                                ]}
                                                key={this.state.usecases.TransformX_API_Id}
                                                data={this.state.usecases}
                                                options={{
                                                    selection: true,
                                                    paging: true,
                                                    pageSize: 5,       // make initial page size
                                                    emptyRowsWhenPaging: true,   //to make page size fix in case of less data rows
                                                    pageSizeOptions: [5, 10, 15],    // rows selection options

                                                    filtering: true,
                                                    headerStyle: {
                                                        fontSize: 'clamp(0.8rem, 1vw, 1.4rem)',
                                                        backgroundColor: '#F6F9FC'
                                                    },
                                                    filterCellStyle: {
                                                        fontSize: 'clamp(0.8rem, 1vw, 1.4rem)'
                                                    },
                                                    exportButton: true,
                                                    showTitle: true,
                                                    search: true
                                                }

                                                }
                                                components={{
                                                    Toolbar: props => (
                                                        <div style={{ height: '60px' }}>
                                                            <MTableToolbar {...props} />
                                                        </div>
                                                    ),
                                                }}
                                            />
                                        </div>
                                    </TabPanel>
                                    <TabPanel>
                                        <div style={{ display: 'flex', flexDirection: 'row', margin: '2rem 0', marginLeft: '2rem',paddingLeft:'5%',paddingRight:'5%', width:'100%'}}>
                                            <MaterialTable
                                                title={<h1 style={{ color: '#1D217E' }}>Successes</h1>}
                                                icons={tableIcons}
                                                style={{ fontFamily: 'Glacial Indifference', fontSize: 'clamp(0.8rem, 1vw, 1.4rem)', tableLayout: 'fixed' }}
                                                columns={[

                                                    {
                                                        title: 'Client Name', field: 'Vendor_Success_Story_Client_Name', filterPlaceholder: 'Search by Name', render: rowData => <div>
                                                            <Link to={`/successstories/${rowData.TransformX_Success_Story_Id}`}>
                                                                <p>{rowData.Vendor_Success_Story_Client_Name}</p>
                                                            </Link></div>
                                                    },
                                                    {
                                                        title: 'Success Title', field: 'TransformX_Success_Story_Name', filterPlaceholder: 'Search by keyword', cellStyle: {
                                                            whiteSpace: 'nowrap', textAlign: 'left'
                                                        }, render: rowData => <div>
                                                            <Link to={`/successstories/${rowData.TransformX_Success_Story_Id}`}>
                                                                <p>{rowData.TransformX_Success_Story_Name}</p>
                                                            </Link></div>
                                                    },
                                                    {
                                                        title: 'Success Industry', field: 'TransformX_Success_Story_Region', filterPlaceholder: 'Search by Industry', cellStyle: {
                                                            whiteSpace: 'nowrap'
                                                        }, render: rowData => <div>
                                                            <Link to={`/successstories/${rowData.TransformX_Success_Story_Id}`}>
                                                                <div style={{ display: 'flex', flexDirection: 'row' }}>
                                                                    <p>{rowData.TransformX_Success_Story_Region}</p>
                                                                </div>
                                                            </Link></div>
                                                    },
                                                    { title: 'Success Region', field: 'TransformX_Success_Story_Region',filterPlaceholder: 'Search by Industry',  cellStyle: {
                                                        whiteSpace: 'nowrap'
                                                       },  render: rowData => <div>
                                                       <Link to={`/successstories/${rowData.TransformX_Success_Story_Id}`}>
                                                       <div style={{ display: 'flex', flexDirection: 'row'}}>
                                                           <p>{rowData.TransformX_Success_Story_Country}</p>
                                                           </div>
                                                       </Link></div>}
                                                ]}
                                                key={this.state.successstories.TransformX_API_Id}
                                                data={this.state.successstories}
                                                options={{
                                                    selection: true,
                                                    paging: true,
                                                    pageSize: 5,       // make initial page size
                                                    emptyRowsWhenPaging: true,   //to make page size fix in case of less data rows
                                                    pageSizeOptions: [5, 10, 15],    // rows selection options

                                                    filtering: true,
                                                    headerStyle: {
                                                        color: 'Black',
                                                        whiteSpace: 'nowrap',
                                                        fontSize: 'clamp(0.8rem, 1vw, 1.4rem)',
                                                        backgroundColor: '#F6F9FC'
                                                    },
                                                    filterCellStyle: {
                                                        fontSize: 'clamp(0.8rem, 1vw, 1.4rem)'
                                                    },
                                                    exportButton: true,
                                                    showTitle: true,
                                                    search: true
                                                }
                                                }
                                                components={{
                                                    Toolbar: props => (
                                                        <div style={{ height: '60px' }}>
                                                            <MTableToolbar {...props} />
                                                        </div>
                                                    ),
                                                }}
                                            />
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

import React, { Component } from 'react'
import { DataContext } from '../reduxreactindex'
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import LocationCityIcon from '@material-ui/icons/LocationCity';
import ExtensionIcon from '@material-ui/icons/Extension';
import RateReviewIcon from '@material-ui/icons/RateReview';
import ShowChartIcon from '@material-ui/icons/ShowChart';
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

const tableIcons = {
    Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
    Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
    Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
    DetailPanel: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
    Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
    Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
    Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
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
                            {/*<Card className="box">
                                <CardMedia className="cover"
                                    image={vendor.TransformX_Vendor_Banner}
                                />
                            </Card>
                    */}
                            <br />
                            <Tabs className="boxt" style={{ color: '#00BFA5', margin: '2.5rem' }}>
                            <img style={{ margin: '0 1rem', borderRadius: '8px', width: '6vw', height: '6vw' }} src={vendor.TransformX_Vendor_Logo} alt="VendorProfile" />
                              <div className=".react-tabs__tab-list" style={{ color: '#00BFA5' }}>
                                <TabList style={{ fontFamily: 'Glacial Indifference', margin: '0 1.2rem', marginTop:'1rem', marginBottom:'1rem', color: '#00BFA5' }}>
                                    <Tab style={{color:'#00BFA5'}}><div style={{ display: 'flex', flexDirection: 'row' }}><LocationCityIcon fontSize='inherit' />Overview</div></Tab>
                                    <Tab style={{color:'#00BFA5'}}><div style={{ display: 'flex', flexDirection: 'row' }}><ExtensionIcon fontSize='inherit' />APIS</div></Tab>
                                    <Tab style={{color:'#00BFA5'}}><div style={{ display: 'flex', flexDirection: 'row' }}><RateReviewIcon fontSize='inherit' />Use Cases</div></Tab>
                                    <Tab style={{color:'#00BFA5'}}><div style={{ display: 'flex', flexDirection: 'row' }}><ShowChartIcon fontSize='inherit' />Success Stories</div></Tab>
                                </TabList>
                                </div>
                                <TabPanel>
                                    <Card className="card" style={{ padding: '1rem',margin:'0 1.2rem' }}>
                                        <h2 style={{ fontSize: 'clamp(1.2rem, 1.5vw, 1.7rem)'}}>{vendor.TransformX_Vendor_Name}</h2>
                                        {/* <Button variant="contained" style={{ background: "#00B0F0", color: '#fff', borderRadius: '0.5rem', marginLeft: 'auto', padding: '0.6rem' }}>
                                                        Pure Player
                                                        </Button>
                                                    <Button variant="contained" style={{ background: "#002060", color: '#fff', borderRadius: '0.5rem', marginLeft:'4px', padding: '0.6rem' }}>
                                                        Top Choice
                                                    </Button>*/}
                                        <br />
                                        <p style={{ textAlign: 'justify', fontSize: 'clamp(0.8rem, 1vw, 1.4rem)' }}>{vendor.LinkedIn_Vendor_Overview}</p>
                                        <br />
                                        <p style={{ textAlign: 'justify', fontSize: 'clamp(0.8rem, 1vw, 1.4rem)' }}>Founders: <span style={{ color: "#002060" }}>{vendor.Crunchbase_Vendor_Founders}</span></p>
                                        <br />
                                        <p style={{ textAlign: 'justify', fontSize: 'clamp(0.8rem, 1vw, 1.4rem)' }}>Founded in: <span style={{ color: "#002060" }}>{vendor.LinkedIn_Vendor_Founded}</span></p>
                                        <br />
                                        <p style={{ textAlign: 'justify', fontSize: 'clamp(0.8rem, 1vw, 1.4rem)' }}>Industry: <span style={{ color: "#002060" }}>{vendor.LinkedIn_Vendor_Industry}</span></p>
                                        <br />
                                        <p style={{ textAlign: 'justify', fontSize: 'clamp(0.8rem, 1vw, 1.4rem)' }}>Company Size: <span style={{ color: "#002060" }}>{vendor.LinkedIn_Vendor_Company_Size}</span></p>
                                    </Card>

                                </TabPanel>
                                <TabPanel>
                                    <MaterialTable
                                        icons={tableIcons}
                                        style={{ fontFamily: 'Glacial Indifference', fontSize: 'clamp(0.8rem, 1vw, 1.4rem)', tableLayout: 'fixed' }}
                                        columns={[
                                            { title: 'API', field: 'Vendor_API_Name' },
                                            { title: 'Category', field: 'TransformX_API_Category1' }
                                        ]}
                                        key={apis.TransformX_API_Id}
                                        data={apis}
                                        options={{
                                            filtering: true,
                                            headerStyle: {
                                                fontSize: 'clamp(0.8rem, 1vw, 1.4rem)',
                                                backgroundColor: '#F6F9FC',
                                                padding: '0.3rem'
                                            },
                                            cellStyle: {
                                                padding: '0.2rem',
                                                textAlign: 'justify'
                                            },
                                            filterCellStyle: {
                                                fontSize: 'clamp(0.8rem, 1vw, 1.4rem)',
                                                padding: '0.3rem'
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
                                        detailPanel={rowData => {
                                            return (
                                                <p style={{ margin: '0.5rem', padding: '1rem', fontSize: 'clamp(0.8rem, 1vw, 1.4rem)', fontFamily: 'Glacial Indifference' }}>Description: {rowData.TransformX_API_Description}</p>
                                            )
                                        }}
                                    />
                                </TabPanel>
                                <TabPanel>
                                    <MaterialTable
                                        icons={tableIcons}
                                        style={{ fontFamily: 'Glacial Indifference', fontSize: 'clamp(0.8rem, 1vw, 1.4rem)', tableLayout: 'fixed' }}
                                        columns={[
                                            { title: 'Usecase', field: 'TransformX_Usecase_Name' },
                                            { title: 'Industry', field: 'TransformX_Usecase_Industry', },
                                            { title: 'Category', field: 'TransformX_Usecase_Category' },
                                        ]}
                                        key={usecases.TransformX_API_Id}
                                        data={usecases}
                                        options={{
                                            filtering: true,
                                            headerStyle: {
                                                fontSize: 'clamp(0.8rem, 1vw, 1.4rem)',
                                                backgroundColor: '#F6F9FC',
                                                padding: '0.3rem'
                                            },
                                            cellStyle: {
                                                padding: '0.2rem',
                                                textAlign: 'justify'
                                            },
                                            filterCellStyle: {
                                                fontSize: 'clamp(0.8rem, 1vw, 1.4rem)',
                                                padding: '0.3rem'
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
                                        detailPanel={rowData => {
                                            return (
                                                <p style={{ margin: '0.5rem', padding: '1rem', fontSize: 'clamp(0.8rem, 1vw, 1.4rem)', fontFamily: 'Glacial Indifference' }}>Description: {rowData.TransformX_Usecase_Description}</p>
                                            )
                                        }}
                                    />
                                </TabPanel>
                                <TabPanel>
                                    <MaterialTable
                                        icons={tableIcons}
                                        style={{ fontFamily: 'Glacial Indifference', fontSize: 'clamp(0.8rem, 1vw, 1.4rem)', tableLayout: 'fixed' }}
                                        columns={[
                                            { title: 'Story', field: 'Vendor_Success_Story_Name', filtering: false },
                                            { title: 'Industry', field: 'TransformX_Success_Story_Industry', filtering: false },
                                            { title: 'Region', field: 'TransformX_Success_Story_Region', filtering: false },
                                            {
                                                title: 'Country', field: 'TransformX_Success_Story_Country'
                                            }
                                        ]}
                                        key={successstories.TransformX_API_Id}
                                        data={successstories}
                                        options={{
                                            filtering: true,
                                            headerStyle: {
                                                fontSize: 'clamp(0.8rem, 1vw, 1.4rem)',
                                                backgroundColor: '#F6F9FC',
                                                padding: '0.3rem'
                                            },
                                            cellStyle: {
                                                padding: '0.2rem',
                                                textAlign: 'justify'
                                            },
                                            filterCellStyle: {
                                                fontSize: 'clamp(0.8rem, 1vw, 1.4rem)',
                                                padding: '0.3rem'
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
                                        detailPanel={rowData => {
                                            return (
                                                <p style={{ margin: '0.5rem', padding: '1rem', fontSize: 'clamp(0.8rem, 1vw, 1.4rem)', fontFamily: 'Glacial Indifference' }}>Description: {rowData.Vendor_Success_Story_Description}</p>
                                            )
                                        }}
                                    />
                                </TabPanel>
                            </Tabs>
                        </div>

                    ))
                }
            </>
        )
    }
}

export default Vendor

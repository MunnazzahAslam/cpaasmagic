import React from 'react';
import Card from '@material-ui/core/Card';
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
import CardMedia from '@material-ui/core/CardMedia';
import successbanner from '../SuccessStories/successbanner.png';
import { Link } from 'react-router-dom'
import { DataContext } from '../reduxreactindex'
import { Button, Container } from '../../../globalStyles';
import CardContent from '@material-ui/core/CardContent';
import success from './success.jpg'
import './nlg.css';
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

class Successstories extends React.Component {

    constructor(props) {
        super(props);
        this.tableRef = React.createRef();
    }
    state = {
        loading: false,
        successstories: [],
        details: []
    }

    componentDidMount() {
        this.setState({ loading: true })
        fetch('/api/successstories') //data source
            .then(response => response.json())
            .then(res => {
                this.setState({ successstories: res.slice(0, 5), loading: true, details: res.Vendor_Success_Story_Result })
            })
            .catch(error => {
                console.log(error)
            })
    }

    render() {

        return (
            <div className="main" style={{ margin: '0 1.2rem' }}>
                <Card className="box">
                    <CardMedia className="cover"
                        image={successbanner}
                    /></Card><MaterialTable
                    icons={tableIcons}
                    style={{ fontFamily: 'Glacial Indifference', fontSize: 'clamp(0.8rem, 1vw, 1.4rem)', tableLayout: 'fixed' }}
                    columns={[
                        {
                            title: 'Vendor', field: 'TransformX_Vendor_Name', render: rowData => <div style={{ display: 'flex', justifyContent: 'start', alignItems: 'start' }}>
                            <Link to={`/vendors/${rowData.TransformX_Vendor_Id}`}>
                            <p>{rowData.TransformX_Vendor_Name}</p>  </Link></div>
                        },
                        {
                            title: 'Client', field:'Vendor_Success_Story_Client_Name', filtering:false , render: rowData => <div>
                            <Link to={`/successstories/${rowData.TransformX_Success_Story_Id}`}>
                                <p>{rowData.Vendor_Success_Story_Client_Name}</p>
                            </Link></div>
                        },
                        {
                            title: 'Story', field: 'TransformX_Success_Story_Name', filtering: false, cellStyle: {
                                whiteSpace: 'nowrap', textAlign: 'justify'
                               } , render: rowData => <div>
                                <Link to={`/successstories/${rowData.TransformX_Success_Story_Id}`}>
                                    <p>{rowData.TransformX_Success_Story_Name}</p>
                                </Link></div>
                        },
                        { title: 'Industry', field: 'TransformX_Success_Story_Industry', filtering: false , cellStyle: {
                            whiteSpace: 'nowrap'
                           }, render: rowData => <div>
                           <Link to={`/successstories/${rowData.TransformX_Success_Story_Id}`}>
                               <p>{rowData.TransformX_Success_Story_Industry}</p>
                           </Link></div>},
                        { title: 'Region', field: 'TransformX_Success_Story_Region', filtering: false, render: rowData => <div>
                        <Link to={`/successstories/${rowData.TransformX_Success_Story_Id}`}>
                            <p>{rowData.TransformX_Success_Story_Region}</p>
                        </Link></div> },
                    ]}
                    key={this.state.successstories.TransformX_API_Id}
                    data={this.state.successstories}
                    options={{
                        paging: false,
                        filtering: true,
                        headerStyle: {
                            fontSize: 'clamp(0.8rem, 1vw, 1.4rem)',
                            backgroundColor: '#F6F9FC'
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
                   
                />
                <Card className="box" >
                    <CardMedia
                        image={success}
                        className="cover"
                        style={{height:'600px',margin: '0.5rem'}}
                    />
                    <CardContent>
                        <Link to="/register">
                            <Button className="hover" style={{ background: '#1D217E', margin: '0 auto', display: 'block' }} >
                                Unlock Now
              </Button>
                        </Link>
                    </CardContent>
                </Card>
            </div>
        )
    }
}
export default Successstories;

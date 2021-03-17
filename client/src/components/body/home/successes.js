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
import VideocamSharpIcon from '@material-ui/icons/VideocamSharp';
import FilterList from '@material-ui/icons/FilterList';
import FirstPage from '@material-ui/icons/FirstPage';
import LastPage from '@material-ui/icons/LastPage';
import Remove from '@material-ui/icons/Remove';
import SaveAlt from '@material-ui/icons/SaveAlt';
import Search from '@material-ui/icons/Search';
import ViewColumn from '@material-ui/icons/ViewColumn';
import { Button } from '../../../globalStyles';

import { Link } from 'react-router-dom'
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

class FeaturedSuccesses extends React.Component {

    constructor(props) {
        super(props);
        this.tableRef = React.createRef();
    }
    state = {
        loading: false,
        successes: []
    }

    componentDidMount() {
        this.setState({ loading: true })
        fetch('/api/successstories') //data source
            .then(response => response.json())
            .then(res => {
                this.setState({ successes: res.slice(0, 5), loading: true })
                console.log(this.state.successes);
            })
            .catch(error => {
                console.log(error)
            })
    }
    render() {
        return (
            <MaterialTable
                icons={tableIcons}
                style={{ tableLayout: 'fixed' }}
                columns={[
                    {
                        title: 'Featured Successes', field: 'TransformX_Vendor_Name'
                        , cellStyle: {
                            whiteSpace: 'nowrap', textAlign: 'left'
                        }, render: rowData => <div style={{}}>
                            <Link to={`/vendors/${rowData.TransformX_Vendor_Id}`}>
                                <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                                    <img src={rowData.TransformX_Vendor_Logo} style={{ width: '2rem', height: '2rem', margin: '0.5rem' }} alt="logo" />
                                    <p style={{ color: '#212529', fontWeight: '400' }}>{rowData.TransformX_Vendor_Name} - {rowData.TransformX_Success_Story_Name}</p>
                                </div>
                            </Link></div>
                    },
                ]}
                key={this.state.successes.TransformX_Success_Story_Id}
                data={this.state.successes}
                options={{
                    paging: false,
                    headerStyle: {
                        backgroundColor: '#F6F9FC',
                        padding: '0.5rem',
                        color: '#19C2AB',
                        textAlign: 'center',
                        fontWeight: '600'
                    },
                    cellStyle: {
                        fontSize: 'clamp(0.4rem, 0.3vw, 0.2rem)',
                        backgroundColor: '#F6F9FC',
                        padding: '0.2rem'
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
        )
    }
}
export default FeaturedSuccesses;
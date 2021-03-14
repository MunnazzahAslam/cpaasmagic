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
import vendorbanner from '../Vendors/vendorbanner.png';
import { Link } from 'react-router-dom';
import Vendorsb from './vendors.jpg';
import { Button } from '../../../globalStyles';
import CardContent from '@material-ui/core/CardContent';
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


class Vendors extends React.Component {

  constructor(props) {
    super(props);
    this.tableRef = React.createRef();
  }
  state = {
    loading: false,
    vendors: []
  }

  componentDidMount() {
    this.setState({ loading: true })
    fetch('/api/vendors') //data source
      .then(response => response.json())
      .then(res => {
        this.setState({ vendors: res.slice(0, 5), loading: true })
        console.log(res);
      })
      .catch(error => {
        console.log(error)
      })
  }
  render() {

    return (
      <div className="main" style={{ margin: '0 1.2rem' }}>
        <Card className="box">
          <CardMedia
            image={vendorbanner}
            className="cover"
          /></Card>

        <MaterialTable
          icons={tableIcons}
          style={{ fontSize: 'clamp(0.8rem, 1vw, 1.4rem)', tableLayout: 'fixed' }}
          title="Vendors"
          columns={
            [
              {
                field: 'TransformX_Vendor_Logo', filtering: false, cellStyle: {
                  width: 80,
                  maxWidth: 100
                }
                ,
                headerStyle: {
                  width: 80,
                  maxWidth: 100
                }, filtering: false, render: rowData => <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                  <Link to={`/vendors/${rowData.TransformX_Vendor_Id}`}>
                    <img src={rowData.TransformX_Vendor_Logo} style={{ width: '5rem', height: '5rem' }} alt="logo" />
                  </Link></div>
              },
              {
                title: 'Vendor', field: 'TransformX_Vendor_Name', filtering: false, render: rowData => <div style={{ display: 'flex', justifyContent: 'start', alignItems: 'start' }}>
                <Link to={`/vendors/${rowData.TransformX_Vendor_Id}`}>
                <p>{rowData.TransformX_Vendor_Name}</p>
                </Link></div>
              },
              {
                title: 'Type', field: 'Gartner_Vendor_Type', filtering: false, render: rowData => <div style={{ display: 'flex', justifyContent: 'start', alignItems: 'start' }}>
                <Link to={`/vendors/${rowData.TransformX_Vendor_Id}`}>
                <p>{rowData.Gartner_Vendor_Type}</p>
                </Link></div>
              },
              {
                title: 'Industry', field: 'LinkedIn_Vendor_Industry', filtering: false, render: rowData => <div style={{ display: 'flex', justifyContent: 'start', alignItems: 'start' }}>
                <Link to={`/vendors/${rowData.TransformX_Vendor_Id}`}>
                <p>{rowData.LinkedIn_Vendor_Industry}</p>
                </Link></div>
              },
              {
                title: 'Headquarters Region', field: 'TransformX_Vendor_Headquarter_Region', filtering: false, render: rowData => <div style={{ display: 'flex', justifyContent: 'start', alignItems: 'start' }}>
                <Link to={`/vendors/${rowData.TransformX_Vendor_Id}`}>
                  <p>{rowData.TransformX_Vendor_Headquarter_Region}</p>
                </Link></div>
              },
              {
                title: 'Specialities', field: 'TransformX_Vendor_Unique_Sell_Point', cellStyle: {
                  width: '60%'
                 },filtering: false, render: rowData => <div style={{ display: 'flex', justifyContent: 'start', alignItems: 'start' }}>
                 <Link to={`/vendors/${rowData.TransformX_Vendor_Id}`}>
                   <p>{rowData.TransformX_Vendor_Unique_Sell_Point}</p>
                 </Link></div>
              }
            ]}
          key={this.state.vendors.TransformX_Vendor_Id}
          data={this.state.vendors}
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
            exportButton: true,
            showTitle: true,
            search: true
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
        <Card className="box">
          <CardMedia
            image={Vendorsb}
            className="cover"
          />
          <CardContent>
            <Link to="/register">
              <Button className="hover" style={{ background: '#1D217E', margin: '0 auto', display: 'block' }} >
                Unlock now
              </Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    )
  }
}
export default Vendors;
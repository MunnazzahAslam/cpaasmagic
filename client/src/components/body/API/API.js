import React, { Component } from 'react'
import { DataContext } from '../reduxreactindex'
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import { Button } from '../../../globalStyles';
var { SocialIcon } = require('react-social-icons');
export class API extends Component {

    static contextType = DataContext;
    state = {
        apis: []
    }

    getAPIs = () => {
        if (this.props.match.params.TransformX_API_Id) {
            const resAPI = this.context.apis;
            const dataAPIs = resAPI.filter(api => {
                return api.TransformX_API_Id === this.props.match.params.TransformX_API_Id
            })
            this.setState({ apis: dataAPIs })
        }
    };

    componentDidMount() {
        this.getAPIs();
    }

    render() {
        const { apis } = this.state;
        return (
            <>
                {
                    apis.map(api => (
                        <div key={api.TransformX_API_Id} style={{paddingRight:'5%', paddingLeft:'5%'}}>
                            <br />
                            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                                <img style={{ margin: '0 2rem', borderRadius: '8px', width: '12vw', height: '12vw' }} src={api.TransformX_Vendor_Logo} alt="VendorProfile" />
                                <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                                    <p style={{ color: '#ced4da', fontSize: '1.5rem' }}>API</p>
                                    <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center'  }}>
                                    <h2 style={{ fontSize: 'clamp(1.7rem, 1.5vw, 1.2rem)', fontWeight: '400', fontSize: '4rem' }}>{api.TransformX_Vendor_Name} - {api.Vendor_API_Name}</h2>
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
                            <div>
                            </div>
                            <Card className="card" style={{ padding: '2rem', margin: '2rem' }}>
                                <br />
                                <p style={{ textAlign: 'left', fontSize: 'clamp(1.4rem, 1.2vw, 1rem)', }}>{api.TransformX_API_Description}</p><br /><br/>
                                <p style={{ textAlign: 'justify', fontSize: 'clamp(1.6rem, 1.4vw, 1.2rem)',color:'#383838' }}><b>Features</b></p><br /><br/>
                                <p style={{ textAlign: 'justify', fontSize: 'clamp(1.4rem, 1.2vw, 1rem)',color:'#383838' }}><b>{api.Vendor_API_Feature_1}</b><br /><br />{api.TransformX_API_Feature_Description_1}</p><br /><br/>
                                <p style={{ textAlign: 'justify', fontSize: 'clamp(1.4rem, 1.2vw, 1rem)',color:'#383838' }}><b>{api.Vendor_API_Feature_2}</b><br /><br />{api.TransformX_API_Feature_Description_2}</p><br /><br/>
                                <p style={{ textAlign: 'justify', fontSize: 'clamp(1.4rem, 1.2vw, 1rem)',color:'#383838' }}><b>{api.Vendor_API_Feature_3}</b><br /><br />{api.TransformX_API_Feature_Description_3}</p><br /><br/>
                            </Card>
                        </div>

                    ))
                }
            </>
        )
    }
}

export default API


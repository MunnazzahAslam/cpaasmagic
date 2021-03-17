import React, { Component } from 'react'
import { DataContext } from '../reduxreactindex'
import Card from '@material-ui/core/Card';
import { Button } from '../../../globalStyles';
import { Link } from 'react-router-dom';
var { SocialIcon } = require('react-social-icons');
export class Success extends Component {

    static contextType = DataContext;
    state = {
        successstories: []
    }

    getSuccess = () => {
        if (this.props.match.params.TransformX_Success_Story_Id) {
            const ressuccess = this.context.successstories;
            const dataSuccessStories = ressuccess.filter(success => {
                return success.TransformX_Success_Story_Id === this.props.match.params.TransformX_Success_Story_Id
            })
            this.setState({ successstories: dataSuccessStories })
        }
    };

    componentDidMount() {
        this.getSuccess();
    }

    render() {
        const { successstories } = this.state;
        return (
            <>
                {
                    successstories.map(success => (
                        <div key={success.TransformX_Success_Story_Id} style={{paddingRight:'5%', paddingLeft:'5%'}}>
                            <br /><br />
                            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center',margin:'2rem 0' }}>
                                <img style={{ margin: '0 2rem', borderRadius: '8px', width: '12vw', height: '12vw' }} src={success.TransformX_Vendor_Logo} alt="VendorProfile" />
                                <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                                    <p style={{ color: '#ced4da', fontSize: '1.5rem' }}>Success Story</p>
                                    <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center'  }}>
                                    <h2 style={{ fontSize: 'clamp(1.7rem, 1.5vw, 1.2rem)', fontWeight: '400', fontSize: '4rem' }}>{success.TransformX_Vendor_Name} - {success.Vendor_Success_Story_Client_Name}</h2>
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
                                <p style={{ textAlign: 'justify', fontSize: 'clamp(1.4rem, 1.2vw, 1rem)',color:'#383838' }}><b>Challenge</b><br /><br />{success.TransformX_Success_Story_Challenge}</p><br /><br/>
                                <p style={{ textAlign: 'justify', fontSize: 'clamp(1.4rem, 1.2vw, 1rem)',color:'#383838' }}><b>Solution</b><br /><br />{success.TransformX_Success_Story_Solution}</p><br /><br/>
                                <p style={{ textAlign: 'justify', fontSize: 'clamp(1.4rem, 1.2vw, 1rem)',color:'#383838' }}><b>Result</b><br /><br />{success.TransformX_Success_Story_Result}</p><br /><br/>
                            </Card>
                        </div>

                    ))
                }
            </>
        )
    }
}

export default Success

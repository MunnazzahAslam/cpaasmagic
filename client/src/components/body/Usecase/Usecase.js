import React, { Component } from 'react'
import { DataContext } from '../reduxreactindex'
import Card from '@material-ui/core/Card';
import { Button, Container } from '../../../globalStyles';

var { SocialIcon } = require('react-social-icons');
export class Usecase extends Component {

    static contextType = DataContext;
    state = {
        usecases: []
    }

    getUsecase = () => {
        if (this.props.match.params.TransformX_Usecase_Id) {
            const resUsecase = this.context.usecases;
            const dataUsecases = resUsecase.filter(usecase => {
                return usecase.TransformX_Usecase_Id === this.props.match.params.TransformX_Usecase_Id
            })
            this.setState({ usecases: dataUsecases })

        }
    };

    componentDidMount() {
        this.getUsecase();
    }

    render() {
        const { usecases } = this.state;
        return (
            <div >
                {
                    usecases.map(usecase => (
                        <div key={usecase.TransformX_Usecase_Id} style={{paddingRight:'5%', paddingLeft:'5%'}} >
                            <br /><br />
                            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center',margin:'2rem 0' }}>
                                <img style={{ margin: '0 2rem', borderRadius: '8px', width: '12vw', height: '12vw' }} src={usecase.TransformX_Vendor_Logo} alt="VendorProfile" />
                                <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                                    <p style={{ color: '#ced4da', fontSize: '1.5rem' }}>Use Case</p>
                                    <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center'  }}>
                                    <h2 style={{ fontSize: 'clamp(1.7rem, 1.5vw, 1.2rem)', fontWeight: '400', fontSize: '4rem' }}>{usecase.TransformX_Vendor_Name} - {usecase.TransformX_Usecase_Name}</h2>
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
                            <Card className="card" style={{ padding: '2rem', margin: '2rem', marginTop:'1rem' }}>
                                <br />
                                <p style={{ textAlign: 'justify', fontSize: 'clamp(1.4rem, 1.2vw, 1rem)',color:'#383838' }}><b>Description</b><br /><br />{usecase.TransformX_Usecase_Description}</p><br /><br/>
                                <p style={{ textAlign: 'justify', fontSize: 'clamp(1.4rem, 1.2vw, 1rem)',color:'#383838' }}><b>APIs Used</b><br /><br />{usecase.TransformX_API_Name_1}</p><br /><br/>
                                <p style={{ textAlign: 'justify', fontSize: 'clamp(1.4rem, 1.2vw, 1rem)',color:'#383838' }}><b>Process </b><br /><br />{usecase.TransformX_Usecase_Process_1}<br/><br />{usecase.TransformX_Usecase_Process_2}<br/><br />{usecase.TransformX_Usecase_Process_3}<br /><br/></p><br /><br/>
                                <p style={{ textAlign: 'justify', fontSize: 'clamp(1.4rem, 1.2vw, 1rem)',color:'#383838' }}><b>Value Generated</b><br /><br />{usecase.TransformX_Usecase_Value_Generated_1}<br/><br />{usecase.TransformX_Usecase_Value_Generated_2}<br/><br />{usecase.TransformX_Usecase_Value_Generated_3}<br/><br />{usecase.TransformX_Usecase_Value_Generated_4}</p><br /><br/>                        
                            </Card>   
                        </div>
                              ))
                }
            </div>
        )
    }
}

export default Usecase


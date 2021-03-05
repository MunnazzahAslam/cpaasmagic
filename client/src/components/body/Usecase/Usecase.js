import React, { Component } from 'react'
import { DataContext } from '../reduxreactindex'
import Card from '@material-ui/core/Card';
import { Button, Container } from '../../../globalStyles';

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
                        <div key={usecase.TransformX_Usecase_Id} >
                            <br /><br />
                            <div>
                            <p style={{
                                textAlign: 'left', fontSize: 'clamp(0.8em, 0.6vw, 0.4rem)',margin: '0 3rem', color:'#696969', letterSpacing:'1px', textTransform:'uppercase'}}>{usecase.TransformX_Vendor_Name} - {usecase.TransformX_Usecase_Industry}</p>
                            <h1 style={{
                                textAlign: 'left', fontSize: 'clamp(2em, 1.8vw, 1.6rem)',
                                margin: "0 auto", padding: "0em", fontWeight: "bold", margin: '0 3rem', color:'#1D217E'
                            }}>{usecase.TransformX_Usecase_Name}   <Button style={{ background:'#00BFA5'}}>{usecase.TransformX_Usecase_Category}</Button><br />
                            </h1>
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


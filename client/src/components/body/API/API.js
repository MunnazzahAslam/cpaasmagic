import React, { Component } from 'react'
import { DataContext } from '../reduxreactindex'
import Card from '@material-ui/core/Card';

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
                        <div key={api.TransformX_API_Id}>
                         <br /><br />
                            <div>
                            <p style={{
                                textAlign: 'left', fontSize: 'clamp(0.8em, 0.6vw, 0.4rem)',margin: '0 3rem', color:'#696969', letterSpacing:'1px', textTransform:'uppercase'}}>{api.TransformX_Vendor_Name} - {api.TransformX_API_Category1}</p>
                            <h1 style={{
                                textAlign: 'left', fontSize: 'clamp(2em, 1.8vw, 1.6rem)',
                                margin: "0 auto", padding: "0em", fontWeight: "bold", margin: '0 3rem', color:'#1D217E'
                            }}>{api.TransformX_API_Name}</h1><br />
                            <p style={{ textAlign: 'left', fontSize: 'clamp(1.4rem, 1.2vw, 1rem)',margin: '0 3rem', }}>{api.TransformX_API_Description}</p><br />
                            </div>
                            <Card className="card" style={{ padding: '2rem', margin: '2rem' }}>
                                <br />
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


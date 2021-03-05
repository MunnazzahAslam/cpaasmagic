import React, { Component } from 'react'
import { DataContext } from '../reduxreactindex'
import Card from '@material-ui/core/Card';

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
                        <div key={success.TransformX_Success_Story_Id}>
                            <br /><br />
                            <div>
                            <p style={{
                                textAlign: 'left', fontSize: 'clamp(0.8em, 0.6vw, 0.4rem)',margin: '0 3rem', color:'#696969', letterSpacing:'1px', textTransform:'uppercase'}}>{success.TransformX_Vendor_Name} - {success.TransformX_Success_Story_Industry}</p>
                            <h1 style={{
                                textAlign: 'left', fontSize: 'clamp(2em, 1.8vw, 1.6rem)',
                                margin: "0 auto", padding: "0em", fontWeight: "bold", margin: '0 3rem', color:'#1D217E'
                            }}>{success.TransformX_Success_Story_Name}</h1><br />
                            <p style={{ textAlign: 'left', fontSize: 'clamp(1.4rem, 1.2vw, 1rem)',margin: '0 3rem', }}>{success.TransformX_Success_Story_Client_Description}</p><br />
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

import React from 'react';
import Card from '@material-ui/core/Card';
import { InfoSec, InfoRow, InfoColumn, TextWrapper, Heading, Subtitle, ImgWrapper, Img, Image, InfoColumnHalf } from './InfoSection.elements';
import { CardContent } from '@material-ui/core';
import './home.css';
import Picture4 from './Picture4.png';
import Picture5 from './Picture5.png';
import Picture6 from './Picture6.png';
import Picture7 from './Picture7.png';
class TopCards extends React.Component {

    constructor(props) {
        super(props);
        this.tableRef = React.createRef();
    }
    state = {
        loading: false,
        vendors: [],
        apis: [],
        usecases: [],
        successes: []
    }

    componentDidMount() {
        this.setState({ loading: true })
        fetch('/api/vendors') //data source
            .then(response => response.json())
            .then(res => {
                this.setState({ vendors: res, loading: true })
            })
            .catch(error => {
                console.log(error)
            })
        fetch('/api/apis') //data source
            .then(response => response.json())
            .then(res => {
                this.setState({ apis: res, loading: true })
            })
            .catch(error => {
                console.log(error)
            })
        fetch('/api/usecases') //data source
            .then(response => response.json())
            .then(res => {
                this.setState({ usecases: res, loading: true })
            })
            .catch(error => {
                console.log(error)
            })
        fetch('/api/successstories') //data source
            .then(response => response.json())
            .then(res => {
                this.setState({ successes: res, loading: true })
            })
            .catch(error => {
                console.log(error)
            })
    }
    render() {

        return (
            <div style={{ display: 'flex', flexDirection: 'row',justifyContent:'space-between' }}>
                <Card className="smallCards" style={{  }}  >
                    <CardContent>
                        <Heading style={{ color: '#FAD069', fontWeight: '400', fontSize: '2rem', marginBottom: '0px' }}><img src={Picture4} /><br />21</Heading>
                        <Subtitle style={{ color: '#1D217E' }}>Vendors</Subtitle>
                    </CardContent>
                </Card>
                <Card className="smallCards" style={{  }} >
                    <CardContent>
                        <Heading style={{ color: '#FAD069', fontWeight: '400', fontSize: '2rem', marginBottom: '0px' }}><img src={Picture5} /><br />185</Heading>
                        <Subtitle style={{ color: '#1D217E' }}>APIs</Subtitle>
                    </CardContent>
                </Card>
                <Card className="smallCards" style={{  }} >
                    <CardContent>
                        <Heading style={{ color: '#FAD069', fontWeight: '400', fontSize: '2rem', marginBottom: '0px' }}><img src={Picture6} /><br />460</Heading>
                        <Subtitle style={{ color: '#1D217E' }}>Use Cases</Subtitle>
                    </CardContent>
                </Card>
                <Card className="smallCards" style={{  }} >
                    <CardContent>
                        <Heading style={{ color: '#FAD069', fontWeight: '400', fontSize: '2rem', marginBottom: '0px' }}><img src={Picture7} /><br />365</Heading>
                        <Subtitle style={{ color: '#1D217E' }}>Successes</Subtitle>
                    </CardContent>
                </Card>

            </div>
        )
    }
}
export default TopCards;
import React from 'react';
import Card from '@material-ui/core/Card';
import { InfoSec, InfoRow, InfoColumn, TextWrapper, Heading, Subtitle, ImgWrapper, Img, Image, InfoColumnHalf } from './InfoSection.elements';
import { CardContent } from '@material-ui/core';
import './home.css';
import Picture4 from './Picture4.png';
import Picture5 from './Picture5.png';
import { Button } from '../../../globalStyles';
import Picture6 from './Picture6.png';
import Picture7 from './Picture7.png';
class NewFeatures extends React.Component {

    render() {

        return (
            <div>
                <Card>
                    <CardContent>
                        <Heading style={{ color:'#19C2AB' }}>Upcoming Features <br/><br/> cpaasmagic Enterprise</Heading>
                        <Subtitle style={{ textAlign: 'left', marginLeft: '1rem' }}>• Actionable data for your sales reps<br />
                                        • Seamless integration with your systems<br />
                                        • Bulk exports via CSV or Excel data that’s updated automatically</Subtitle>
                                        <div>
                                        <Button style={{ textAlign: 'right' }}>Learn More</Button>
                                    </div>
                    </CardContent>
                </Card>
            </div >
        )
    }
}
export default NewFeatures;
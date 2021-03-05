import React, { Component } from 'react'
import Button from '@material-ui/core/Button';

export class VendorFeature extends Component {
    constructor(props) {
        super(props)
        this.state = {
            vendors: [],
        };
    }

    render() {
        return (
            <div style={{display:'flex', justifyContent:'center', textAlign:'center', marginTop:'40%'}}>
                <Button variant="contained" style={{ background: "#D271B6", color: '#fff', borderRadius: '8px', margin:'0 auto' }}>
                    Ad Section
                </Button>
            </div>
        )
    }
}

export default VendorFeature
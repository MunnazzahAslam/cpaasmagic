import React, { Component } from 'react'
import './VendorsPage.css'
import { Link } from 'react-router-dom'
import { DataContext } from '../reduxreactindex'

export class VendorsPage extends Component {
    static contextType = DataContext;
    render() {
        const { vendors } = this.context;
        return (
            <div className="home_page">
                <a href="/search"><h2>Top CPaaS Vendors</h2></a>
                <br />
                <div className="grid-container center">
                {
                    vendors.map(vendor => (
                            <div key={vendor.TransformX_Vendor_Id}>
                            <Link to={`/vendors/${vendor.TransformX_Vendor_Id}`}>
                                <img className="image" src={vendor.TransformX_Vendor_Logo} alt="" />
                            </Link>
                            </div>
                    ))
                }
                </div>
            <br /><br /><br />
        </div>
        )
    }
}
export default VendorsPage

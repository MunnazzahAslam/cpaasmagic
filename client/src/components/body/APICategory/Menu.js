import React from 'react'

function Menu({ menuItem }) {
    return (
        <div className="item">
            {
                menuItem.map((item) => {
                    return <div className="item-con" key={item.id}>
                        <div className="item-container" style={{ display: 'flex', flexDirection: 'row' }}>
                            <img style={{ margin: '0 2rem', borderRadius: '8px', width: '6vw', height: '6vw', marginLeft: '2rem' }} src="https://dl.airtable.com/.attachments/f60a4cd175f16af24eb649400f6814b9/6c829759/004-chat.png" alt="VendorProfile" />
                            <div style={{ display: 'flex', flexDirection: 'column' }}>
                                <h2 style={{ fontSize: '1.3em', color: '#222', fontWeight: '500' }}>{item.fields.Vendor_Name} - {item.fields.API_Name}</h2>
                                <p style={{ fontSize: '0.9em' }}>{item.fields.API_Type}</p>
                            </div>
                        </div>
                    </div>
                })
            }
        </div>
    )
}

export default Menu;
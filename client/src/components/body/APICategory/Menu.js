import React from 'react'
import FeatherIcon from 'feather-icons-react';

function Menu({ menuItem }) {
    return (
        <div className="item">
            {
                menuItem.map((item) => {
                    return <div className="item-con" key={item.id}>
                        <div className="item-container" style={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-start' }}>
                            <div style={{ display: 'flex', flexDirection: 'column', alignItems:'center'}}>
                                <FeatherIcon icon="chevron-down" style={{ color: '#222' }} />
                            </div>
                            {item.fields.Airtable_API_Logo.map((c, i) => (
                                <div key={i}>
                                    <a href={item.fields.API_ChildPage_URL.url}  >
                                        <img style={{ margin: '0 2rem', borderRadius: '8px', width: '4vw', height: '4vw', marginLeft: '1rem' }} src={c.url} />
                                    </a>
                                </div>
                            ))}
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
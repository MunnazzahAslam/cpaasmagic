import React from 'react'
import FeatherIcon from 'feather-icons-react';
import { Accordion, Card } from "react-bootstrap";
import { Button } from '../../../globalStyles';
function Menu({ menuItem }) {

    const renderAccordion = (item, index) => {
        return (
            <Accordion key={index}>
                <Card>
                    <Accordion.Toggle as={Card.Header} eventKey={item.id}>
                        <div className="item-container" style={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-start' }}>
                            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '1.3rem', marginRight:'0.5rem' }}>
                                <FeatherIcon icon="chevron-down" style={{ color: '#222' }} />
                            </div>{item.fields.Airtable_API_Logo.map((c, i) => (
                                <div key={i}>
                                    <img style={{ margin: '0 2rem', borderRadius: '8px', width: '4vw', height: '4vw', marginLeft: '1rem' }} src={c.url} />
                                </div>
                            ))}
                            <div style={{ display: 'flex', flexDirection: 'column' }}>
                                <h2 style={{ fontSize: '1.3rem', color: '#222', fontWeight: '500' }}>{item.fields.Vendor_Name} - {item.fields.API_Name}</h2>
                                <p style={{ fontSize: '1.1rem' }}>{item.fields.API_Type}</p>
                            </div>
                        </div>
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey={item.id}>
                        <Card.Body>
                            <p style={{ fontSize: '1.1rem', color: '#222', fontWeight: '500' }}>Description</p>
                            <p>{item.fields.API_Description}</p>
                            <p style={{ fontSize: '1.1rem', color: '#222', fontWeight: '500' }}>Features</p>
                            <p>{item.fields.API_Feature_Description_1}</p>
                            <p>{item.fields.API_Feature_Description_2}</p>
                            <p>{item.fields.API_Feature_Description_3}</p>
                            <p>{item.fields.API_Feature_Description_4}</p>
                            <p>{item.fields.API_Feature_Description_5}</p>
                            <p>{item.fields.API_Feature_Description_6}</p>
                            <p>{item.fields.API_Feature_Description_7}</p>
                            <p>{item.fields.API_Feature_Description_8}</p>
                            <p>{item.fields.API_Feature_Description_9}</p>
                            <p style={{paddingBottom:'0.6rem'}}>{item.fields.API_Feature_Description_10}</p>
                            <a href={item.fields.API_ChildPage_URL.url} style={{marginTop:'1rem'}}><button className="btn" style={{background:'#1283DA', marginTop:'2rem', color:'#fff', margin: '0 auto', borderRadius:'8px'}}>Learn More</button></a>
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
            </Accordion>
        );
    };

    return (
        <div className="item">

            {menuItem.map(renderAccordion)}
            {/*  {
                menuItem.map((item)  => {
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
            }*/}
        </div>
    )
}

export default Menu;
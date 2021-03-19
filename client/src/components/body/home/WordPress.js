import React, { Component } from 'react'
import axios from 'axios';
import { Table } from 'evergreen-ui';
import { Link } from 'react-router-dom';
import { DataContext } from '../reduxreactindex';
import './home.css';
import Articles from '../Articles/Articles';
export class WordPress extends Component {
    
    static contextType = DataContext;

    render() {
        const { posts } = this.context;
        console.log(posts);
        return (
            <div className="table">
                      <Table style={{ backgroundColor: '#fff',marginBottom:'2rem' }}>
                             <Table.Head style={{ backgroundColor: '#F6F9FC', display: 'flex', justifyContent: 'center', alignItems: 'center', textAlign: 'center', padding: '1.3rem', color: '#00BFA5', fontSize:'14px' }}>
                                 Latest insights and analysis
                             </Table.Head>
                        {posts.map(post => (
                             <Table.Body key={post.id}>
                             <Link to={`/blog/${post.id}`}>
                            <Table.Row  height="auto">
                                <Table.TextCell flexBasis={140} flexShrink={0} flexGrow={0} style={{margin:'0.2rem'}} >
                                <img src={post.featured_images} style={{width:'5rem', height:'5rem',border:'none'}}/>
                                </Table.TextCell>
                            
                                <Table.TextCell flexBasis={660} flexShrink={0} flexGrow={0} style={{padding:'1rem', paddingLeft:'0rem'}}>
                                <span style={{ color: '#66788A', fontSize: '0.7em', paddingTop: '1rem' }}>{post.date}</span><br />
                                    <span style={{ color: '#234361', cursor: 'pointer', fontWeight: '400', fontSize:'1.2em'}}>{post.title.rendered}</span><br />
                                    <span style={{ color: '#66788A', fontSize: '0.7em' }}>TransformX</span>
                                </Table.TextCell>
                            </Table.Row>
                            </Link>
                        </Table.Body>
                        ))}
                </Table>
            </div >
        )
    }
}
export default WordPress
import React, { Component } from 'react'
import axios from 'axios';
import { Table } from 'evergreen-ui';
import { Link } from 'react-router-dom';
import './home.css';
export class WordPress extends Component {
    state = {
        posts: [],
        imgUrls:[],
        isLoaded: false
    }
    componentDidMount() {
        axios.get('https://www.transformx.io/wp-json/wp/v2/posts?categories=135&categories=54&categories=155')
            .then(res => this.setState({
                posts: res.data,
                isLoaded: true
            }))
            .catch(err => console.log(err))
        axios.get('https://www.transformx.io/wp-json/wp/v2/media?parent=15434')
            .then(res => this.setState({
                imgUrls: res.data,
                isLoaded: true
            }))
            .catch(err => console.log(err))
    }
    render() {
        const { posts, isLoaded, imgUrls } = this.state;
        console.log(this.state);
        return (
            <div className="table">
                <Table style={{ backgroundColor: '#fff',marginBottom:'2rem' }}>
                    <Table.Head style={{ backgroundColor: '#F6F9FC', display: 'flex', justifyContent: 'center', alignItems: 'center', textAlign: 'center', padding: '1.3rem', color: '#00BFA5', fontSize:'14px' }}>
                        Latest insights and analysis
                    </Table.Head>
                    <Table.Body>
                        {posts.map(post => (
                            <Table.Row key={post.id} height="auto">
                                <Table.TextCell flexBasis={160} flexShrink={0} flexGrow={0} style={{margin:'0.2rem'}} >
                                <img src={imgUrls[0].source_url} style={{width:'6rem', height:'6rem'}}/>
                                </Table.TextCell>
                            
                                <Table.TextCell flexBasis={660} flexShrink={0} flexGrow={0} style={{padding:'1rem', paddingLeft:'0rem'}}>
                                <span style={{ color: '#66788A', fontSize: '0.7rem', paddingTop: '1rem' }}>{post.date}</span><br />
                                    <span style={{ color: '#234361', cursor: 'pointer', fontWeight: '400'}}>{post.title.rendered}</span><br />
                                    <span style={{ color: '#66788A', fontSize: '0.7rem' }}>TransformX</span>
                                </Table.TextCell>
                            </Table.Row>
                        ))}
                    </Table.Body>
                </Table>
            </div >
        )
    }
}
export default WordPress
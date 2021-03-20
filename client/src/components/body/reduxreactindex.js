import React, { Component } from 'react'
import axios from "axios";
 
export const DataContext = React.createContext();

export class DataProvider extends Component {

    state = {
        vendors: [],
        apis: [],
        usecases: [],
        successstories: [],
        posts:[]
    };

    //Fetching data from API and updating cart values according to the user selection
    componentDidMount() {
        fetch('/api/vendors')
            .then((response) => response.json())
            .then(vendorsList => {
                this.setState({ vendors: vendorsList });
            });
            axios.get('http://enterpriseinnovation.org/wp-json/wp/v2/posts?_embed')
            .then(res => this.setState({
                posts: res.data,
                isLoaded: true
            }))
            .catch(err => console.log(err))
        fetch('/api/apis')
            .then((response) => response.json())
            .then(apisList => {
                this.setState({ apis: apisList });
            });
        fetch('/api/usecases')
            .then((response) => response.json())
            .then(usecasesList => {
                this.setState({ usecases: usecasesList });
            });
        fetch('/api/successstories')
            .then((response) => response.json())
            .then(successstoriesList => {
                this.setState({ successstories: successstoriesList });
            });
    }


    render() {
        const { vendors, apis, usecases, successstories, posts } = this.state;
        return (
            //Passing values as props to the consuming components
            <DataContext.Provider
                value={{ vendors, apis, usecases, successstories, posts }}>
                {this.props.children}
            </DataContext.Provider>
        )
    }
}
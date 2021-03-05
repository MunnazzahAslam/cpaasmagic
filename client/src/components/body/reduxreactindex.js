import React, { Component } from 'react'

export const DataContext = React.createContext();

export class DataProvider extends Component {

    state = {
        vendors: [],
        apis: [],
        usecases: [],
        successstories: []
    };

    //Fetching data from API and updating cart values according to the user selection
    componentDidMount() {
        fetch('/api/vendors')
            .then((response) => response.json())
            .then(vendorsList => {
                this.setState({ vendors: vendorsList });
            });
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
        const { vendors, apis, usecases, successstories } = this.state;
        return (
            //Passing values as props to the consuming components
            <DataContext.Provider
                value={{ vendors, apis, usecases, successstories }}>
                {this.props.children}
            </DataContext.Provider>
        )
    }
}
import React, { useState, useEffect } from 'react'
import items from './allData';
import Menu from './Menu';
import Button from './Button';
import Axios from 'axios';

const allCategories = ['All', ...new Set(items.map(item => item.fields["API Category"]))];

function App() {
    const [menuItem, setMenuItem] = useState(items);
    const [buttons, setButtons] = useState(allCategories);
    const [api,setApi] = useState(null);

    useEffect(() => {
        Axios.get("https://api.airtable.com/v0/appDrjzV9YZk6MRQA/cpaas%20APIs?api_key=keyIRsjrVlk0Wnz9b").then(
            response => {
                setApi(response.data);
                console.log(response.data);
            }
        );
    }, [setApi]);

    //Filter Function
    const filter = (button) => {

        if (button === 'All') {
            setMenuItem(items);
            return;
        }

        const filteredData = items.filter(item => item.fields["API Category"] === button);
        setMenuItem(filteredData)
    }


    return (
        <div className="App">
            <Button button={buttons} filter={filter} />
            {menuItem && <Menu menuItem={menuItem} />}
        </div>
    );
}

export default App;
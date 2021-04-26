import React, { useState, useEffect } from 'react'
import items from './allData';
import Menu from './Menu';
import Button from './Button';

const allCategories = ['All', ...new Set(items.map(item => item.fields.API_Category))];

console.log(allCategories);

function App() {
    const [menuItem, setMenuItem] = useState(items);
    const [buttons, setButtons] = useState(allCategories);

    //Filter Function
    const filter = (button) => {

        if (button === 'All') {
            setMenuItem(items);
            return;
        }

        const filteredData = items.filter(item => item.fields.API_Category === button);
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
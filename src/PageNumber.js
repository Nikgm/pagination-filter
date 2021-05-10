import React from 'react';

function PageNumber() {
    return (
        <div id="pg-number-container">
            <p id="pg-one" className="page-number" style={{"backgroundColor": "#4A5568", "color":"white"}}>1</p>
            <p id="pg-two" className="page-number">2</p>
        </div>
    )
}

export default PageNumber
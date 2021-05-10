import React from 'react-dom'

function Main(props){
    return(
        <div id='user-content'>
            <img src={props.imgUrl} alt=""/>
            <h3>{props.name}</h3>
            <p style={{display: props.phone ? "block" : "none"}}>{props.phone}</p>
            <p style={{display: props.email ? "block" : "none"}}>{props.email}</p>
        </div>
    )
}

export default Main;
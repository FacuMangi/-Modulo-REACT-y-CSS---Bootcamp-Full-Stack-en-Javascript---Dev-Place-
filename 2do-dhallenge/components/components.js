import React from 'react'

// class AutoClase extends React.Component {
//     render() {
//         return <h2>Soy un auto.asdsa</h2>
//     }
// }


function Auto(props) {
    return <h2>Soy un auto {props.color}.</h2>
}

function Garage() {
    return (
        <>
        <h1>Quien sos vos?</h1>
        <Auto color="rojo"/>
        </>
    );
}

export default Garage;
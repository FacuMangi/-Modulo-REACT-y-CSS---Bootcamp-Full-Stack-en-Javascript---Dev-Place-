import React from 'react'

function ElementElement() {
    return <h3>Nieto</h3>
}

function Element() {
    return <h2>Hijo</h2>
}

const Footer = (props) => {
    return (
        <>
            <div className='container' color=''>
                <h1>Padre</h1>
            </div>
            <div className='container'>
                <Element />
            </div>
            <div className='container'>
                <ElementElement />
            </div>
        </>
    )
}

export default Footer

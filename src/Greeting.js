import React from 'react'

const Greeting = (props) => {
    return(
        <>
        <h1>this is a component. would you look at that?</h1>
        <h2>Well Shi-</h2>
        <h3>smaller text</h3>
        <h4> ello! {props.name}</h4>

        <h4>did it work? {props.favNumber}</h4>
        <h4> also? {props.favHusband}</h4>

        </>
    )
}

export default Greeting
import React from "react"

function Joke(props){
    return(
        <div>
        <h3 style= {{display : props.question ? "block":"none"}}>{props.question}</h3>
        <h3 style={{color: !props.question ? "#888888" : "red"}}>{props.punchLine}</h3>
        </div>
    )
} 

export default  Joke

//style= {{display : props.question ? "block":"none"}} -- not mandatory
//style={{color: !props.question && "#888888"}}-- not mandatory
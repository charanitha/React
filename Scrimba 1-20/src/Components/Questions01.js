import React from "react"

function Questions01(props){
    return(
        <div>
            <h3>Questions : {props.question} </h3>
            <h3>Answer : {props.answer} </h3>
            <hr/>
        </div>
    )
}

export default Questions01
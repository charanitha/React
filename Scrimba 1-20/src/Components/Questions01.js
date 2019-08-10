import React from "react"

function Questions01(props){
    return(
        <div>
            <h3 style = {{display : props.question ? "block": "none"}}>Questions : {props.question} </h3>
            {/* <h3 style = {{display : !props.question && "none"}}>Questions : {props.question} </h3> */}
            <h3 style = {{color : !props.question ? "red":"blue"}}>Answer : {props.answer} </h3>
            <hr/>
        </div>
    )
}

export default Questions01
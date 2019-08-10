import React from "react"


function Name(){
    const fname = "kumar"
    const lname = "anuj"
    const date = new Date()
    const hours = date.getHours()
    let timeOfDay

    if (hours < 12){
        timeOfDay = "morning"
    } else if (hours >=12 && hours < 17){
        timeOfDay = "evening"
    }else{
        timeOfDay = "night"
    }
    const style={
        color: "blue", 
        backgroundColor:"yellow"
    }

    return(
        <div>
        {/* <p style={{color: "blue", backgroundColor:"yellow"}}>Hello {`${fname} ${lname} ${timeOfDay}`}! </p> */}
        <p style={style}>Hello {`${fname} ${lname} ${timeOfDay}`}! </p>   

        </div>   
    )


}

export default Name
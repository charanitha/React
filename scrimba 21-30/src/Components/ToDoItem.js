import React from "react"

function todoitem(props) {
    return (
        <div className="todo-item">
            <input type="checkbox" checked={props.xxx.completed}/>
            <p>{props.xxx.text}</p>
        </div>
    )
}
export default todoitem
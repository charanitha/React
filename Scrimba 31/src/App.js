import React from "react"
import TodoItem from "./Components/TodoItem"
import anyThing from "./Components/todosData"

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            data01: anyThing
        }
    }
    
    render() {
        const data02 = this.state.data01.map(item => <TodoItem key={item.id} item={item}/>)
        
        return (
            <div className="todo-list">
                {data02}
            </div>
        )    
    }
}

export default App
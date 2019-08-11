import React from 'react';
// import logo from './logo.svg';
//import './App.css';
// import Joke from "./Components/Joke"
// import JokesData from "./Components/JokesData"
// import Product from "./Components/Products"
// import productsData from "./Components/vschoolProducts"
import ToDoItem from "./Components/ToDoItem"
import aaa from "./Components/ToDoData"




function handleClick() {
    console.log("I was clicked")
}

// https://reactjs.org/docs/events.html#supported-events

function App() {
    return (
        <div>
            <img onMouseOver={() => console.log("Hovered!")} src="https://www.fillmurray.com/200/100"/>
            <br />
            <br />
            <button onClick={handleClick}>Click me</button>
        </div>
    )
}

export default App












// class App extends React.Component{
//   constructor(){
//     super()
//     this.state = {
//       data01 : aaa
//     }
//   }
//   render(){
//     const abc = this.state.data01.map(xxx => <ToDoItem key={xxx.text} xxx={xxx}/>)
    
//     return (
//         <div className="todo-list">
//             {abc}
//         </div>
//         )
//   }
   
//     }
// export default App



// class App extends React.Component{
//   constructor(){
//     super()
//     this.state = {
//       logStatus : "true"
//     }
//   }
//   render(){
//     let status
//     if (this.state.logStatus === "true"){
//       status = "in"
//     }
//     else{
//       status = "out"
//     }
//     return(
//       <div>
//         <h3>You are logged {status}</h3>
//       </div>
//     )
//   }
// }
// export default App



// class App extends React.Component{
//   constructor(){
//     super()
//     this.state = {
//       name : "anuj",
//       age : 25
//     }
//   }
//   render(){
//     return(
//       <div>
//         <h1>{this.state.name}</h1>
//         <h3>{this.state.age}</h3>
//       </div>
//     )
//   }
// }
// export default App


// class App extends React.Component{
//   constructor(){
//     super()
//     this.state = {
//       answer : "yes"
//     }
//   }
//   render(){
//     return(
//     <div> 
//       <h3> Is this true ? {this.state.answer}</h3>
//     </div>
//     )
//   }
// }
// export default App

// function App(){
//   return(
//     <div>
//       <h3>hello</h3>
//       </div>
//   )
// }
// export default App

// class App extends React.Component{
//   render(){
//     return(
//       <div>
//         <h3>Hello Anuj</h3>
//         </div>
//     )
//   }
// }
// export default App



// function App() {
//     const abc = aaa.map(xxx => <ToDoItem key={xxx.id} xxx={xxx}/>)
    
//     return (
//         <div className="todo-list">
//             {abc}
//         </div>
//     )
// }
// export default App

// function App(){
//   const items = productsData.map(item => 
//     <Product key={item.id} product={item}/>)
//     return (
//       <div>
//         {items}
//       </div>
//     )
// }
// export default App

// function App(){
//   const jokesComponents = JokesData.map(abc => 
//     <Joke key={abc.id} question = {abc.question} 
//       punchLine = {abc.punchLine}/>)
//   return(
//     <div>
//       <h3>{jokesComponents}</h3>
//     </div>
//   )
// }
// export default App;

// function App() {
//   const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
//   const doubled = nums.map(function(num) {
//       return num * 2
//   })
//   console.log(doubled)
  // 1 4 6 8 10 12 14 16 18 20
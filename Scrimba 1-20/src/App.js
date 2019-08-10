import React, { Component } from 'react';

import Footer from './Components/Footer';
import MyInfo from './Components/MyInfo';
import Header from './Components/Header';
import Checkbox from './Components/Checkbox';
import Name from './Components/Name'
import ToDoList from './Components/ToDoItem';
import ContactCard01 from './Components/ContactCard01'
import Questions from './Components/Questions';


function App(){
  return(
    <div>
      <Header />
      <MyInfo />
      <Checkbox />
      <Name />
      <ToDoList />
      <Footer />
      <ContactCard01 />
      <Questions />
    </div>
  )
}

export default App;

import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import ToDoList from './ToDoList';

type messageType =  {
  title: string;
  description: string;
}

function App() {

  //[variable, function to change the variable]
  //return [variable,func]
  let [message,setMessage] = useState<messageType>({title : "Hello Wortld", description : "This is a description"});

  function changeMessage() {
    setMessage({ title:"Hello Universe".toUpperCase(), description : "This is a description".toUpperCase() });
    console.log(message);
  }

  return (
    <div>
       {/* <h1>{message.title}</h1>
      <small>{message.description}</small>
       <button onClick={changeMessage}>Change Message</button> */}
       <ToDoList/>
    </div>
  );
}

export default App;

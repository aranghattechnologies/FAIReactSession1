import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import MessageBox from './MessageBox';
import MessageBox2 from './MessageBox2';
import UserList from './Userlist';

function App() {

  let [title,setTitle] = useState("Message Box Title");
  let [showMessageBox, setShowMessageBox] = useState(true);
  return (
    <div>

      {/* { showMessageBox && <MessageBox2 title={title} /> }
      <button onClick={() => { setTitle(title.toUpperCase())}}>Change Title</button>
      <button onClick={() => { setShowMessageBox(!showMessageBox)}}>Toggle Message Box</button> */}
      <UserList />
    </div>
  );
}

export default App;

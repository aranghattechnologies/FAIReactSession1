import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { validateEmailAddress } from './BusinessRules';
import { useDomainValidator } from './hooks/validator';
import Message from './Message';
import Article from './Article';

function App() {

  //let {isEmailValid,setEmail} = useDomainValidator();
  let [message, setMessage] = useState("Hello World");
  let [total, setTotal] = useState(0);
  

  return (
    <div className="App">
        <Article  title="My Article">
          <div>
          Lorem ipsum, dolor 
            sit amet consectetur adipisicing elit. Distinctio laboriosam, corporis necessitatibus blanditiis explicabo a deleniti incidunt molestiae nam impedit enim, saepe illo sunt, ducimus dignissimos possimus! Maxime, rem fugiat!
          </div>
        </Article>
    </div>
  );
}

export default App;

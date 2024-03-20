import React from 'react';
import logo from './logo.svg';
import './App.css';
import Article from './Article';
import { useState } from 'react';
import { ThemeContext, LanguageContext } from './ThemeContext';


function App() {

  const [theme, setTheme] = useState('light');

  function toggleTheme() {
    if(window.confirm("Are you sure you want to change the theme?"))
      setTheme(theme === 'light' ? 'dark' : 'light');
  }

  return (
    <div>
      <LanguageContext.Provider value='en'>
        <ThemeContext.Provider value={theme}>
          <div className={"modal " + (theme == "light" ? 'show' : 'hide')} >
            <div className="modal-content">
               <Article title='Election Dates Announced' 
               content='Dates for general elections are announced' />
            </div>
          </div>
          <button type='button' onClick={toggleTheme}>
            {theme === 'light' ? 'Dark' : 'Light'}
          </button>
          <Article title='Football Worldcup' 
                  content='India Qualifies' 
                />
        
          <Article title='Election Dates Announced' 
                  content='Dates for general elections are announced' 
                />
        </ThemeContext.Provider>
        <ThemeContext.Provider value={theme === "light" ? "dark" : "light"}>
        <Article title='Election Dates Announced' 
                  content='Dates for general elections are announced' 
                />
        </ThemeContext.Provider>
      </LanguageContext.Provider>
    </div>
  );
}

export default App;

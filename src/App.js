import React from 'react';
import styled from '@emotion/styled';
import Toggle from 'react-toggle';
import "react-toggle/style.css";
import { useTheme } from './ThemeContext';
import { IoMdMoon, IoMdSunny } from 'react-icons/io';
import './App.css';


const AppWrapper = styled('div')`
  background: ${props => props.theme.background};
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  h1 {
    color: ${props => props.theme.body};
    margin: 0;
    font-size: 40px;
    padding-top: 20px;
    text-align: center;
  }
  h2 {
    color: ${props => props.theme.body};
    margin: 0;
    font-size: 20px;
    text-align: center;
  }
  a {
    color: ${props => props.theme.body};
  }
`;


function App() {
  const themeState = useTheme();
  return (
    <AppWrapper>
        <h1> {'Dark Mode Application'} </h1>
        <div className="App--text-container">
          <h2>
            {"My name is Victor, i'm a software engineer based on Buenos Aires 🇦🇷👨🏽‍💻"}
          </h2>
          <h2>
            {'This is a little project to handle dark mode UI using react hooks and global context'}
          </h2>
          <h2>
            {'Hope you like it! 😊'}
          </h2>
          <div className="App--link-container">
            <a href="https://twitter.com/vicchirino" target="_blank" rel="noopener noreferrer"> {'Twitter'} </a>
            <a href="https://github.com/vicchirino" target="_blank" rel="noopener noreferrer"> {'Github'} </a>
          </div>
        </div>
        <Toggle
          className='App--header-switch'
          onChange={() => themeState.toggle()}
          defaultChecked={!!themeState.dark}
          icons={{checked: <IoMdMoon />, unchecked: <IoMdSunny />}}>
        </Toggle>
    </AppWrapper>
  );
}

export default App;

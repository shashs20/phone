import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import ChatBot from 'react-simple-chatbot';
import { ThemeProvider } from 'styled-components';
import "./App.css";

const steps = [
  {
    id: 'Hello',
    message: 'Hello, welcome to StarMobile!',
    trigger: 'Ask Name',
  }, 
  {
    id: 'Ask Name',
    message: 'What is your name?',
    trigger: 'Wait'
  }, 
  {
    id: 'Wait',
    user: true,
    trigger: 'Name'
  }, 
  {
    id: 'Name',
    message: " hi {previousValue}, which brand do you want to buy?",
    trigger: 'brands'
  },
  {
    id:'brands',
    options: [
      { value: 'Apple', label: 'Apple', trigger: 'Apple' },
      { value: 'Samsung', label: 'Samsung', trigger: 'Samsung' }, 
    ]
  },
  {
    id:'Apple',
    message:'There are 4 options',
    end: true
  },
  {
    id:'Samsung',
    message:'There are 3 options',
    end: true
  },
];

// Creating our own theme
const theme = {
  background: '#C9FF8F',
  headerBgColor: '#197B22',
  headerFontSize: '20px',
  botBubbleColor: '#0F3789',
  headerFontColor: 'white',
  botFontColor: 'white',
  userBubbleColor: '#FF5733',
  userFontColor: 'white',
};

function index() {
  return (
      <div className="index">
          <ThemeProvider theme={theme}>
              <ChatBot steps={steps} />
          </ThemeProvider>
      </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
  <App />
  <div className="bot">
    <ChatBot steps={steps} />
  </div>
</React.StrictMode>,

);
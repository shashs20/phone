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
    message:'Screen Size?',
    trigger: 'size'
  },
  {
    id:'size',
    options: [
      { value: '6.1 inches', label: '6.1 inches', trigger: '6.1 inches' },
      { value: '6.7 inches', label: '6.7 inches', trigger: '6.7 inches' },
    ]
  },
  {
    id:'6.1 inches',
    message:'Choice between iPhone 14 and iPhone 14 Pro',
    end: true
  },
  {
    id:'6.7 inches',
    message:'Choice between iPhone 14 Plus and iPhone 14 Pro Max',
    end: true
  },
  {
    id:'Samsung',
    message:'Screen Size?',
    trigger: 'screen'
  },
  {
    id:'screen',
    options: [
      { value: '6.1 inches', label: '6.1 inches', trigger: '6.1 inches' },
      { value: '6.6 inches', label: '6.6 inches', trigger: '6.6 inches' },
      { value: '6.8 inches', label: '6.8 inches', trigger: '6.8 inches' },
    ]
  },
  {
    id:'6.1 inches',
    message:'Samsung Galaxy S23 has the smallest screen size',
    end: true
  },
  {
    id:'6.6 inches',
    message:'Samsung Galaxy S23+ has the second biggest screen size',
    end: true
  },
  {
    id:'6.8 inches',
    message:'Samsung Galaxy S23+ Ultra has the biggest screen size',
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

export default index;
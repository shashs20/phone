import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import ChatBot from 'react-simple-chatbot';
import { ThemeProvider } from 'styled-components';
import "./App.css";

const steps = [
  {
      id: '0',
      message: 'Hi, welcome to StarMobile!',

      // This calls the next id
      // i.e. id 1 in this case
      trigger: '1',
  }, {
      id: '1',

      // This message appears in
      // the bot chat bubble
      message: 'Please write your username',
      trigger: '2'
  }, {
      id: '2',

      // Here we want the user
      // to enter input
      user: true,
      trigger: '3',
  }, {
      id: '3',
      message: " hi {previousValue}, how can I help you?",
      trigger: 4
  }, {
      id: '4',
      options: [
           
          // When we need to show a number of
          // options to choose we create alist
          // like this
          { value: 1, label: 'View Courses' },
          { value: 2, label: 'Read Articles' },

      ],
      end: true
  }
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
      <div className="chatbot">
          <ThemeProvider theme={theme}>
              <ChatBot
                  headerTitle="MobileBot"
                  steps={steps}
              />
          </ThemeProvider>
      </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
  <App />
  <div>
    <ChatBot steps={steps} />
  </div>
</React.StrictMode>,

);
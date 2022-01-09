import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux'
import { store } from './redux/store'
import { BrowserRouter } from "react-router-dom";
import { FunctionContextProvider } from './context/functionContext'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter >
      <FunctionContextProvider>
    <Provider store={store}>
         <App />
      </Provider>
      </FunctionContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

import React from 'react';
import logo from './logo.svg';
import './App.css';
import Form from './Component/Add/Form';
import {Provider} from "react-redux"
import store from "./Strore"

function App() {
  return (

    <Provider store={store}>
      <div className="App">
      <Form />
    </div>
    </Provider>
    
  );
}

export default App;

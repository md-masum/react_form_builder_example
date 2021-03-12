import React from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import 'react-form-builder2/dist/app.css';
import FormBuilder from './form-builder';

function App() {
  return (
    <div className="App">
      <h1>hello world</h1>
      <FormBuilder/>
    </div>
  );
}

export default App;
import React from 'react';
import logo from './logo.svg';
import './App.css';
// import Addsubtract from './components/Mathoperation/MathOperation'
import EnhancedNumberCounter from './components/HOC/NumberCounter'

class App extends React.Component {
  render(){
  return (
    <div className="App">
  
      <EnhancedNumberCounter />
    </div>
  );
    }
}

export default App;



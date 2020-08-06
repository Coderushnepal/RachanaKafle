import React from 'react';

import './App.css';
import {EnhancedUser} from './USER'

function App() {
  const names=["Kranti","Riwaj","pragya","Aashish","Shikha","Roshani"]
  return (
    <div className="App">
      <div className="userList">
        <h1>Name of Users</h1>
      {names.map((name,index) => 
        <EnhancedUser key={name+index} name={name} />
      )}
      </div>  
    </div>
  );
}

export default App;

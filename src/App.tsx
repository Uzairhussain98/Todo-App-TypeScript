import React, { useState } from 'react';
import './App.css';
import InputField from './components/InputField';

function App() {

  const [todo, setTodo] = useState('')

  return (
    <div className="App">
      <h1 className='heading'>Todo App TS</h1>
      <InputField todo={todo} setTodo={setTodo}/>
    </div>
  );
}

export default App;

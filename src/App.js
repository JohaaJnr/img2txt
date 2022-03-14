import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Form from './components/Form';
function App() {
  return (
    <div className="App">
        <Navbar />
        <div className='container mt-4 py-4 px-4 mb-4'>
            <Form />
        </div>
        
    </div>
  );
}

export default App;

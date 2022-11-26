import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Frontend from './routes/Frontend';
import Backend from './routes/Backend';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<Frontend />} />
          <Route path='/backend' element={<Backend />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

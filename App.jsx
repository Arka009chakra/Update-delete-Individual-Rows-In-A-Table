import React from 'react';
import Test from './Test';
import Update from './Update'
import Delete from './Delete'
import {Routes,Route} from 'react-router-dom'
function App() {
  return (
    <Routes>
      <Route exact path='/' element = {<Test/>} />
      <Route exact path='/update/:cemail/' element={<Update/>}/>
      <Route exact path='/delete/:cemail' element={<Delete/>}/>
    </Routes>
  );
}

export default App;


import './App.css';

import React, { useState } from 'react'
import Navbar from './newComponents/Navbar';
import News from './newComponents/News';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

  const App=()=>  {
   const pageSize=5

   const[progress,setProgress]=useState(0);
  

  
   
    return (
      <div>
        <Router>
          <Navbar />

          <LoadingBar
        color='#f11946'
        progress={progress}
        
      />

          {/* <Routes>
          <Route path="/"><News setProgress={setProgress}  pageSize={pageSize} country="in" category="general" /></Route>
          <Route path="/bussiness"><News setProgress={setProgress}  pageSize={pageSize} country="in" category="bussiness" /></Route>
          <Route path="/entertainment"><News setProgress={setProgress}  pageSize={pageSize} country="in" category="entertainment" /></Route> 
          <Route path="/health"><News setProgress={setProgress}  pageSize={pageSize} country="in" category="health" /></Route>
          <Route path="/science"><News setProgress={setProgress}  pageSize={pageSize} country="in" category="science" /></Route>
          <Route path="/technology"><News setProgress={setProgress}  pageSize={pageSize} country="in" category="technology" /></Route>
          <Route path="/sports"><News setProgress={setProgress}  pageSize={pageSize} country="in" category="sports" /></Route>
          </Routes>
           */}
          <Routes>
          <Route path='/' element={<News setProgress={setProgress}  key='general' pageSize={pageSize} country='in' category='general' />}></Route> 
          <Route path='/business' element={<News setProgress={setProgress}  key='business' pageSize={pageSize} country='in' category='business' />}></Route>
          <Route path='/entertainment' element={<News setProgress={setProgress}  key='entertainment' pageSize={pageSize} country='in' category='entertainment' />}></Route>
          <Route path='/health' element={<News setProgress={setProgress}  key='health' pageSize={pageSize} country='in' category='health' />}></Route>
          <Route path='/science' element={<News setProgress={setProgress}  key='science' pageSize={pageSize} country='in' category='science' />}></Route>
          <Route path='/sports' element={<News setProgress={setProgress}  key='sports' pageSize={pageSize} country='in' category='sports' />}></Route>
          <Route path='/technology' element={<News setProgress={setProgress}  key='technology' pageSize={pageSize} country='in' category='technology' />}></Route>

          </Routes>
        </Router>
      </div>
    )
  
}
export default App

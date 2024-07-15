import React, { useRef } from 'react'
import './App.css'
import DashBoard from './component/DashBoard';
import MainPage from './component/MainPage';

function App() {
   return (
      <div style={{width:'100%',}} className='maxwidthdiv'> 
      <div className='grid-container'>
         <div className='dashBoard'  >
            <DashBoard />
         </div>

         <div className='Mainpagecss'  >
            <MainPage />

         </div>
      </div>
      </div>


   )
}

export default App

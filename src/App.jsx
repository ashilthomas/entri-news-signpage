import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'
import Hero from './Components/Hero'
import Articles from './Components/Articles'

function App() {
  return (
    <div className='container'>
       <Hero/>
       <Articles/>
    </div>
  )
}

export default App

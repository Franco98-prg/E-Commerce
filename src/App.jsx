import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './pages/Home'
import Header from './components/layout/Header'


function App() {

  return (
    <>

      <Header />

        <div>

          {/* <Aside /> */}
          <Home />
        
        </div>

      {/* // <Footer /> */}

    </>
  )
}


export default App

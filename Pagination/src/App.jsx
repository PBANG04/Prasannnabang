import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Pagination from './Pagination'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import About from './About'

function App() {
  
  return (
    <>
       <BrowserRouter>
                <Routes>
                    <Route
                        exact
                        path="/"
                        element={<Pagination />}
                    />
                    <Route
                        exact
                        path="/About"
                        element={<About />}
                    />
                </Routes>
            </BrowserRouter>
    </>
  )
}

export default App

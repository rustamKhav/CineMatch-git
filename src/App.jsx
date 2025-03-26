
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react'
import StartPage from './Pages/StartPage'
import ChoicePage from './Pages/ChoicePage'
import WinnerPage from './Pages/WinnerPage'
import './index.css'

export default function App() {
  return (
    <>
    <StartPage />
    {/*<ChoicePage />*/}
    {/*<WinnerPage />*/}
    </>
  )
}



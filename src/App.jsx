import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MyHeader from './components/MyHeader'
import ContentContainer from './components/ContentContainer'
import OrizzontalNav from './components/OrizzontalNav'

function App() {

  return (
    <>
      <MyHeader></MyHeader>
      <ContentContainer></ContentContainer>
      <OrizzontalNav></OrizzontalNav>
    </>
  )
}

export default App

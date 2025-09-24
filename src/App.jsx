import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MyHeader from './components/MyHeader'
import ContentContainer from './components/ContentContainer'
import OrizzontalNav from './components/OrizzontalNav'
import VericalNav from './components/VerticalNav'
import MyFooter from './components/MyFooter'

function App() {

  return (
    <>
      <MyHeader></MyHeader>
      <ContentContainer></ContentContainer>
      <OrizzontalNav></OrizzontalNav>
      <VericalNav></VericalNav>
      <MyFooter></MyFooter>
    </>
  )
}

export default App

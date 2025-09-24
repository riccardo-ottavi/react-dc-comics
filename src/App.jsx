import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MyHeader from './components/MyHeader'
import ContentContainer from './components/ContentContainer'

function App() {

  return (
    <>
      <MyHeader></MyHeader>
      <ContentContainer></ContentContainer>
    </>
  )
}

export default App

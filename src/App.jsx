import React from 'react'
import Header from './components/header/Header'
import Rating from './components/rating/Rating'
import Testimonials from './components/testimonials/Testimonials'

function App() {

  return (
    <>
      <div className="flex flex-row justify-between flex-wrap wrapper d:w-wrapper d:mx-auto">
        <Header />
        <Rating />
        <Testimonials />
      </div>
    </>
  )
}

export default App

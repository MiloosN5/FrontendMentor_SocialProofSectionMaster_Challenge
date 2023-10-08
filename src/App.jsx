import React from 'react'
import Header from './components/header/Header'
import Rating from './components/rating/Rating'
import Testimonials from './components/testimonials/Testimonials'

function App() {

  return (
    <main>
      <section className="flex flex-row justify-between flex-wrap wrapper d:w-wrapper d:mx-auto">
        <Header />
        <Rating />
        <Testimonials />
      </section>
    </main>
  )
}

export default App

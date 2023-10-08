import React from 'react'

const Header = () => {
  return (
    <header>
      <div className="flex flex-col text-center d:text-left gap-header d:gap-header--d d:w-header">
        <h1 className="font-bold text-h1 d:text-h1--d leading-h1 d:leading-h1--d tracking-h1 d:tracking-h1--d text-veryDarkMagenta">10,000+ of our users love our products.</h1>
        <p className="text-header__desc leading-header__desc tracking-header__desc d:tracking-header__desc--d text-darkGrayishMagenta">
          We only provide great products combined with excellent customer service. 
          See what our satisfied customers are saying about our services.
        </p>  
      </div>
    </header>
  )
}

export default Header
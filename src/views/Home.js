import React from 'react'
import MyLogo from '../assets/k1.png'
import ReactLogo from '../assets/react.png'
import Card from '../component/Card';

function Home() {
  return (
    <div className='flexColumn'>
      <div className='flex'>
        <img src={MyLogo} alt='My logo' />
        <img src={ReactLogo} alt='React Logo'/>
      </div>
      <Card>
        Welcome to my React Portfolio, this portfolio was created in a day together with the Vue version and it's
         just a proof of concept that i can write both react and vue.
      </Card>
      <Card>Concerning React, i have solid knowledge on Redux, React-hooks, and most popular react-css frameworks (<i>for quick design prototyping</i>). Check my Github for more details</Card>
    </div>
  )
}

export default Home

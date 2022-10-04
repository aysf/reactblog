import React from 'react'

const Home = () => {

  const handleClick = (e) => {
    console.log("helooo", e.target)
  }

  const handleClickWithParam = (name, e) => {
    console.log("helo " + name, e.target)
  }

  return (
    <div className='home'>
        <h2>Homepage</h2>
        <button onClick={handleClick}>Click Me</button>
        <button onClick={(e) => handleClickWithParam("Marioo", e)}>Click Me Again</button>
    </div>
  )
}

export default Home
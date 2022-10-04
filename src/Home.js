import React, { useState } from 'react'

const Home = () => {

//   let name = 'mario';
  const [name, setName] = useState('mario');
  const [age, setAge] = useState(25);

  const handleChange = () => {
    setName('Luigi');
    setAge(33);
  }

  const handleClick = (e) => {
    console.log("helooo", e.target)
  }

  const handleClickWithParam = (name, e) => {
    console.log("helo " + name, e.target)
  }

  return (
    <div className='home'>
        <h2>Homepage</h2>
        <h3>{ name } is { age } years old</h3>
        <button onClick={handleChange}>change me</button>
        <button onClick={handleClick}>Click Me</button>
        <button onClick={(e) => handleClickWithParam("Marioo", e)}>Click Me Again</button>
    </div>
  )
}

export default Home
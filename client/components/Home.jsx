import React, {useState} from 'react'

function Home(props) {
    const [prompt, setPrompt] = useState('')

    const subject = ['Elephant', 'Squirrel', 'Bear', 'Whale', 'Dolly Parton', 'Juggalo', 'Mark Zuckerberg', 'Shark', 'Keanu Reeves', 'Kanye West']
    const verb = ['eating', 'swimming', 'playing', 'dancing', 'prancing', 'kicking', 'fighting', 'rapping', 'laughing', 'coding']
    const object = ['teapot', 'computer', 'guitar', 'book', 'yacht', 'friends', 'tear gas', 'kittens', 'no shoes', 'snakes']

    const randomNumber = (min, max) => {
        return Math.floor(Math.random() * (max - min) + min)
    }

    const promptMe = () => {
        let number1 = randomNumber(0, 10) 
        let number2 = randomNumber(0, 10) 
        let number3 = randomNumber(0, 10) 
        setPrompt(`${subject[number1]} ${verb[number2]} with ${object[number3]}`)
    }

  return (
    <div className="title">
      <h1>SHIBBLES</h1>
      <h3>A product bought to you by The Zuckerberg Sister Wives</h3>
      <p>{prompt}</p>
      <button onClick={() => promptMe(subject, verb, object)}>Prompt me</button>
      <button onClick={props.resetButtonClick}>Reset canvas</button>
      <p></p>
    </div>
  )
}

export default Home

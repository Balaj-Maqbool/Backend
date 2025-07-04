import { useState } from 'react'
import './App.css'
import axios from 'axios'
function App() {
  const [jokes, setJokes] = useState([])

  axios.get('/api/jokes')
  .then((res)=>{
    setJokes(res.data)
  })
  .catch((err)=>{
    console.log(err)
  })

  return (
    <>
    <h1>Welcome to my react app</h1>
    <h3>THE JOKES: {jokes.length}</h3>
    {
      jokes.map((joke)=>{
        return <div key={joke.id}>
          <h3>{joke.setup}</h3>
          <details>
            <summary>Answer</summary>
            <h4>{joke.punchline}</h4>
          </details>
          

        </div>
      })
    }
    </>
  )
}

export default App

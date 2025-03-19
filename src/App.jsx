import { useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1>hello world</h1>
    <div>
      <form action="">
        <input type="text" placeholder='inserisci nome' required/>
        <input type="text" placeholder='inserisci username' required/>
        <input type="password" placeholder='inserisci password'required/>
       <select name="" id="">
       <option selected>scegli specializzazione</option>
       <option>Full Stack</option>
       <option>Frontend</option>
       <option>Backend</option>
       </select>
        <input type="number" placeholder='inserisci anni di esperienza'required/>
        <input type="textArea" placeholder='inserisci breve descrizione'required/>
      </form>
    </div>
    </>
  )
}

export default App

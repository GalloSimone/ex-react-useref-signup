import { useState } from 'react'

import './App.css'

function App() {
  const [name, setName] = useState("")
  const [userName, setUserName] = useState("")
  const [password, setPassword] = useState("")
  const [specializzazione, setSpecializzazione] = useState("")
  const [year, setYear] = useState("")
  const [description, setDescription] = useState("")
  const [error, setError] = useState("")

  function handleSubmit(e){
    e.preventDefault();
    setError("");

    // Validazione dei campi
    if (!name || !userName || !password || !specializzazione || !year || !description) {
      setError("Tutti i campi sono obbligatori!");
      return;
    }

    // Validazione degli anni di esperienza
    if (year <= 0 || isNaN(year)) {
      setError("Gli anni di esperienza devono essere maggiori di 0 e un numero valido.");
      return;
    }

    // Se tutto è valido, inviamo il form
    console.log({name, userName, password, specializzazione, year, description});
  }

  return (
    <>
      <h1>hello world</h1>
      <div>
        <form onSubmit={handleSubmit}>
          <input 
            type="text" 
            placeholder="inserisci nome" 
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <input 
            type="text" 
            placeholder="inserisci username" 
            required
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />

          <input 
            type="password" 
            placeholder="inserisci password" 
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <select
            value={specializzazione}
            onChange={(e) => setSpecializzazione(e.target.value)}
            required
          >
            <option value="">Scegli specializzazione</option>
            <option value="Full Stack">Full Stack</option>
            <option value="Frontend">Frontend</option>
            <option value="Backend">Backend</option>
          </select>

          <input
            type="number"
            placeholder="inserisci anni di esperienza"
            required
            value={year}
            onChange={(e) => setYear(e.target.value ? Number(e.target.value) : "")}
          />

          <textarea
            placeholder="inserisci breve descrizione"
            required
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <button type="submit">Invia</button>
        </form>

        {error && <p style={{ color: "red" }}>{error}</p>}
      </div>
    </>
  );
}

export default App;
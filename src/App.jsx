import { useState } from 'react';

import './App.css';

function App() {
  const [name, setName] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [specializzazione, setSpecializzazione] = useState("");
  const [year, setYear] = useState("");
  const [description, setDescription] = useState("");
  const [userNameError, setUserNameError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [descriptionError, setDescriptionError] = useState("");

  // Funzioni di validazione
  function validateUsername(username) {
    const regex = /^[a-zA-Z0-9]{6,}$/;
    return regex.test(username);
  }

  function validatePassword(password) {
    const regex = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>]).{8,}$/;
    return regex.test(password);
  }

  function validateDescription(description) {
    const trimmed = description.trim();
    return trimmed.length >= 20 && trimmed.length <= 1000;
  }

  // Gestione dei cambiamenti e validazioni in tempo reale
  const handleUserNameChange = (e) => {
    const value = e.target.value;
    setUserName(value);
    setUserNameError(validateUsername(value) ? "" : "Username deve essere alfanumerico e di almeno 6 caratteri");
  };

  const handlePasswordChange = (e) => {
    const value = e.target.value;
    setPassword(value);
    setPasswordError(validatePassword(value) ? "" : "Password deve essere lunga almeno 8 caratteri e contenere una lettera, un numero e un simbolo");
  };

  const handleDescriptionChange = (e) => {
    const value = e.target.value;
    setDescription(value);
    setDescriptionError(validateDescription(value) ? "" : "Descrizione deve essere lunga tra 100 e 1000 caratteri");
  };

  function handleSubmit(e) {
    e.preventDefault();
    console.log({ name, userName, password, specializzazione, year, description });
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
            value={userName}
            onChange={handleUserNameChange}
          />
          {userNameError && <p style={{ color: "red" }}>{userNameError}</p>}

          <input
            type="password"
            placeholder="inserisci password"
            value={password}
            onChange={handlePasswordChange}
          />
          {passwordError && <p style={{ color: "red" }}>{passwordError}</p>}

          <select
            value={specializzazione}
            onChange={(e) => setSpecializzazione(e.target.value)}
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
            onChange={(e) => setYear(e.target.value)}
          />

          <textarea
            placeholder="inserisci breve descrizione"
            value={description}
            onChange={handleDescriptionChange}
          />
          {descriptionError && <p style={{ color: "red" }}>{descriptionError}</p>}

          <button type="submit">invia</button>
        </form>
      </div>
    </>
  );
}

export default App;
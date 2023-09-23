import React, { useState } from 'react';
import Logo from './assets/logo.png';
import Login from './pages/Login';

function App() {
  const [count, setCount] = useState(0);
  const [loggedIn, setLoggedIn] = useState(false);

  
  const handleLogin = () => {
    // Simular um processo de login (por exemplo, verificando credenciais)
    // Em uma aplicação real, você usaria uma lógica de autenticação adequada aqui
    // Se as credenciais estiverem corretas, defina loggedIn como true
    setLoggedIn(true);
  };

  // Se o usuário não estiver logado, exiba a página de login
  if (!loggedIn) {
    return <Login onLogin={handleLogin} />;
  }


  return (
    <>
      <div>

        <a href="https://react.dev" target="_blank" rel="noopener noreferrer">
          <img src={Logo} className="logo" alt="logo" />
        </a>
      </div>
      <h1>pg-Pro</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;

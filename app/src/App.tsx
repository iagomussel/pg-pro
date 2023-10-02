import React from 'react';
import Logo from './assets/logo.png';
import Login from './pages/Login';

function App() {
  const loggedIn = localStorage.getItem('token') !== null;

  // Se o usuário não estiver logado, exiba a página de login
  if (!loggedIn) {
    return <Login />;
  }

  return (
    <>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;

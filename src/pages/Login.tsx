import React, { useState } from 'react';
import './Login.css';
import Logo from '../assets/logo.png';

interface Props {
  onLogin: () => void;
}

const Login: React.FC<Props> = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e: React.FormEvent) => {
      e.preventDefault();

    if (username && password) {
    //   try {
    //     // Faça uma solicitação POST para autenticar o usuário
    //     const response = await axios.post('URL_DO_SEU_ENDPOINT_DE_AUTENTICACAO', {
    //       username,
    //       password,
    //     });

    //     const { token } = response.data; // Supondo que o servidor responda com um token JWT

    //     // Salve o token JWT no localStorage
    //     localStorage.setItem('token', token);

        onLogin();
    //   } catch (error) {
    //     console.error('Erro de autenticação:', error);
    //     alert('Erro de autenticação. Verifique suas credenciais.');
    //   }
    } else {
      alert('Por favor, preencha todos os campos.');
    }
  };

  return (
    <>
    <div className="sidenav">
        <div className="container">

            <div className="login-main-text d-flex justify-content-center flex-column">
                <img src={Logo} className="img-fluid mx-auto logo" alt="logo" />
                <div className='mt-5'>
                    <p className='h3 text-center'>Cadastro de Membros</p>
                    <p className='lead text-center'>Jesus Cristo é o Caminho</p>
                </div>
            </div>
        </div>
    </div>
    <div className="main">
      <div className="d-flex p-3 bd-highlight align-items-center justify-content-center vh-100">
        <div className="login-form p-5 shadow-lg text-white">
          <form onSubmit={handleLogin}>
          <img src={Logo} className="img-fluid sm-logo mx-auto logo" alt="logo" />
            <div className="form-group ">
              <label>Nome de usuário</label>
              <input
                type="text"
                className="form-control"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="form-group ">
              <label>Senha</label>
              <input
                type="password"
                className="form-control"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="form-group">
 
            <button type="submit" className="btn btn-black text-white form-control mt-5">
              Acessar
            </button>
            </div>
          </form>
        </div>
      </div>
    </div>
    </>
    
  );
};

export default Login;

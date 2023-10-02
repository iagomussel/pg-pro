import React, { useState } from 'react';
import {  Form, Button, Container, Row, Col, Image } from 'react-bootstrap';
import Logo from '../assets/logo.png';
import axios from '../utils/axios';
import './Login.css';
import ErrorToast from '../components/message/ErrorToast';



const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    localStorage.setItem('token', "test");
    if (username && password) {
      try {
        const response = await axios.post('login', {
          username,
          password,
        });

        const { token } = response.data;

        localStorage.setItem('token', token);
        // reload the page
        window.location.href = '/';
      } catch (error) {
        console.error('Erro de autenticação:', error);
        setErrorMessage('Erro de autenticação. Verifique suas credenciais.');
      }
    } else {
      setErrorMessage('Por favor, preencha todos os campos.');
    }
  };

  return (
    <>
      <div className="sidenav">
        <Container>
          <Row>
            <Col className="text-center text-white">
              <Image src={Logo} fluid className="logo" alt="logo" />
              <div>
                <p className="h3">Cadastro de Membros</p>
                <p className="lead">Jesus Cristo é o Caminho</p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="main text-white">
        <Container>
          <Row className="justify-content-center align-items-center vh-100">
            <Col xs={12} sm={8} md={6} lg={4}>
              <div className="login-form p-5 shadow-lg text-white">
                <Form onSubmit={handleLogin}>
                  <Image src={Logo} fluid className="sm-logo" alt="logo" />
                  <Form.Group>
                    <Form.Label>Nome de usuário</Form.Label>
                    <Form.Control
                      type="text"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                    />
                  </Form.Group>
                  <Form.Group>
                    <Form.Label>Senha</Form.Label>
                    <Form.Control
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </Form.Group>
                  <Button type="submit" className="btn btn-black text-white form-control mt-5">
                    Acessar
                  </Button>
                </Form>
                <ErrorToast show={!!errorMessage} message={errorMessage || ''} onClose={() => setErrorMessage(null)} />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Login;

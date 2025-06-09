import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/login.css';

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function handleSubmit(event) {
    event.preventDefault();

    const monUser = {
      email: email,
      password: password,
    };

    try {
      console.log('Envoi de la requête...');
      const response = await fetch('http://localhost:3000/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(monUser),
      });
      const data = await response.json();

      if (response.ok) {
        console.log(data.token);
        localStorage.setItem('token', data.token);
        navigate('/');
        window.location.reload();
      } else {
        alert("Erreur dans l'identifiant ou le mot de passe");
      }
    } catch (error) {
      console.error('Erreur lors de la connexion :', error);
      alert('Erreur serveur');
    }
  }

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Connexion admin</h2>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Mot de passe"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Se connecter</button>
      </form>
    </div>
  );
}

export default Login;

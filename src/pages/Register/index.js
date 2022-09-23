import './index.scss';
import {useState, useEffect} from 'react';
function Register() {
  const [displayName, setDisplayName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("");

    const user = {
      displayName,
      email,
      password,
    };
    if (password !== confirmPassword) {
      setError("As senhas precisam ser iguais.");
      return;
    }
  };

  return (
    <div className="register">
      <h1>Cadastre-se para postar</h1>
      <p>Crie seu usuário e compartilhe suas histórias</p>
      <form onSubmit={handleSubmit}>
        <label>
          <span>Nome:</span>
          <input type="text" name='displayName' required placeholder='Nome do usuário' onChange={(e) => setDisplayName(e.target.value)}
            value={displayName} />
        </label>
        <label>
          <span>Email:</span>
          <input type="email" name='email' required placeholder='E-mail do usuário' onChange={(e) => setEmail(e.target.value)}
            value={email} />
        </label>
        <label>
          <span>Senha:</span>
          <input type="password" name='password' required placeholder='Insira sua senha' onChange={(e) => setPassword(e.target.value)}
            value={password} />
        </label>
        <label>
          <span>Confirme a senha:</span>
          <input type="password" name='confirmPassword' required placeholder='Confirme do usuário' onChange={(e) => setConfirmPassword(e.target.value)}
            value={confirmPassword} />
        </label>
        <button className='btn'>Cadastrar</button>
        {error && (<p className="error">{error}</p>)}
      </form>
    </div>
  )
}

export default Register;

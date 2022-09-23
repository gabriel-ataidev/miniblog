import './index.scss';
import {usestate, useEffect} from 'react';
function Register() {
  return (
    <div className="register">
      <h1>Cadastre-se para postar</h1>
      <p>Crie seu usuário e compartilhe suas histórias</p>
      <form>
        <label>
          <span>Nome:</span>
          <input type="text" name='displayName' required placeholder='Nome do usuário' />
        </label>
        <label>
          <span>Email:</span>
          <input type="email" name='email' required placeholder='E-mail do usuário' />
        </label>
        <label>
          <span>Senha:</span>
          <input type="password" name='password' required placeholder='Insira sua senha' />
        </label>
        <label>
          <span>Confirme a senha:</span>
          <input type="password" name='confirmPassword' required placeholder='Confirme do usuário' />
        </label>
        <button className='btn'>Cadastrar</button>
      </form>
    </div>
  )
}

export default Register;

import { loginAccount } from 'components/redux/authentication/authentication.thunk';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import s from './Login.module.css';
export default function Login() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassWord] = useState('');
  const handleEmail = event => {
    setEmail(event.target.value);
  };
  const handlePassWorld = event => {
    setPassWord(event.target.value);
  };
  const handleSubmit = event => {
    event.preventDefault();
    dispatch(loginAccount({ email, password }));
    setEmail('');
    setPassWord('');
  };
  return (
    <div className={s.section}>
      <h2>Login</h2>
      <form className={s.form} onSubmit={handleSubmit} action="">
        <label className={s.label}>
          Email<input onChange={handleEmail} type={'email'} name="email"></input>
        </label>
        <label className={s.label}>
          PassWord
          <input onChange={handlePassWorld} type={'password'} name="passworld"></input>
        </label>
        <button className={s.button} type="submit">
          Login
        </button>
      </form>
    </div>
  );
}

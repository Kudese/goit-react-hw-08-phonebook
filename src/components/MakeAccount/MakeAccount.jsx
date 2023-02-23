import { makeAccount } from 'components/redux/authentication/authentication.thunk';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import s from './MakeAccount.module.css';
export default function MakeAccount() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassWorld] = useState('');
  const dispatch = useDispatch();
  const handleSubmit = event => {
    event.preventDefault();
    dispatch(makeAccount({ name, email, password }));
    setName('');
    setEmail('');
    setPassWorld('');
  };
  const handleName = e => {
    setName(e.target.value);
  };
  const handleEmail = e => {
    setEmail(e.target.value);
  };
  const handlePassWorld = e => {
    setPassWorld(e.target.value);
  };
  return (
    <div className={s.section}>
      <h2>Make Account</h2>
      <form className={s.form} action="" onSubmit={handleSubmit}>
        <label className={s.label}>
          Name
          <input name="name" onChange={handleName} value={name} type={'text'}></input>
        </label>
        <label className={s.label}>
          Email
          <input name="email" onChange={handleEmail} value={email} type={'email'}></input>
        </label>
        <label className={s.label}>
          PassWord
          <input
            name="password"
            onChange={handlePassWorld}
            value={password}
            type={'password'}
          ></input>
        </label>
        <button className={s.button} type={'submt'}>
          Create account
        </button>
      </form>
    </div>
  );
}

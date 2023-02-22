import { makeAccount } from 'components/redux/authentication/authentication.thunk';
import { useState } from 'react';
import { useDispatch } from 'react-redux';

export default function MakeAccount() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassWorld] = useState('');
  const dispatch = useDispatch();
  const handleSubmit = event => {
    event.preventDefault();
    dispatch(makeAccount({ name, email, password }));
    setName('')
    setEmail("")
    setPassWorld("")
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
    <div>
      <h2>Make Account</h2>
      <form action="" onSubmit={handleSubmit}>
        <label>
          Name
          <input name="name" onChange={handleName} value={name} type={'text'}></input>
        </label>
        <label>
          Email
          <input name="email" onChange={handleEmail} value={email} type={'email'}></input>
        </label>
        <label>
          PassWord
          <input
            name="password"
            onChange={handlePassWorld}
            value={password}
            type={'password'}
          ></input>
        </label>
        <button type={'submt'}> Create account</button>
      </form>
    </div>
  );
}

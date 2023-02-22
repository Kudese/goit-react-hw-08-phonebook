import { addContact } from 'components/redux/contact/contact.thunk';
import { token } from 'components/redux/http';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import s from '../PhoneBook/PhoneBook.module.css';

export default function PhoneBook() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const tokenKey = useSelector(state => state.authentcation.token);
  const dispatch = useDispatch();

  const handleChange = e => {
    if (e.target.name === 'name') {
      setName(e.target.value);
    } else if (e.target.name === 'number') {
      setNumber(e.target.value);
    }
  };
  const handleSubmitForm = e => {
    e.preventDefault();
    console.log('submit');
    dispatch(addContact({ name, number }));
    setName('');
    setNumber('');
  };
  useEffect(()=>{
 token.set(tokenKey)
  },[tokenKey])
  return (
    <div className={s.conteiner}>
      <h2>PhoneBook</h2>
      <form onSubmit={handleSubmitForm}>
        <label>
          Name
          <input
            onChange={handleChange}
            type="text"
            name="name"
            value={name}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>
        <label>
          Number
          <input
            onChange={handleChange}
            type="tel"
            name="number"
            value={number}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>
        <button type="submit">Add contact</button>
      </form>
    </div>
  );
}

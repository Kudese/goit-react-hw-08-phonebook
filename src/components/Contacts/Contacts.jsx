import s from '../Contacts/Contacts.module.css';
import ContactFiler from './ContactFilter/ContactFilter';
import ContactIteam from './ContactIteam/ContacIteam';

import { useDispatch, useSelector } from 'react-redux';
import { Suspense, useEffect } from 'react';
import { fetchContacts } from 'components/redux/contact/contact.thunk';
import { token } from 'components/redux/http';
import { CircularProgress } from '@mui/material';

export default function Contacts() {
  const data = useSelector(state => state.contacts.items);
  const search = useSelector(state => state.search);
  const tokenKey = useSelector(state => state.authentcation.token);
  const dispatch = useDispatch();
  useEffect(() => {
    token.set(tokenKey);
    dispatch(fetchContacts());
  }, [dispatch, tokenKey]);
  const list = data.filter(el => {
    return el.name.toLowerCase().includes(search.toLowerCase());
  });

  return (
    <div className={s.conteiner}>
      <h2>Contacts</h2>
      <ContactFiler />
      <ul className={s.list}>
        {list.map(el => {
          return (
            <Suspense fallback={<CircularProgress />}>
              <ContactIteam key={el.id} contact={el} />;
            </Suspense>
          );
        })}
      </ul>
    </div>
  );
}

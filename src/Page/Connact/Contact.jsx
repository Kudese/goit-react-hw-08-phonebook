import Contacts from 'components/Contacts/Contacts';
import PhoneBook from 'components/PhoneBook/PhoneBook';
import s from './Contact.module.css'
export default function Contact() {
  return (
    <div className={s.section} >
      <PhoneBook />
      <Contacts />
    </div>
  );
}

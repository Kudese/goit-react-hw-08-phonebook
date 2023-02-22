import PhoneBook from './PhoneBook/PhoneBook';
import Contacts from './Contacts/Contacts';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import PageWrapper from './PageWrapper/PageWrapper';
import { Suspense } from 'react';
import Login from './Login/Login';
import MakeAccount from './MakeAccount/MakeAccount'
import PrivateRouter from './PrivateRouter/PrivateRouter';
import PublicRouter from './PublicRouter/PublicRouter';
export const App = () => {
  return (
    <BrowserRouter basename="goit-react-hw-08-phonebook">
      <Suspense fallback={<p>Loading</p>}>
        <Routes>
          <Route path="" element={<PageWrapper />}>
            {/* <Route path="" element={<PrivateRouter />}> */}
              <Route path="addcontact" element={<PhoneBook />} />
              <Route path="contactlist" element={<Contacts />} />
            {/* </Route> */}
            {/* <Route path="" element={<PublicRouter />}> */}
              <Route path="login" element={<Login />} />
              <Route path="makeaccount" element={<MakeAccount />} />
            {/* </Route> */}
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

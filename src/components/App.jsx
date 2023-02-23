import { Route, Routes, BrowserRouter } from 'react-router-dom';
import PageWrapper from './PageWrapper/PageWrapper';
import { Suspense } from 'react';
import Login from './Login/Login';
import MakeAccount from './MakeAccount/MakeAccount';
import PrivateRouter from './PrivateRouter/PrivateRouter';
import PublicRouter from './PublicRouter/PublicRouter';
import Contact from 'Page/Connact/Contact';
import HomePage from 'Page/HomePage/HomePage';
export const App = () => {
  return (
    <BrowserRouter basename="goit-react-hw-08-phonebook">
      <Suspense fallback={<p>Loading</p>}>
        <Routes>
          <Route path="" element={<PageWrapper />}>
            <Route path="" element={<PrivateRouter />}>
              <Route path="contact" element={<Contact />} />
            </Route>
            <Route path="" element={<PublicRouter />}>
              <Route path="/homepage" element={<HomePage />} />
              <Route path="/login" element={<Login />} />
              <Route path="/makeaccount" element={<MakeAccount />} />
            </Route>
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

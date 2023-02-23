import { Route, Routes, BrowserRouter } from 'react-router-dom';
import PageWrapper from './PageWrapper/PageWrapper';
import { lazy, Suspense } from 'react';
import { CircularProgress } from '@mui/material';
import PrivateRouter from './PrivateRouter/PrivateRouter';
import PublicRouter from './PublicRouter/PublicRouter';

const Contact = lazy(() => import('Page/Connact/Contact'));
const Login = lazy(() => import('./Login/Login'));
const MakeAccount = lazy(() => import('./MakeAccount/MakeAccount'));
const HomePage = lazy(() => import('Page/HomePage/HomePage'));

export const App = () => {
  return (
    <BrowserRouter basename="goit-react-hw-08-phonebook">
      <Suspense fallback={<CircularProgress />}>
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

import { CircularProgress } from '@mui/material';
import { logoutAccount } from 'components/redux/authentication/authentication.thunk';
import { Suspense } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, Outlet } from 'react-router-dom';
import s from './PageWrapper.module.css';
export default function PageWrapper() {
  const isLogin = useSelector(state => state.authentcation.isLogin);
  const dataUser = useSelector(state => state.authentcation.dataUser);
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logoutAccount());
  };
  return (
    <>
      <header className={s.header}>
        <h1 className={s.logo}> Contack books </h1>
        {isLogin ? (
          <div className={s.person}>
            <h3>{dataUser.name}</h3>
            <p>{dataUser.email}</p>
            <button className={s.outlog} onClick={handleLogout} type="button">
              Logout
            </button>
          </div>
        ) : (
          <div className={s.navigate}>
            <ul className={s.list_navigate}>
              <li className={s.list_navigate_iteams}>
                {<NavLink to={'homepage'}>HomePage</NavLink>}
              </li>
              <li className={s.list_navigate_iteams}>
                {<NavLink to={'login'}>Login</NavLink>}
              </li>
              <li className={s.list_navigate_iteams}>
                {<NavLink to={'makeaccount'}>Created account</NavLink>}
              </li>
            </ul>
          </div>
        )}
      </header>
      <Suspense fallback={<CircularProgress />}>
        <Outlet />
      </Suspense>
    </>
  );
}

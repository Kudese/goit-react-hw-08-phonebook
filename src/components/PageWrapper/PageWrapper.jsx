import { logoutAccount } from 'components/redux/authentication/authentication.thunk';
import { Suspense } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, Outlet } from 'react-router-dom';

export default function PageWrapper() {
  const isLogin = useSelector(state => state.authentcation.isLogin);
  const dataUser = useSelector(state => state.authentcation.dataUser);
  const dispatch = useDispatch();
  console.log(isLogin);
  const handleLogout = () => {
    dispatch(logoutAccount());
  };
  return (
    <>
      <header>
        <h1> Contack books </h1>
        {isLogin ? (
          <div>
            <h3>{dataUser.name}</h3>
            <p>{dataUser.email}</p>
            <button onClick={handleLogout} type="button">
              Logout
            </button>
          </div>
        ) : (
          <h2>Welcome</h2>
        )}
      </header>
      <aside>
        {isLogin || <NavLink to={'login'}>Login</NavLink>}
        {isLogin || <NavLink to={'makeaccount'}>Created account</NavLink>}
        {!isLogin || <NavLink to={'addcontact'}>Add contact </NavLink>}
        {!isLogin || <NavLink to={'contactlist'}> Contact List</NavLink>}
      </aside>
      <Suspense fallback={<p>Loading</p>}>
        <Outlet />
      </Suspense>
    </>
  );
}

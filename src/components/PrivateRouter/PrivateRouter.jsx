
import { useSelector } from 'react-redux';
import { Navigate, Outlet,  } from 'react-router-dom';

export default function PrivateRouter() {
  const isLogin = useSelector(state => state.authentcation.isLogin);
  
  return (isLogin ?<Outlet /> : <Navigate to={"contactlist"} /> ) ;
}


import { useSelector } from 'react-redux';
import { Outlet, useNavigate } from 'react-router-dom';

export default function PrivateRouter() {
  const isLogin = useSelector(state => state.authentcation.isLogin);
  const navigate = useNavigate();
  return (isLogin ? navigate('/'): <Outlet />) ;
}

import { useSelect } from '@mui/base';
import { Outlet, useNavigate } from 'react-router-dom';

export default function PublicRouter() {
  const isLogin = useSelect(state => state.authentcation.isLogin);
  const navigate = useNavigate();
  return isLogin ? navigate('') : <Outlet />;
}

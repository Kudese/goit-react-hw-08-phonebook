import { useSelect } from '@mui/base';
import { Navigate, Outlet} from 'react-router-dom';

export default function PublicRouter() {
  const isLogin = useSelect(state => state.authentcation.isLogin);
  
  return isLogin ? <Navigate to={'/contct'} /> : <Outlet />;
}

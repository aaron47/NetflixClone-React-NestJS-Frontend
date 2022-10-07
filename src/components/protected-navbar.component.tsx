import { useAppSelector } from '../app/hooks';
import { selectCurrentUser } from '../slices/Auth.slice';
import AccountNavbar from './account-navbar.component';
import Navbar from './Navbar.component';

const ProtectedNavbar = () => {
  const user = useAppSelector((state) => selectCurrentUser(state));

  return user ? <AccountNavbar /> : <Navbar />;
};
export default ProtectedNavbar;

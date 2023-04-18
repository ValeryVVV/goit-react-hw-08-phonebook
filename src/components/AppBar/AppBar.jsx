
// import { UserMenu } from '../UserMenu/UserMenu';
// import { AuthNav } from '../AuthNav/AuthNav';
// import { useAuth } from 'hooks';
import { AuthNav } from 'components/AuthNav/AuthNav';
import css from './AppBar.module.css';

import { Navigation } from "components/Navigation/Navigation";

export const AppBar = () => {
//   const { isLoggedIn } = useAuth();

  return (
    <header className={css.header}>
      <Navigation />
      <AuthNav />
      {/* {isLoggedIn ? <UserMenu /> : <AuthNav />} */}
    </header>
  );
};
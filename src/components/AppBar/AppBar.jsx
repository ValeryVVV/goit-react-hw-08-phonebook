
import { AuthNav } from 'components/AuthNav/AuthNav';

import { Navigation } from "components/Navigation/Navigation";
import { UserMenu } from 'components/UserMenu/UserMenu';
import { useSelector } from 'react-redux';
import { getIsLoggedIn } from 'redux/auth/auth-selectors';


import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';

export const AppBarContainer = () => {
  const isLoggedIn = useSelector(getIsLoggedIn);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
            <ContactPhoneIcon fontSize='medium' />
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <Navigation />
          </Typography>
          {isLoggedIn ? <UserMenu /> : <AuthNav />}
        </Toolbar>
      </AppBar>
    </Box>
  );
};

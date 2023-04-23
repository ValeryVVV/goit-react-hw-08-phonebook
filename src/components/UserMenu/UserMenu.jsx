import { useDispatch, useSelector } from "react-redux";
import { logOut } from 'redux/auth/auth-operations';
import { getUser } from "redux/auth/auth-selectors";

import { styled } from '@mui/system';
import { Button, Typography } from '@mui/material';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';
import React from "react";

export const Container = styled('div')({
    display: 'flex',
    alignItems: 'center',
    gap: '12px'
});

export const StyledButton = styled(Button)({
    width: '100px',
    color: '#ffff'
});

export const UserMenu = () => {
    const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const dispatch = useDispatch();
  const { name } = useSelector(getUser);

  return (
    <Container>
      <Typography variant='body1'>Welcome, {name}</Typography>
      <StyledButton variant="contained" type="button" onClick={handleClickOpen}>
        Logout
      </StyledButton>

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Are you sure you want to log out?"}
        </DialogTitle>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={() => dispatch(logOut())} autoFocus>
            Yes
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
};

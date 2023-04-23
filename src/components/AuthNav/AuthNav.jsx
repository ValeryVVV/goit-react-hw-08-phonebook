import { NavLink } from 'react-router-dom';
import { styled } from '@mui/system';

export const StyledLink = styled(NavLink)({
    display: 'inline-block',
    textDecoration: 'none',
    padding: '12px',
    fontWeight: '700',
    color: '#ffff'
});

export const AuthNav = () => {
  return (
    <div>
      <StyledLink to="/register">
        Register
      </StyledLink>
      <StyledLink to="/login">
        Log In
      </StyledLink>
    </div>
  );
};

import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getIsLoggedIn } from 'redux/auth/auth-selectors';
import { styled } from '@mui/system';

export const StyledLink = styled(NavLink)({
    display: 'inline-block',
    textDecoration: 'none',
    padding: '12px',
    fontWeight: '700',
    color: '#ffff'
});

export const Navigation = () => {
    const isLoggedIn = useSelector(getIsLoggedIn);

  return (
    <nav>
      <StyledLink to="/">
        Home
      </StyledLink>
      {isLoggedIn && (
        <StyledLink to="/contacts">
          Tasks
        </StyledLink>
       )}
    </nav>
  );
};
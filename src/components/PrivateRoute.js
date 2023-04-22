import { useSelector } from 'react-redux';
import { Navigate, Route } from 'react-router-dom';
import { getIsLoggedIn } from 'redux/auth/auth-selectors';

{
  /* <Redirect to="/login" />; */
}

export default function PrivateRoute({ children, routeProps }) {
  const isLoggedIn = useSelector(getIsLoggedIn);
  return (
    <Route {...routeProps}>
      {isLoggedIn ? children : <Navigate to="/login" />}
    </Route>
  );
}

import css from './UserMenu.module.css';
import { useDispatch, useSelector } from "react-redux";
import { logOut } from 'redux/auth/auth-operations';
import { getUser } from "redux/auth/auth-selectors";

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { name } = useSelector(getUser);

  return (
    <div className={css.wrapper}>
      <p className={css.username}>Welcome, {name} </p>
      <button type="button" onClick={() => dispatch(logOut())}>
        Logout
      </button>
    </div>
  );
};

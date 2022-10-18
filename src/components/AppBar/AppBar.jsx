import { NavLink, Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../../redux/operations';
import { selectIsAuth, selectGetEmail } from '../../redux/selector';

export function AppBar() {
  const isAuth = useSelector(selectIsAuth);
  const dispatch = useDispatch();
  const email = useSelector(selectGetEmail);

  return (
    <header>
      <Link to="/">PhoneBOOK</Link>
      <div>
        {isAuth ? <NavLink to="/contacts">Contacts</NavLink> : null}
        {!isAuth ? <NavLink to="/login">Log In</NavLink> : null}
        {!isAuth ? <NavLink to="/register">Register</NavLink> : null}
        {isAuth ? (
          <div>
            <p>{email}</p>
            <button type="button" onClick={() => dispatch(logout())}>
              Log Out
            </button>
          </div>
        ) : null}
      </div>
    </header>
  );
}

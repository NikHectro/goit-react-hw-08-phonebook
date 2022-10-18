import { NavLink, Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../../redux/operations';
import { selectIsAuth, selectGetEmail } from '../../redux/selector';
import Button from 'react-bootstrap/Button';

export function AppBar() {
  const isAuth = useSelector(selectIsAuth);
  const dispatch = useDispatch();
  const email = useSelector(selectGetEmail);

  return (
    <header>
      <Link to="/">
        <h1>PhoneBOOK</h1>
      </Link>
      <div>
        {isAuth ? <NavLink to="/contacts">Contacts</NavLink> : null}
        {!isAuth ? (
          <NavLink to="/login">
            <Button type="submit">Log In</Button>
          </NavLink>
        ) : null}
        {!isAuth ? (
          <NavLink to="/register">
            <Button type="submit">Register</Button>
          </NavLink>
        ) : null}
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

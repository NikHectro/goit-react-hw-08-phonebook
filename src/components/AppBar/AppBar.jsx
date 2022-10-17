import { NavLink, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
// import { UserMenu } from './UserMenu';
import { selectIsAuth } from 'redux/selector';
import s from './AppBar.module.css';

export function AppBar() {
  const isAuth = useSelector(selectIsAuth);

  return (
    <header>
      <Link to="/" className={s.title}>
        <span className={s.logo}>📓</span> Phonebook APP
      </Link>
      <div className={s.navWrapper}>
        {!isAuth ? (
          <NavLink to="/register" className={s.link}>
            Register
          </NavLink>
        ) : null}
        {isAuth ? (
          <NavLink to="/contacts" className={s.link}>
            Contacts
          </NavLink>
        ) : null}
        {!isAuth ? (
          <NavLink to="/login" className={s.link}>
            Log In
          </NavLink>
        ) : null}
        {/* {isAuth ? <UserMenu /> : null} */}
      </div>
    </header>
  );
}

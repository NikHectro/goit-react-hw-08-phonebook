import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { AppBar } from './AppBar/AppBar';
import { getUser } from '../redux/operations';
import { Contacts } from './ContactsList/Contacts';
// import { Loader } from './Loader/Loader';
import { LoginForm } from './Login/LoginForm';
import { RegisterForm } from './Register/RegisterForm';
// import { FormInput } from './Form/FormInput';
// import { ContactsList } from './ContactsList/ContactsList';
// import { FilterContacts } from './FilterContacts/FilterContacts';

export function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUser());
  }, [dispatch]);

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
        margin: '0 auto',
        width: '80vw',
        gap: '40px',
      }}
    >
      {/* {<p>AppBar</p>} */}
      <AppBar />
      <Routes>
        <Route path="/" element={<p>Start page</p>} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/register" element={<RegisterForm />} />
      </Routes>
    </div>
  );
}

// export function App() {
//   return (
//     <div
//       style={{
//         display: 'flex',
//         justifyContent: 'center',
//         flexDirection: 'column',
//         alignItems: 'center',
//         margin: '0 auto',
//         width: '80vw',
//         gap: '40px',
//       }}
//     >
//       <h1>Phonebook</h1>
//       <FormInput />
//       <FilterContacts />
//       <h2>Contacts:</h2>
//       <ContactsList />
//       {/* <Loading/> */}
//     </div>
//   );
// }

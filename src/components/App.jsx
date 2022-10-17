import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { AppBar } from './AppBar/AppBar';
// import { FormInput } from './Form/FormInput';
// import { ContactsList } from './ContactsList/ContactsList';
// import { FilterContacts } from './FilterContacts/FilterContacts';
// import { nanoid } from 'nanoid';

export function App() {
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
        <Route path="/register" element={<p>Register</p>} />
        <Route path="/login" element={<p>Login</p>} />
        <Route path="/contacts" element={<p>Contacts</p>} />
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

import React from 'react';
import { FormInput } from './Form/FormInput';
import { ContactsList } from './ContactsList/ContactsList';
import { FilterContacts } from './FilterContacts/FilterContacts';
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
      <h1>Phonebook</h1>
      <FormInput />
      <FilterContacts />
      <h2>Contacts:</h2>
      <ContactsList />
    </div>
  );
}

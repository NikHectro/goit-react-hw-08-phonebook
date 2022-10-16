import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { removeContact } from 'redux/actions';

export function ContactsList() {
  const contacts = useSelector(state => state.phoneBookReducer.contacts);
  const filterInput = useSelector(state => state.phoneBookReducer.filter);

  const getContactsByFilter = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filterInput.toLowerCase())
    );
  };

  const dispatch = useDispatch();

  const deletedContact = id => {
    dispatch(removeContact(id));
  };

  return (
    // if (!contacts) {
    //   <h2>No contactcs</h2>
    // }
    <ul>
      {getContactsByFilter().map(contact => (
        <li
          key={contact.id}
          style={{
            padding: '10px',
            margin: '0 auto',
            width: '80vw',
            gap: '40px',
          }}
        >
          <span>
            {contact.name}: {contact.number}
          </span>
          <button
            style={{
              padding: '5px',
              marginLeft: '20px',
            }}
            onClick={() => deletedContact(contact.id)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}

// Old version:
// import React from 'react';
// import PropTypes from 'prop-types';

// export default function ContactsList({ contacts, handleremoveContact }) {
//   return (
//     <ul>
//       {contacts.map(el => (
//         <li
//           key={el.id}
//           style={{
//             padding: '10px',
//             margin: '0 auto',
//             width: '80vw',
//             gap: '40px',
//           }}
//         >
//           {el.name}: {el.number}
//           <button
//             type="button"
//             style={{
//               padding: '5px',
//               marginLeft: '20px',
//             }}
//             onClick={() => handleremoveContact(el.id)}
//           >
//             Delete
//           </button>
//         </li>
//       ))}
//     </ul>
//   );
// }

// ContactsList.propTypes = {
//   contacts: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.string.isRequired,
//       name: PropTypes.string.isRequired,
//       number: PropTypes.string.isRequired,
//     })
//   ).isRequired,
//   handleremoveContact: PropTypes.func.isRequired,
// };

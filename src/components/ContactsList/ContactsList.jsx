import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
// import { removeContact } from 'redux/actions';
import { removeContact, fetchContacts } from 'redux/operations';
import { Circles } from 'react-loader-spinner';

export function ContactsList() {
  const contacts = useSelector(state => state.items.contacts);
  const filter = useSelector(state => state.filter);
  const isLoading = useSelector(state => state.items.isLoading);
  const dispatch = useDispatch();
  // const contacts = useSelector(state => state.phoneBookReducer.contacts);
  // const filterInput = useSelector(state => state.phoneBookReducer.filter);

  const getContactsByFilter = () => {
    return contacts.filter(
      contact => contact.name.toLowerCase().includes(filter.toLowerCase())
      // contact.name.toLowerCase().includes(filterInput.toLowerCase())
    );
  };
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const deletedContactByID = id => {
    dispatch(removeContact(id));
  };

  return (
    // if (!contacts) {
    //   <h2>No contactcs</h2>
    // }
    <>
      {isLoading && <Circles />}
      {!isLoading && (
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
                onClick={() => deletedContactByID(contact.id)}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}

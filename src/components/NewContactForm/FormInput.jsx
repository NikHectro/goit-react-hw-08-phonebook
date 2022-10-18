import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useSelector, useDispatch } from 'react-redux';
// import { addContact } from '../../redux/actions';
import { addContact } from 'redux/operations';
import { selectGetItemsContacts } from 'redux/selector';
import { nanoid } from 'nanoid';

export function FormInput() {
  const dispatch = useDispatch();
  const contactsForChecking = useSelector(selectGetItemsContacts);
  // const contactsForChecking = useSelector(state => state.items.contacts);
  // const contactsForChecking = useSelector(
  //   state => state.phoneBookReducer.contacts
  // );

  const handleSubmit = event => {
    event.preventDefault();

    const target = event.target.elements;

    const isDuplicated = contactsForChecking.find(
      contact => contact.name.toLowerCase() === target.name.value.toLowerCase()
    );

    if (isDuplicated) {
      alert(
        `Could not add ${target.name.value} cause it is already in the list`
      );
      return;
    }

    const formData = {
      name: target.name.value,
      number: target.number.value,
      id: nanoid(),
    };

    dispatch(addContact(formData));
    //Reset:
    event.target.elements.name.value = '';
    event.target.elements.number.value = '';
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Name</Form.Label> {/*htmlFor={nameInputId} */}
          <Form.Control
            name="name"
            type="text"
            placeholder="Name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
          <Form.Label>Number</Form.Label> {/*htmlFor={numberInputId} */}
          <Form.Control
            name="number"
            type="tel"
            placeholder="Number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          />{' '}
          <Button
            variant="primary"
            type="submit"
            style={{
              marginTop: '20px',
            }}
          >
            Add contacts
          </Button>
        </Form.Group>
      </Form>
    </>
  );
}

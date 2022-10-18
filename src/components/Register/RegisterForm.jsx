import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectIsAuth } from '../../redux/selector';
import { register } from '../../redux/operations';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export function RegisterForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const isAuth = useSelector(selectIsAuth);

  const inputOperator = evt => {
    if (evt.target.name === 'name') {
      setName(evt.target.value);
    } else if (evt.target.name === 'email') {
      setEmail(evt.target.value);
    } else if (evt.target.name === 'password') {
      setPassword(evt.target.value);
    } else {
      throw new Error('Unexpected value');
    }
  };

  const formSubmit = evt => {
    evt.prevtDefault();
    dispatch(register({ name, email, password }));
    setName('');
    setEmail('');
    setPassword('');
  };

  if (!isAuth) {
    return (
      <Form onSubmit={formSubmit}>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>
            Username
            <input
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces.
                For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              value={name}
              onChange={inputOperator}
            />
          </Form.Label>
          <Form.Label>
            Email
            <Form.Control
              type="email"
              name="email"
              required
              value={email}
              onChange={inputOperator}
            />
          </Form.Label>
          <Form.Label>
            Password
            <Form.Control
              type="password"
              name="password"
              required
              value={password}
              onChange={inputOperator}
            />
          </Form.Label>
          <Button type="submit">Register</Button>
        </Form.Group>
      </Form>
    );
  } else {
    return <Navigate to="/contacts" replace={true} />;
  }
}

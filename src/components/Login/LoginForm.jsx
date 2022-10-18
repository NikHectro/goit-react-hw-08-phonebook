import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectIsAuth } from 'redux/selector';
import { login } from '../../redux/operations';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export function LoginForm() {
  const [email, setMail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const isAuth = useSelector(selectIsAuth);

  const inputOperator = evt => {
    if (evt.target.name === 'email') {
      setMail(evt.target.value);
    } else if (evt.target.name === 'password') {
      setPassword(evt.target.value);
    } else {
      throw new Error('Value is not defined');
    }
  };
  const formSubmit = evt => {
    evt.prevtDefault();
    dispatch(login({ email, password }));
    setMail('');
    setPassword('');
  };

  if (!isAuth) {
    return (
      <Form onSubmit={formSubmit}>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
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
          <Button type="submit">Log in</Button>
        </Form.Group>
      </Form>
    );
  } else {
    return <Navigate to="/contacts" replace={true} />;
  }
}

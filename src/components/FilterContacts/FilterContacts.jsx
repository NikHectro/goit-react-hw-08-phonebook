import Form from 'react-bootstrap/Form';
import { useSelector, useDispatch } from 'react-redux';
// import { filter } from '../../redux/actions';
import { setFilter } from '../../redux/slices';
import { selectGetFilterValue } from '../../redux/selector';

export function FilterContacts() {
  const dispatch = useDispatch();
  const value = useSelector(selectGetFilterValue);
  // const value = useSelector(state => state.phoneBookReducer.filter);

  const onChange = event => {
    dispatch(setFilter(event.target.value));
  };

  return (
    <>
      <Form.Label htmlFor="fltrContacts">
        <h2>Find contact by name:</h2>
      </Form.Label>
      <Form.Control
        type="text"
        id="fltrContacts"
        aria-describedby="passwordHelpBlock"
        value={value}
        // name="search"
        onChange={onChange}
      />
    </>
  );
}

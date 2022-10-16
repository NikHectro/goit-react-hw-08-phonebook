import Form from 'react-bootstrap/Form';
import { useSelector, useDispatch } from 'react-redux';
import { filter } from '../../redux/actions';

export function FilterContacts() {
  const dispatch = useDispatch();
  const value = useSelector(state => state.phoneBookReducer.filter);

  const onChange = event => {
    dispatch(filter(event.target.value));
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
// Old version:
// import Form from 'react-bootstrap/Form';
// import PropTypes from 'prop-types';

// export function FilterContacts({ onChange, value }) {
//   return (
//     <>
//       <Form.Label htmlFor="fltrContacts">
//         <h2>Find contact by name:</h2>
//       </Form.Label>
//       <Form.Control
//         type="text"
//         id="fltrContacts"
//         aria-describedby="passwordHelpBlock"
//         value={value}
//         onChange={onChange}
//       />
//     </>
//   );
// }

// // export default FilterContacts;

// FilterContacts.propTypes = {
//   value: PropTypes.string.isRequired,
//   onChange: PropTypes.func.isRequired,
// };

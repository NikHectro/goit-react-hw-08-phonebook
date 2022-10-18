import { useSelector } from 'react-redux';
import { selectIsAuth } from '../../redux/selector';
import { ContactsList } from '../ContactsList/ContactsList';
import { FilterContacts } from '../FilterContacts/FilterContacts';
import { FormInput } from '../NewContactForm/FormInput';

export function Contacts() {
  const isAuth = useSelector(selectIsAuth);

  if (isAuth) {
    return (
      <div>
        <div>
          <FilterContacts />
          <FormInput />
        </div>
        <ContactsList />
      </div>
    );
  } else {
    return <p>Please, log in first</p>;
  }
}

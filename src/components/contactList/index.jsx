import ContactItem from 'components/contactItem';
import ListStyled from './List.styled';

const ContactList = ({ contacts, handleDelete }) => {
  return (
      <ListStyled>
        {contacts.map(({ id, name, number }) => (
          <ContactItem
            name={name}
            key={id}
            number={number}
            handleDelete={handleDelete}
            id={id}
          />
        ))}
      </ListStyled>
    
  );
};

export default ContactList;

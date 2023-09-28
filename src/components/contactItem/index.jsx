import { ContactTypography, DeleteButton } from './ContactItem.styled';

const ContactItem = ({ name, id, number, handleDelete }) => {
  return (
    <ContactTypography>
      {name}: {number}
      <DeleteButton onClick={() => handleDelete(id)} type="button">
        Delete
      </DeleteButton>
    </ContactTypography>
  );
};

export default ContactItem;

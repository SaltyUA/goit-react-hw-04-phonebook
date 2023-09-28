import { FilterContainer, TextTypography } from './FilterContainer.styled';
import { Input } from 'components/form/Form.styled';

// Input in ContactList for filtering contacts
const FilterInput = ({ filterValue, handleFilter }) => {
  return (
    <FilterContainer>
      <TextTypography>Find contacts by name</TextTypography>
      <Input
        onChange={handleFilter}
        type="text"
        name="filter"
        value={filterValue}
        pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
      />
    </FilterContainer>
  );
};

export default FilterInput;

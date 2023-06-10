import PropTypes from 'prop-types';
import { FilterForm, FilterLabel } from './Filter.styled';
import { Input, Span } from '../ContactForm/ContactForm.styled';

export const Filter = ({ value, onChange }) => {
  return (
    <FilterForm>
      <FilterLabel>
        <Span>Find contacts by name</Span>
        <Input
          type="name"
          value={value}
          onChange={onChange}
          placeholder="Please enter a name to search"
        />
      </FilterLabel>
    </FilterForm>
  );
};

Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

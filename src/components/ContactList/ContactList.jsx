import React from 'react';
import PropTypes from 'prop-types';
import { ListWrapper, Item, Fragment, Button } from './ContactList.styled';

export const ContactList = ({ contacts, onDelete }) => {
  return (
    <ListWrapper>
      {contacts.map(({ id, name, number }) => (
        <Item key={id}>
          <Fragment>
            {name}: {number}
          </Fragment>
          <Button type="button" onClick={() => onDelete(id)}>
            Delete
          </Button>
        </Item>
      ))}
    </ListWrapper>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  onDelete: PropTypes.func.isRequired,
};

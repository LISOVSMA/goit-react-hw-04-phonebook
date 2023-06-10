import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import Notiflix from 'notiflix';
import { Container, Title } from './App.styled';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import initialContacts from './data/contacts.json';

export const App = () => {
  const [contacts, setContacts] = useState(() => {
    return JSON.parse(localStorage.getItem('contacts')) ?? initialContacts;
  });

  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const addContact = ({ name, number }) => {
    const normalizedName = name.toLowerCase();

    const findName = contacts.find(
      contact => contact.name.toLowerCase() === normalizedName
    );

    if (findName) {
      alert(`${name} is already in contacts`);
      Notiflix.Notify.failure(`${name}: is already in contacts`);
      return;
    }

    const contact = {
      id: nanoid(),
      name: name,
      number: number,
    };

    setContacts(prevState => [...prevState, contact]);
  };

  const changeFilter = e => {
    setFilter(e.currentTarget.value);
  };

  const deleteContacts = contactId => {
    setContacts(prevState =>
      prevState.filter(contact => contact.id !== contactId)
    );
  };

  const getInitialContacts = () => {
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const visibleContacts = getInitialContacts();

  return (
    <Container>
      <Title>Phonebook</Title>
      <ContactForm onSubmit={addContact} />
      <Title>Contacts</Title>
      <Filter value={filter} onChange={changeFilter} />
      <ContactList contacts={visibleContacts} onDelete={deleteContacts} />
    </Container>
  );
};

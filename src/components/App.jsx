import { useEffect, useState } from 'react';
import Form from './form';
import ContactList from './contactList';
import FilterInput from './filterInput';
import { nanoid } from 'nanoid';

import React from 'react';

const App = () => {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    const localContacts = localStorage.getItem('contacts');
    if (localContacts && JSON.parse(localContacts).length !== 0)
      setContacts(JSON.parse(localContacts));
  }, []);
  const submitContact = ({ name, number }) => {
    const id = nanoid();
    setContacts(prev => [...prev, { id, name, number }]);
  };

  useEffect(() => {
    contacts && localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const handleFilter = ({ target: { value } }) => setFilter(value);

  const handleDelete = id =>
    setContacts(prev => [...prev.filter(el => el.id !== id)]);

  const getFilteredContacts = () =>
    contacts.filter(({ name }) =>
      name.toLowerCase().includes(filter.toLowerCase())
    );

  return (
    <div>
      <h1>Phonebook</h1>
      <Form contacts={contacts} onSubmit={submitContact} />
      <h2>Contacts</h2>
      {contacts.length > 0 ? (
        <FilterInput fiterValue={filter} handleFilter={handleFilter} />
      ) : (
        <p>There are no contacts yet</p>
      )}
      {getFilteredContacts().length > 0 && (
        <ContactList
          contacts={getFilteredContacts()}
          filterValue={filter}
          handleDelete={handleDelete}
        />
      )}
    </div>
  );
};

export default App;

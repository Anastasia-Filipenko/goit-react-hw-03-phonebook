import React from 'react';
import { nanoid } from 'nanoid';
import { ContactsForm } from './ContactsForm/ContactsForm';
import { ContactsList } from './ContactsList/ContactsList';
import { Filter } from './Filter/Filter';
export class App extends React.Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  addContact = ({ name, number }) => {
    const checkName = this.state.contacts.find(
      contact => name === contact.name
    );

    const contact = {
      id: nanoid(),
      name,
      number,
    };

    checkName
      ? alert(`${name} is  already in contact`)
      : this.setState(({ contacts }) => ({ contacts: [...contacts, contact] }));
  };

  changeFilter = e => {
    this.setState({ filter: e.target.value });
  };

  getVisibleContact = () => {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  deleteContact = contactsId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactsId),
    }));
  };

  render() {
    const { filter } = this.state;
    return (
      <div
        style={{
          height: '100vh',
          fontSize: 40,
          color: '#010101',
          margin: '40px',
        }}
      >
        <h1>Phonebook</h1>
        <ContactsForm onSubmit={this.addContact} />

        <h2>Contacts</h2>
        <Filter value={filter} onChange={this.changeFilter} />
        <ContactsList
          contacts={this.getVisibleContact()}
          onDelete={this.deleteContact}
        />
      </div>
    );
  }
}

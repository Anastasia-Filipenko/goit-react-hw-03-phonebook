import React from 'react';
import css from './ContactsForm.module.css';

export class ContactsForm extends React.Component {
  state = {
    name: '',
    number: '',
  };

  handleChange = e => {
    const { value, name } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state);
    this.setState({ name: '', number: '' });
  };

  render() {
    const { name, number } = this.state;
    return (
      <form onSubmit={this.handleSubmit} className={css.form}>
        <label htmlFor="" className={css.formLabel}>
          Name:
        </label>
        <input
          className={css.formInput}
          value={name}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces.
           For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={this.handleChange}
        />

        <label htmlFor="" className={css.formLabel}>
          Number:
        </label>
        <input
          className={css.formInput}
          value={number}
          type="tel"
          name="number"
          pattern="\+?\d{(1, 4)}?[-.\s]?\(?\d
          {(1, 3)}?\)?[-.\s]?\d{(1, 4)}[-.\s]?\d{(1, 4)}[-.\s]?\d{(1, 9)}"
          title="Phone number must be digits and can contain spaces, dashes,
          parentheses and can start with +"
          required
          onChange={this.handleChange}
        />

        <button type="submit" className={css.formBtn}>
          Add contact
        </button>
      </form>
    );
  }
}

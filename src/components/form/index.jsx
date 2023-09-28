import React, { Component } from 'react';
import {
  FormContainer,
  FormWrap,
  LabelTypography,
  Input,
  SubmitButton,
} from './Form.styled';

class Form extends Component {
  state = {
    name: '',
    number: '',
  };

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { name } = this.state;
    const { onSubmit, contacts } = this.props;

    let isExist = contacts.some(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );
    if (isExist) {
      window.alert(`${name} is already in contacts`);
      return;
    }

    onSubmit({ ...this.state });
    this.reset();
  };

  reset = () => {
    this.setState(() => ({ name: '', number: '' }));
  };

  render() {
    const { name, number } = this.state;
    return (
      <FormContainer onSubmit={this.handleSubmit}>
        <FormWrap>
          <LabelTypography htmlFor="name">Name</LabelTypography>
          <Input
            onChange={this.handleChange}
            type="text"
            name="name"
            value={name}
            pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </FormWrap>
        <FormWrap>
          <LabelTypography htmlFor="number">Number</LabelTypography>
          <Input
            onChange={this.handleChange}
            type="tel"
            name="number"
            value={number}
            pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </FormWrap>
        <SubmitButton type="submit">Add contact</SubmitButton>
      </FormContainer>
    );
  }
}

export default Form;

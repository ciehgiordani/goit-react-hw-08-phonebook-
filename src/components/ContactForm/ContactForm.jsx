import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/operations';
import Notiflix from 'notiflix';
import { selectContacts } from 'redux/selectors';
import { ReactComponent as AddIcon } from '../icons/plus-user.svg';
import { Form, Input, Text, Button } from './ContactForm.styled';

const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleSubmit = event => {
    event.preventDefault();

    const contact = {
      name: name,
      number: number,
    };

    const isContactExist = contacts.find(
      ({ name }) => name.toLowerCase() === contact.name.toLowerCase()
    );

    if (isContactExist) {
      Notiflix.Report.warning(
        'Alert',
        `Contact with name ${contact.name} already exists!`,
        'Ok'
      );
      return;
    }

    const isNumberExist = contacts.find(
      ({ number }) =>
        contact.number.replace(/\D/g, '') === number.replace(/\D/g, '')
    );

    if (isNumberExist) {
      Notiflix.Report.warning(
        'Alert',
        `Same number ${contact.number} already in contact list!`,
        'Ok'
      );
      return;
    }

    dispatch(addContact(contact));
    setName('');
    setNumber('');
  };

  const handleNameChange = event => {
    setName(event.target.value);
  };

  const handleNumberChange = event => {
    setNumber(event.target.value);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Text>Handle Name</Text>
      <Input
        type="text"
        name="name"
        placeholder="Enter name"
        value={name}
        onChange={handleNameChange}
        pattern="^[a-zA-Zа-яА-Я]+([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*$"
        title="Handle Name field contains just letters"
        required
      />

      <Text>Phone Number</Text>
      <Input
        type="tel"
        name="number"
        placeholder="Enter phone number"
        value={number}
        onChange={handleNumberChange}
        pattern="(\+?( |-|\.)?\d{1,2}( |-|\.)?)?(\(?\d{3}\)?|\d{3})( |-|\.)?(\d{3}( |-|\.)?\d{4})"
        title="Number format should follow +1 234 5678901 or 123 4567890."
        required
      />

      <Button type="submit">
        <AddIcon />
      </Button>
    </Form>
  );
};

export default ContactForm;

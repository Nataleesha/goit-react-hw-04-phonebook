import React, { useState, useEffect } from "react";
import { nanoid } from "nanoid";
import Filter from "components/Form/Filter";
import Form from "components/Form/Form";
import Contacts from "components/Form/Contacts";

export default function App() {
  const [contacts, setContacts] = useState(() => {
    return JSON.parse(localStorage.getItem("contacts")) || [];
  });
  const [filter, setFilter] = useState("");

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  const handleSubmit = (name, number) => {
    contacts.some(
      (contact) => contact.name.toLowerCase() === name.toLowerCase()
    )
      ? alert(name + " is already in your contacts.")
      : setContacts((prevState) => [
          ...prevState,
          { id: nanoid(), name: name, number: number },
        ]);
  };

  const filterNames = (e) => {
    const filterValue = e.target.value;
    setFilter(filterValue);
  };

  const deleteContact = (contactId) => {
    setContacts(() => contacts.filter((contact) => contact.id !== contactId));
  };

  const lowerCaseFilter = filter.toLowerCase();

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(lowerCaseFilter)
  );

  return (
    <div className="App">
      <h1>Phonebook</h1>
      <Form onFormSubmit={handleSubmit} />
      <h2>Contacts</h2>
      <Filter value={filter} onChangeHandler={filterNames} />
      <Contacts contacts={filteredContacts} onDeleteContact={deleteContact} />
    </div>
  );
}

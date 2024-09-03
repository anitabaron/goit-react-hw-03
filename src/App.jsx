import { useState } from "react";
import "./App.css";
import ContactForm from "./components/contactForm";
import SearchBox from "./components/SearchBox";
import ContactList from "./components/ContactList";
// import * as Yup from "yup";

const initialData = [
  { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
  { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
  { id: "id-3", name: "Eden Clements", number: "645-17-79" },
  { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
];

function App() {
  const [count, setCount] = useState(0);
  const [contacts, setContacts] = useState(initialData);
  // const handleChangeContacts = () => {
  //   setContacts();
  // };
  // const handleSubmit = (values, actions) => {
  //   console.log(values);
  //   console.log(actions);
  //   actions.resetForm();
  // };
  const deleteContacts = () => {
    setContacts();
  };
  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      <ContactList contacts={contacts} deleteContacts={deleteContacts} />
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </>
  );
}

export default App;

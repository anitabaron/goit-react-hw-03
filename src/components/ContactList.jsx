import Contact from "./Contact";

const ContactList = ({ contacts, deleteContacts }) => {
  return (
    <div>
      ContactList:
      {contacts.map((contact) => (
        <Contact
          key={contact.id}
          id={contact.id}
          name={contact.name}
          number={contact.number}
          deleteContacts={deleteContacts}
        />
      ))}
    </div>
  );
};

export default ContactList;

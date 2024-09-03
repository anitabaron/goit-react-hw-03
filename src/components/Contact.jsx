import styles from "./Contact.module.css";

const Contact = ({ id, name, number, deleteContacts }) => {
  return (
    <div key={id} className={styles.form}>
      <p>{name}</p>
      <p>{number}</p>
      <button onClick={() => deleteContacts}>Delete</button>
    </div>
  );
};

export default Contact;

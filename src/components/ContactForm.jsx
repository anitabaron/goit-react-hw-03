import { Formik, Form, Field } from "formik";
import { useId } from "react";
import styles from "./ContactForm.module.css";

const ContactForm = () => {
  const nameFieldId = useId();
  const numberFieldId = useId();
  return (
    <Formik initialValues={{ username: "", number: "" }} onSubmit={() => {}}>
      <Form className={styles.form}>
        <label htmlFor={nameFieldId}>Name</label>
        <Field type="text" name="username" id={nameFieldId}></Field>
        <label htmlFor={numberFieldId}>Number</label>
        <Field type="number" name="number" id={numberFieldId}></Field>
        <button type="submit">Add contact</button>
      </Form>
    </Formik>
  );
};

export default ContactForm;

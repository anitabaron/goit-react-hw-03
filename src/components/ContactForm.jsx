import React from "react";
import { Formik, Form, Field } from "formik";
import { useId } from "react";
import styles from "./ContactForm.module.css";

const ContactForm = () => {
  const nameFieldId = useId();
  const numberFieldId = useId();
  return (
    <Formik initialValues={{ username: "", number: "" }} onSubmit={() => {}}>
      <Form className="form">
        <label htmlFor={nameFieldId}>Name</label>
        <br />
        <Field type="text" name="username" id={nameFieldId}></Field>
        <br />
        <label htmlFor={numberFieldId}>Number</label>
        <br />
        <Field type="number" name="number" id={numberFieldId}></Field>
      </Form>
    </Formik>
  );
};

export default ContactForm;

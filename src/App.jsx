import { useState } from "react";
import "./App.css";
import ContactForm from "./components/contactForm";
// import * as Yup from "yup";

function App() {
  const [count, setCount] = useState(0);
  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm />
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </>
  );
}

export default App;

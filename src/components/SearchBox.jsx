import { useId } from "react";
import styles from "./SearchBox.module.css";

const SearchBox = () => {
  const searchFieldId = useId();
  return (
    <form className={styles.form}>
      <label htmlFor={searchFieldId}>
        Find contacts by name
        <input type="text" name="username" id={searchFieldId}></input>
      </label>
    </form>
  );
};

export default SearchBox;

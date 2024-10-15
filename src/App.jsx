import ContactForm from "./components/ContactForm/ContactForm";
import SearchBox from "./components/SearchBox/SearchBox";
import ContactList from "./components/ContactList/ContactList";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import css from "./App.module.css";
import { fetchContacts } from "./redux/contacts/operations";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className={css.wrapper}>
      <h1>Phonebook</h1>
      <div className={css.wrapperSections}>
        <div>
          <ContactForm />
          <SearchBox />
        </div>
        <div className={css.wrapperContacts}>
          <ContactList />
        </div>
      </div>
    </div>
  );
}

export default App;

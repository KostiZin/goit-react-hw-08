import ContactForm from "../components/ContactForm/ContactForm";
import SearchBox from "../components/SearchBox/SearchBox";
import ContactList from "../components/ContactList/ContactList";
import s from "../App.module.css";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchContacts } from "../redux/contacts/operations";
import toast from "react-hot-toast";

const ContactsPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      <div className={s.wrapper}>
        <h1>Phonebook</h1>
        <div className={s.wrapperSections}>
          <div>
            <ContactForm />
            <SearchBox />
          </div>
          <div className={s.wrapperContacts}>
            <ContactList />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactsPage;

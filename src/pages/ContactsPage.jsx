import ContactForm from "../components/ContactForm/ContactForm";
import SearchBox from "../components/SearchBox/SearchBox";
import ContactList from "../components/ContactList/ContactList";
import s from "../App.module.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchContacts } from "../redux/contacts/operations";
import { selectUser } from "../redux/auth/selectors";
import { Toaster } from "react-hot-toast";

const ContactsPage = () => {
  const dispatch = useDispatch();
  const userName = useSelector(selectUser);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      <Toaster />
      <div className={s.wrapper}>
        <h2 className={s.h2}>{userName.name}, welcome to your Phonebook!</h2>
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

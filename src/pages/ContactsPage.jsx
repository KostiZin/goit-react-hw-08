import ContactForm from "../components/ContactForm/ContactForm";
import SearchBox from "../components/SearchBox/SearchBox";
import ContactList from "../components/ContactList/ContactList";
import s from "../App.module.css";

const ContactsPage = () => {
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
      Hello
    </div>
  );
};

export default ContactsPage;

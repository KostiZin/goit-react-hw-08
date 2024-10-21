import { useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import s from "./ContactList.module.css";
import { ProgressBar } from "react-loader-spinner";
import { selectError, selectLoader } from "../../redux/contacts/selectors";
import { selectFilteredContacts } from "../../redux/contacts/slice";
import { Navigate } from "react-router-dom";
import { selectIsLoggedIn } from "../../redux/auth/selectors";

const ContactList = () => {
  const contacts = useSelector(selectFilteredContacts);
  const isLoading = useSelector(selectLoader);
  const isError = useSelector(selectError);
  const isLoggedIn = useSelector(selectIsLoggedIn);

  if (!isLoggedIn) {
    return <Navigate to="/login" />;
  }

  if (isError) return <h2>Error...Please, reload the page</h2>;

  return isLoading ? (
    <div className={s.wrapperLoader}>
      <ProgressBar
        visible={true}
        height="100"
        width="100"
        ariaLabel="progress-bar-loading"
        barColor="rgb(181, 173, 199)"
        borderColor="#6a3fd7"
      />
    </div>
  ) : (
    <ul className={s.ul}>
      {contacts.map(({ id, name, number }) => (
        <Contact key={id} id={id} name={name} number={number} />
      ))}
    </ul>
  );
};

export default ContactList;

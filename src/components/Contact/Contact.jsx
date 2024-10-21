import s from "./Contact.module.css";
import { FaPhoneAlt } from "react-icons/fa";
import { BsFillPersonFill } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { BsTrash3 } from "react-icons/bs";
import { deleteContacts } from "../../redux/contacts/operations";

const Contact = ({ id, name, number }) => {
  const dispatch = useDispatch();

  return (
    <li className={s.li}>
      <div className={s.div}>
        <p className={s.element}>
          <BsFillPersonFill />
          {name}
        </p>
        <p className={s.element}>
          <FaPhoneAlt />
          {number}
        </p>
      </div>
      <div className="card-actions justify-end tooltip" data-tip="Delete">
        <button
          className="btn btn-ghost "
          onClick={() => dispatch(deleteContacts(id))}
        >
          <BsTrash3 size="18" />
        </button>
      </div>
    </li>
  );
};

export default Contact;

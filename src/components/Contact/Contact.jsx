import css from "./Contact.module.css";
import { FaPhoneAlt } from "react-icons/fa";
import { BsFillPersonFill } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { BsTrash3 } from "react-icons/bs";
import { deleteContacts } from "../../redux/contacts/operations";

const Contact = ({ id, name, number }) => {
  const dispatch = useDispatch();

  return (
    <li className={css.li}>
      <div className={css.div}>
        <p className={css.element}>
          <BsFillPersonFill />
          {name}
        </p>
        <p className={css.element}>
          <FaPhoneAlt />
          {number}
        </p>
      </div>
      <button
        className="btn"
        onClick={() => document.getElementById("my_modal_1").showModal()}
      >
        <BsTrash3 size="20" />
      </button>
      <dialog id="my_modal_1" className="modal">
        <div className="modal-box">
          <p className="py-4">Do you really want to delete this contact?</p>
          <div className={css.wrapperBtn}>
            <button
              onClick={() => dispatch(deleteContacts(id))}
              className="btn btn-outline btn-error"
            >
              Yes
            </button>
            <form method="dialog">
              <button className="btn btn-outline btn-success">No</button>
            </form>
          </div>
          <div className="modal-action"></div>
        </div>
      </dialog>

      {/* ====================  */}
      {/* <button
        className="btn"
        onClick={() => document.getElementById("my_modal_2").showModal()}
      >
        <BsTrash3 size="20" />
      </button>
      <dialog id="my_modal_2" className="modal">
        <div className="modal-box">
          <p className="py-4">Do you really want to delete this contact?</p>
          <button>Close the window</button>
          <button
            className={css.button}
            onClick={() => dispatch(deleteContacts(id))}
          >
            Delete
          </button>
        </div>

        <form method="dialog" className="modal-backdrop">
          <button>x</button>
        </form>
      </dialog> */}
      {/* ===================================== */}
      {/* <button
        className={css.button}
        onClick={() => dispatch(deleteContacts(id))}
      >
        <BsTrash3 size="20" />
      </button> */}
    </li>
  );
};

export default Contact;

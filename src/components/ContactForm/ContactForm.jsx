import { Field, Form, Formik } from "formik";
import s from "./ContactForm.module.css";
import * as Yup from "yup";
import { ErrorMessage } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { addContacts } from "../../redux/contacts/operations";
import { selectError } from "../../redux/contacts/selectors";

const ContactForm = () => {
  const initialValue = {
    number: "",
    name: "",
  };

  const isError = useSelector(selectError);

  const dispatch = useDispatch();

  const formSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, "Name is too short, min 3 symbols")
      .max(50, "Name is too long")
      .required("Name is required")
      .matches(
        /^([A-Za-zА-Яа-я\u00C0-\u00D6\u00D8-\u00f6\u00f8-\u00ff\s]*)$/gi,
        "Name can only contain letters."
      ),
    number: Yup.string()
      .required("A phone number is required")
      .min(5, "A phone number is too short")
      .matches(/^([0]([0-9]+)?|[1-9]([0-9]+)?([0-9]+)?)$/, "Use only numbers"),
  });

  const onSubmit = (values, options) => {
    dispatch(addContacts(values));
    options.resetForm();
  };

  return (
    <div>
      <Formik
        initialValues={initialValue}
        onSubmit={onSubmit}
        validationSchema={formSchema}
      >
        <Form className="p-6 rounded-lg shadow-md max-w-96 min-w-72 bg-slate-200">
          <div className="relative">
            <ErrorMessage className={s.error} name="name" component="span" />
            <label className="input input-bordered flex items-center gap-2 mt-1 bg-slate-100">
              Name
              <Field
                type="text"
                name="name"
                className="grow p-2"
                placeholder="Maria Johson"
              />
            </label>
          </div>
          <div className="relative mt-3">
            <ErrorMessage className={s.error} name="number" component="span" />
            <label className="input input-bordered flex items-center gap-2 mt-1 bg-slate-100">
              Number
              <Field
                type="text"
                name="number"
                className="grow p-2"
                placeholder="8895532698"
              />
            </label>
          </div>
          <button
            className={`${
              !isError
                ? `btn btn-outline btn-primary hover:bg-indogo-800 hover w-full mt-5`
                : `btn-disabled btn btn-outline w-full mt-5`
            }`}
            type="submit"
          >
            Add contact
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default ContactForm;

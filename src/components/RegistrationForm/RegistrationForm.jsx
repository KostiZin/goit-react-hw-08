import { ErrorMessage, Field, Form, Formik } from "formik";
import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/operations";
import * as Yup from "yup";

const RegistrationForm = () => {
  const dispatch = useDispatch();

  const initialValues = {
    name: "",
    email: "",
    password: "",
  };

  const formSchema = Yup.object().shape({
    email: Yup.string()
      .matches(/@[^.]*\./, "Invalid email")
      .email("Invalid email")
      .required("Email is required"),
    name: Yup.string()
      .min(3, "Name is too short, min 3 symbols")
      .max(50, "Name is too long")
      .required("Name is required")
      .matches(
        /^([A-Za-zА-Яа-я\u00C0-\u00D6\u00D8-\u00f6\u00f8-\u00ff\s]*)$/gi,
        "Name can only contain letters."
      ),
    password: Yup.string()
      .required("Password is required")
      .min(7, "Minimum 7 symbols"),
  });

  const handleSubmit = (values, options) => {
    console.log(values);
    dispatch(register(values));
    options.resetForm();
  };

  return (
    <div>
      <div
        className="hero hero-overlay bg-opacity-60 bg-base-200"
        style={{
          backgroundImage:
            "url(https://i.guim.co.uk/img/media/883f90e83ae6c3f4bcbd8f7c564fe96519090fb1/119_0_4996_2999/master/4996.jpg?width=1200&height=900&quality=85&auto=format&fit=crop&s=913f00b0b4d31a7ce246f81975eb92c1)",
          height: "calc(100vh - 80px)",
          width: "100vw",
        }}
      >
        <div className="hero-overlay bg-opacity-70"></div>
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold text-slate-200">
              Create your account
            </h1>
            <p className="py-6 text-slate-200">
              Join us today to start organizing your contacts easily.
            </p>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <Formik
              onSubmit={handleSubmit}
              initialValues={initialValues}
              validationSchema={formSchema}
            >
              <Form className="card-body bg-slate-200 rounded-lg">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Username *</span>
                  </label>
                  <Field
                    name="name"
                    type="text"
                    placeholder="Your name"
                    className="input input-bordered bg-slate-100"
                    required
                  />
                  <ErrorMessage
                    name="name"
                    component="span"
                    className="text-red-600 mt-1"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email *</span>
                  </label>
                  <Field
                    name="email"
                    type="email"
                    placeholder="Email address"
                    className="input input-bordered bg-slate-100"
                    required
                  />
                  <ErrorMessage
                    name="email"
                    component="span"
                    className="text-red-600 mt-1"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password *</span>
                  </label>
                  <Field
                    name="password"
                    type="password"
                    placeholder="Create a password"
                    className="input input-bordered bg-slate-100"
                    required
                  />
                  <ErrorMessage
                    name="password"
                    component="span"
                    className="text-red-600 mt-1"
                  />
                </div>
                <div className="form-control mt-6">
                  <button
                    type="submit"
                    className="btn btn-primary bg-indigo-800 border-indigo-800"
                  >
                    Register
                  </button>
                </div>
              </Form>
            </Formik>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegistrationForm;

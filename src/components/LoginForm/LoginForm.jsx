import { Field, Formik, Form, ErrorMessage } from "formik";
import { logIn } from "../../redux/auth/operations";
import { useDispatch } from "react-redux";
import * as Yup from "yup";
import { Toaster } from "react-hot-toast";

const LoginForm = () => {
  const dispatch = useDispatch();

  const initialValues = {
    email: "",
    password: "",
  };

  const formSchema = Yup.object().shape({
    email: Yup.string()
      .matches(/@[^.]*\./, "Invalid email")
      .email("Invalid email")
      .required("Email is required"),
    password: Yup.string()
      .required("Password is required")
      .min(7, "Minimum 7 symbols"),
  });

  const handleSubmit = (values, options) => {
    dispatch(logIn(values));
    options.resetForm();
  };

  return (
    <div>
      <Toaster />
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
            <h2 className="text-5xl font-bold text-slate-200">
              Log in to your account
            </h2>

            <p className="py-6 text-slate-200">
              Welcome back! Please log in to continue managing your contacts.
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
                    <span className="label-text">Email</span>
                  </label>
                  <Field
                    name="email"
                    type="email"
                    placeholder="Enter your email"
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
                    <span className="label-text">Password</span>
                  </label>
                  <Field
                    name="password"
                    type="password"
                    placeholder="Enter your password"
                    className="input input-bordered bg-slate-100"
                    required
                  />
                  <ErrorMessage
                    name="password"
                    component="span"
                    className="text-red-600 mt-1"
                  />
                  <label className="label">
                    <a
                      // href="#"
                      className="label-text-alt link link-hover"
                    >
                      Forgot password?
                    </a>
                  </label>
                </div>
                <div className="form-control mt-6">
                  <button
                    type="submit"
                    className="btn btn-primary bg-indigo-800 border-indigo-800"
                  >
                    Login
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

export default LoginForm;

import { useReducer, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
// import { actionCreators } from "../../state/index";

type FormState = {
  email: string,
  password: string,
};
type FormAction = {
  type: string,
  payLoad: string,
};
const initialState: FormState = {
  email: "",
  password: "",
};

const formReducer = (state: FormState, action: FormAction): FormState => {
  switch (action.type) {
    case "UPDATE_EMAIL":
      return {
        ...state,
        email: action.payLoad,
      };
    case "UPDATE_PASSWORD":
      return {
        ...state,
        password: action.payLoad,
      };
    default:
      return state;
  }
};

const Register = () => {
  const navigate = useNavigate();
  const [typeShow, type] = useState(true);
  const [formData, setFormData] = useReducer(formReducer, initialState);
  const [emailError, showEmail] = useState("");
  const [passwordError, showPassword] = useState("");
  // const dispatch = useDispatch();

  const loginSubmit = (e) => {
    e.preventDefault();
    if (formData.email.length > 0) {
      showEmail("");
      var emailCheck = !["outlook"].includes(
        formData.email.split("@")[1].split(".")[0]
      );
      if (emailCheck) {
        showEmail("");
        if (formData.password.length > 0) {
          showPassword("");
          const headers = {
            "Content-Type": "application/json",
          };
          axios
            .post(`https://localhost:9000/api/v1/users/login`, formData, {
              headers,
            })
            .then((res) => {
              showPassword("");
              // dispatch(actionCreators.isActive(1));
              navigate("/home");
            })
            .catch((error) => {
              showPassword("Email or password are incorrect");
            });
        } else {
          showPassword("password field is required");
        }
      } else {
        showEmail("please enter email correct email");
      }
    } else {
      showEmail("email field is required");
    }
  };

  const signUp = () => {
    window.location.href = "/register";
  };

  return (
    <div className="w-full h-full min-h-screen p-0 m-0 bg-fixed bg-cover bg-logo">
      <div className="flex flex-col justify-center min-h-screen px-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          <div className="lg:col-span-2"></div>
          <div>
            <h1 className="text-6xl font-bold tracking-wide text-white capitalize md:text-black">
              welcome
            </h1>
            <form onSubmit={loginSubmit}>
              <div className="py-12">
                <div className="grid mt-3">
                  <label className="text-lg font-medium tracking-wider text-black capitalize">
                    email
                  </label>
                  <input
                    required
                    name="email"
                    onChange={(e) =>
                      setFormData({
                        type: "UPDATE_EMAIL",
                        payLoad: e.target.value,
                      })
                    }
                    className="p-3 mt-1 border rounded-lg focus:outline-none border-input-color"
                    placeholder="Enter your email"
                  />
                  {emailError.length > 0 && (
                    <span className="my-2 text-xs font-semibold text-center text-red-600 capitalize">
                      {emailError}
                    </span>
                  )}
                </div>
                <div className="grid mt-3">
                  <label className="text-lg font-medium tracking-wider text-white capitalize md:text-black">
                    password
                  </label>
                  <div className="flex justify-between p-3 mt-1 bg-white border rounded-lg border-input-color">
                    <input
                      required
                      name="password"
                      onChange={(e) =>
                        setFormData({
                          type: "UPDATE_PASSWORD",
                          payLoad: e.target.value,
                        })
                      }
                      type={typeShow ? "password" : "text"}
                      className="w-full focus:outline-none"
                      placeholder="Enter your password"
                    />
                    <i
                      onClick={() => type(!typeShow)}
                      className={`${
                        typeShow ? "fa fa-eye-slash" : "fa fa-eye"
                      } cursor-pointer`}
                    ></i>
                  </div>
                  {passwordError.length > 0 && (
                    <span className="my-2 text-xs font-semibold text-center text-red-600 capitalize">
                      {passwordError}
                    </span>
                  )}
                </div>
              </div>
              <div className="p-4 text-lg font-semibold tracking-wider text-center text-white capitalize bg-black rounded-xl">
                <button type="submit" className="w-full">
                  Login
                </button>
              </div>
            </form>

            <div className="p-4 mt-6 text-lg font-semibold tracking-wider text-center text-white capitalize bg-black rounded-xl">
              <button type="button" onClick={signUp} className="w-full">
                SignUp
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;

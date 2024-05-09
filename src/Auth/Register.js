import { useReducer, useState } from "react";
import axios from "axios";
// import { useNavigate } from "react-router-dom";

type FormState = {
  name: string,
  email: string,
  password: string,
  passwordConfirm: string,
  tags: array,
};
type FormAction = {
  type: string,
  payLoad: string,
};
const initialState: FormState = {
  name: "",
  email: "",
  password: "",
  passwordConfirm: "",
  tags: [],
};

const formReducer = (state: FormState, action: FormAction): FormState => {
  switch (action.type) {
    case "UPDATE_NAME":
      return {
        ...state,
        name: action.payLoad,
      };
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
    case "UPDATE_CONFIRM":
      return {
        ...state,
        passwordConfirm: action.payLoad,
      };
    case "UPDATE_TAGS":
      return {
        ...state,
        tags: action.payLoad,
      };
    default:
      return state;
  }
};

const Register = () => {
  // const navigate = useNavigate();
  const [step, addStep] = useState(1);
  const [typeShow, type] = useState(true);
  const [typeConfirmShow, typeConfirm] = useState(true);
  const [tags, setTags] = useState([]);
  const [formData, setFormData] = useReducer(formReducer, initialState);
  const [nameError, showName] = useState("");
  const [emailError, showEmail] = useState("");
  const [passwordError, showPassword] = useState("");
  // const [tagError, showTag] = useState('');

  const registerSubmit = (e) => {
    e.preventDefault();
    if (
      formData.name.length > 0 &&
      formData.email.length > 0 &&
      formData.password.length > 0 &&
      formData.passwordConfirm.length > 0
      //   tags.length > 0
    ) {
      if (formData.name.length > 0) {
        showName("");
        if (formData.email.length > 0) {
          showEmail("");
          var emailCheck = !["look"].includes(
            formData.email.split("@")[1].split(".")[0]
          );
          if (emailCheck) {
            showEmail("");
            if (
              formData.password.length > 7 &&
              formData.passwordConfirm.length > 7
            ) {
              showPassword("");
              if (formData.password === formData.passwordConfirm) {
                showPassword("");
                const headers = {
                  "Content-Type": "application/json",
                };
                // formData["tags"] = tags;
                axios
                  .post(`http://localhost:9000/api/v1/users/signup`, formData, {
                    headers,
                  })
                  .then((res) => {
                    console.log(res);
                  });
              } else {
                showPassword("password must be same");
              }
            } else {
              showPassword("password must consist of min 8 character");
            }
          } else {
            showEmail("please enter correct email");
          }
        } else {
          showEmail("this field is required");
        }
      } else {
        showName("this field is required");
      }
    }
  };

  const twitterLogin = () => {
    // eslint-disable-next-line jsx-a11y/anchor-is-valid
    window.location.href =
      "https://de-collab-backend-production.up.railway.app/auth/twitter";
  };

  const handleKeyDown = (e) => {
    if (e.key !== "Enter") return;
    const value = e.target.value;
    setTags([...tags, value]);
    e.target.value = "";
    e.preventDefault();
  };

  const removeTag = (index) => {
    setTags(tags.filter((el, i) => i !== index));
  };

  function setValue() {
    var myVariable = document.forms["myform"]["tags"].value;
    if (myVariable.length > 0) {
      setTags([...tags, myVariable]);
      document.forms["myform"]["tags"].value = "";
    }
  }

  return (
    <div className="w-full h-full min-h-screen p-0 m-0 bg-fixed bg-cover bg-logo">
      <div className="flex flex-col justify-center min-h-screen px-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          <div className="lg:col-span-2"></div>
          <div>
            <h1 className="text-6xl font-bold tracking-wide text-white capitalize md:text-black">
              welcome
            </h1>
            <form name="myform" onSubmit={registerSubmit}>
              {step === 1 && (
                <div className="py-12">
                  <div className="grid">
                    <label className="text-lg font-medium tracking-wider text-black capitalize">
                      name
                    </label>
                    <input
                      required
                      name="name"
                      onChange={(e) =>
                        setFormData({
                          type: "UPDATE_NAME",
                          payLoad: e.target.value,
                        })
                      }
                      className="p-3 mt-1 border rounded-lg focus:outline-none border-input-color"
                      placeholder="Enter your name"
                    />
                    {nameError.length > 0 && (
                      <span className="my-2 text-xs font-semibold text-center text-red-600 capitalize">
                        {nameError}
                      </span>
                    )}
                  </div>
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
                      placeholder="Enter your  email"
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
                  </div>
                  <div className="grid mt-3">
                    <label className="text-lg font-medium tracking-wider text-white capitalize md:text-black">
                      confirm password
                    </label>
                    <div className="flex justify-between p-3 mt-1 bg-white border rounded-lg border-input-color">
                      <input
                        required
                        name="passwordConfirm"
                        onChange={(e) =>
                          setFormData({
                            type: "UPDATE_CONFIRM",
                            payLoad: e.target.value,
                          })
                        }
                        type={typeConfirmShow ? "password" : "text"}
                        className="w-full focus:outline-none"
                        placeholder="Confirm your password"
                      />
                      <i
                        onClick={() => typeConfirm(!typeConfirmShow)}
                        className={
                          (typeConfirmShow ? "fa fa-eye-slash" : "fa fa-eye") +
                          " cursor-pointer"
                        }
                      ></i>
                    </div>
                    {passwordError.length > 0 && (
                      <span className="my-2 text-xs font-semibold text-center text-red-600 capitalize">
                        {passwordError}
                      </span>
                    )}
                  </div>
                  <div className="grid mt-3">
                    {/* <label className="text-lg font-medium tracking-wider text-black">
                      Add relevant tags
                    </label> */}
                    {/* <div className="flex flex-wrap items-center gap-2 p-3 mt-1 bg-white border rounded-lg focus:outline-none border-input-color">
                      {tags.map((tag, index) => (
                        <div
                          className="rounded border-[#2296D7] border-2 text-[#2296D7] px-2 py-1 inline-block bg-tag-color"
                          key={index}
                        >
                          <span className="text">#{tag}</span>
                          <span
                            className="h-5 w-5 bg-[#2296D7] text-white rounded-full inline-flex justify-center items-center ml-2 cursor-pointer"
                            onClick={() => removeTag(index)}
                          >
                            &times;
                          </span>
                        </div>
                      ))}
                      <input
                        name="tags"
                        onChange={(e) =>
                          setFormData({
                            type: "UPDATE_TAGS",
                            payLoad: e.target.value,
                          })
                        }
                        onKeyDown={handleKeyDown}
                        type="text"
                        className="flex-grow py-2 focus:outline-none"
                        placeholder="Type tags"
                      />
                      <button
                        className="bg-black text-white rounded-full pt-0 px-2 pb-0.5"
                        onClick={setValue}
                      >
                        +
                      </button>
                    </div> */}
                    {/* { tagError.length > 0 && 
                                            <span className="my-2 text-xs font-semibold text-center text-red-600 capitalize">{ tagError }</span>
                                        } */}
                    {/* <h1 className="mt-2 text-lg font-medium tracking-wider text-black">
                      What are tags?
                    </h1> */}
                  </div>
                  <div
                    className={`w-full p-4 mt-6 text-lg font-semibold tracking-wider text-center text-white capitalize bg-black rounded-xl`}
                  >
                    <button type="submit" className="w-full">
                      Next
                    </button>
                  </div>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;

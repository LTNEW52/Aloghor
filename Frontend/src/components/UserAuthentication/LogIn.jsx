import EmailIcon from "../../assets/envelope-solid.svg";
import PasswordIcon from "../../assets/lock-solid.svg";
import EyeOpen from "../../assets/eye-solid.svg";
import EyeClose from "../../assets/eye-slash-solid.svg";
import GoogleIcon from "../../assets/google-brands.svg";
import crossIcon from "../../assets/xmark-solid.svg";
import tickIcon from "../../assets/check-solid.svg";
import { useState } from "react";

const Login = (props) => {
  const [eyeOpen, setEyeOpen] = useState(false);

  const [email, setEmail] = useState("");
  const [validEmail, setValidEmail] = useState("");
  const [showEmailValid, setShowEmailValid] = useState(false);
  const [emailValid, setEmailValid] = useState(false);

  const [password, setPassword] = useState("");
  const [validPassword, setValidPassword] = useState("");
  const [showPassValid, setShowPassValid] = useState(false);
  const [passValid, setPassValid] = useState(false);

  const [validationError, setValidationError] = useState("");
  const [showValidationError, setShowValidationError] = useState(false);

  return (
    <div className="w-[40%] h-[100%] textGreen rounded py-5">
      <div className="flex flex-row w-fit h-fit cursor-default italic">
        <img src="../public/Image/Logo.png" alt="Aloghor Logo" className="w-[18%]" />
        <div className="p-5 -ml-6 font-bold">
          <h1 className="text-5xl">আলোঘর</h1>
          <h3 className="text-1xl  text-right">বই পড়ার, নতুন ঠিকানা</h3>
        </div>
      </div>

      <div>
        <div className="h-[80%]">
          <div className="p-8 font-medium">
            <h1 className="text-6xl">আপনাকে স্বাগতম!</h1>
            <h1 className="text-2xl">আপনার একাউন্টে প্রবেশ করুন</h1>
          </div>

          <div className="p-10 h-fit flex flex-col items-center relative text-golden ">
            <label
              htmlFor="email"
              className="absolute top-[7.7%] left-35 text-[1.3rem] font-medium px-2 mixedColor"
            >
              ইমেইল
            </label>
            <img src={EmailIcon} alt="Email Icon" className="absolute w-[3.5%] top-[16%] left-44" />
            <input
              type="email"
              required
              pattern="\S+@\S+\.\S+"
              placeholder="এখানে আপনার ইমেইল দিন"
              onChange={(e) => {
                setEmail(e.target.value);
                if (/\S+@\S+\.\S+/.test(e.target.value)) {
                  setValidEmail(e.target.value);
                  setEmailValid(true);
                } else if (e.target.value != "") {
                  setEmailValid(false);
                  setShowEmailValid(true);
                } else {
                  setEmailValid(false);
                  setShowEmailValid(false);
                }
              }}
              className="bg-white w-[70%] h-[50px] mb-15 border-1 hover:border-3 focus:border-3 rounded-lg text-[1.3rem] pl-23"
            />
            <img
              src={!emailValid ? crossIcon : tickIcon}
              className={`absolute w-[3%] top-[15%] right-23 ${showEmailValid ? "" : "hidden"}`}
            />
            <label
              htmlFor="password"
              className="absolute top-[41.3%] left-35 text-[1.3rem] font-medium px-2 mixedColor bg-white"
            >
              পাসওয়ার্ড
            </label>
            <img
              src={PasswordIcon}
              alt="Password Icon"
              className="absolute w-[3%] top-[49%] left-45.5"
            />
            <input
              type={eyeOpen ? "text" : "password"}
              required
              minLength={6}
              placeholder="এখানে আপনার পাসওয়ার্ড দিন"
              onChange={(e) => {
                setPassword(e.target.value);
                if (e.target.value.length >= 8) {
                  setValidPassword(e.target.value);
                  setPassValid(true);
                } else if (e.target.value != "") {
                  setPassValid(false);
                  setShowPassValid(true);
                } else {
                  setPassValid(false);
                  setShowPassValid(false);
                }
              }}
              className="w-[70%] h-[50px] bg-white mb-10 border-1 hover:border-3 focus:border-3 rounded-lg text-[1.3rem] pl-23"
            />
            <button
              className="w-[4%] absolute top-[49%] right-23 hover:w-[5%] cursor-pointer"
              onClick={() => setEyeOpen(!eyeOpen)}
            >
              <img src={eyeOpen ? EyeOpen : EyeClose} alt="Password Hidden" />
            </button>
            <img
              src={!passValid ? crossIcon : tickIcon}
              className={`absolute w-[3%] top-[48.5%] right-14 ${showPassValid ? "" : "hidden"}`}
            />

            <button
              className="w-[50%] h-[50px] backgroundGreen textGolden text-2xl border-none rounded-lg hover:text-3xl font-medium cursor-pointer"
              onClick={() => {
                if (
                  email != "" &&
                  password != "" &&
                  email == validEmail &&
                  password == validPassword
                ) {
                  console.log(validEmail, validPassword);
                  setValidationError("আপনি সফলভাবে নিবন্ধন সম্পন্ন করেছেন");
                  setShowValidationError(false);
                } else {
                  setValidationError("অনুগ্রহ করে সব ও সঠিক তথ্য দিন");
                  setShowValidationError(true);
                }
              }}
            >
              সাইন ইন
            </button>
          </div>

          <hr className="w-[70%] m-auto mt-6" />

          <div className="flex flex-col justify-center items-center">
            <h1 className="text-2xl -mt-[2.5%] backgroundGolden px-[3%] font-medium">অথবা</h1>
            <button className="w-[45%] h-[50px] border-none mt-10 text-[1.3rem] backgroundGreen textGolden rounded-lg font-bold hover:text-2xl cursor-pointer">
              <img src={GoogleIcon} alt="Google Icon" className="w-[7%] mb-[2%] mr-1 inline" /> গুগল
              দিয়ে প্রবেশ করুন
            </button>
          </div>

          <div
            className={`${showValidationError ? "text-red-500 " : "text-green-500"} text-center text-[1.3rem] h-[35px] mt-8`}
          >
            {validationError}
          </div>
          <h1 className="text-right text-[1.3rem] font-medium mt-5 mr-8">
            নতুন অতিথি?{" "}
            <button
              className="hover:underline hover:text-2xl cursor-pointer"
              onClick={props.toggleForm}
            >
              আমাদের সাথে যোগ দিন
            </button>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Login;

// Login page contains standard login form. Also have option for login with google.

// In future should add remember me, when I will start backend.

// validate information for backend connection.

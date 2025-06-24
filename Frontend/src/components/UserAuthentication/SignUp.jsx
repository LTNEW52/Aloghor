import EmailIcon from "../../assets/envelope-solid.svg";
import PasswordIcon from "../../assets/lock-solid.svg";
import NameIcon from "../../assets/user-solid.svg";
import UsernameIcon from "../../assets/at-solid.svg";
import EyeOpen from "../../assets/eye-solid.svg";
import EyeClose from "../../assets/eye-slash-solid.svg";
import crossIcon from "../../assets/xmark-solid.svg";
import tickIcon from "../../assets/check-solid.svg";
import { useEffect, useState } from "react";

const SignUp = (props) => {
  const [eyeOpen, setEyeOpen] = useState(false);
  const [confirmEyeOpen, setConfirmEyeOpen] = useState(false);

  const [name, setName] = useState("");
  const [validName, setValidName] = useState("");
  const [showNameValid, setShowNameValid] = useState(false);
  const [nameValid, setNameValid] = useState(false);

  const [userName, setUserName] = useState("");
  const [validUserName, setValidUserName] = useState("");
  const [showUserNameValid, setShowUserNameValid] = useState(false);
  const [userNameValid, setUserNameValid] = useState(false);

  const [email, setEmail] = useState("");
  const [validEmail, setValidEmail] = useState("");
  const [showEmailValid, setShowEmailValid] = useState(false);
  const [emailValid, setEmailValid] = useState(false);

  const [password, setPassword] = useState("");
  const [validPassword, setValidPassword] = useState("");
  const [showPassValid, setShowPassValid] = useState(false);
  const [passValid, setPassValid] = useState(false);

  const [rePassword, setRePassword] = useState("");
  const [validRePassword, setValidRePassword] = useState("");
  const [showRePassValid, setShowRePassValid] = useState(false);
  const [rePassValid, setRePassValid] = useState(false);

  useEffect(() => {
    if (password == rePassword) {
      setValidRePassword(rePassword);
      setRePassValid(true);
    } else if (password != rePassword && rePassword != "") {
      setShowRePassValid(true);
      setRePassValid(false);
    } else {
      setShowRePassValid(false);
      setRePassValid(false);
    }
  }, [password, rePassword]);

  const [validationError, setValidationError] = useState("");
  const [showValidationError, setShowValidationError] = useState(false);

  return (
    <div className="w-[40%] h-[100%] textGreen rounded px-5">
      <div className="flex flex-row w-fit h-fit cursor-default italic">
        <img src="../public/Image/Logo.png" alt="Aloghor Logo" className="w-[18%]" />
        <div className="p-5 -ml-6 font-bold">
          <h1 className="text-5xl">আলোঘর</h1>
          <h3 className="text-1xl  text-right">বই পড়ার, নতুন ঠিকানা</h3>
        </div>
      </div>

      <div>
        <div className="h-[80%]">
          <div className="px-8 py-4 font-medium">
            <h1 className="text-5xl">একটি একাউন্ট তৈরি করুন</h1>
          </div>

          <div className="p-10 h-fit flex flex-col items-center relative text-golden">
            <label
              htmlFor="text"
              className="absolute top-[4.2%] left-35 text-[1.2rem] font-medium px-2 mixedColor bg-white"
            >
              নাম
            </label>
            <img src={NameIcon} alt="Name Icon" className="absolute w-[3%] top-[8%] left-44" />
            <input
              type="text"
              placeholder="নাম ৪ - ৪০ অক্ষরের মধ্যে হতে হবে"
              onChange={(e) => {
                setName(e.target.value);
                if (e.target.value.length >= 4 && e.target.value.length <= 40) {
                  setValidName(e.target.value);
                  setNameValid(true);
                } else if (e.target.value != "") {
                  setNameValid(false);
                  setShowNameValid(true);
                } else {
                  setNameValid(false);
                  setShowNameValid(false);
                }
              }}
              className=" w-[70%] h-[50px] mb-12 bg-white border-1 hover:border-3 focus:border-3 rounded-lg text-[1.3rem] pl-23 placeholder:text-[1.2rem]"
            />
            <img
              src={!nameValid ? crossIcon : tickIcon}
              className={`absolute w-[3%] top-[8%] right-23 ${showNameValid ? "" : "hidden"}`}
            />
            <label
              htmlFor="text"
              className="absolute top-[20%] left-35 text-[1.2rem] font-medium px-2 mixedColor bg-white"
            >
              ইউজারনেম
            </label>
            <img
              src={UsernameIcon}
              alt="Username Icon"
              className="absolute w-[3%] top-[24.5%] left-44"
            />
            <input
              type="text"
              placeholder="ইউজারনেম ৪ - ২০ অক্ষরের মধ্যে হতে হবে"
              onChange={(e) => {
                setUserName(e.target.value);
                if (e.target.value.length >= 4 && e.target.value.length <= 20) {
                  setValidUserName(e.target.value);
                  setUserNameValid(true);
                } else if (e.target.value != "") {
                  setUserNameValid(false);
                  setShowUserNameValid(true);
                } else {
                  setUserNameValid(false);
                  setShowUserNameValid(false);
                }
              }}
              className=" w-[70%] h-[50px] bg-white mb-12 border-1 hover:border-3 focus:border-3 rounded-lg text-[1.3rem] pl-23 placeholder:text-[1.2rem]"
            />
            <img
              src={!userNameValid ? crossIcon : tickIcon}
              className={`absolute w-[3%] top-[24.5%] right-23 ${showUserNameValid ? "" : "hidden"}`}
            />
            <label
              htmlFor="email"
              className="absolute top-[35.8%] left-35 text-[1.2rem] font-medium mixedColor px-2 bg-white"
            >
              ইমেইল
            </label>
            <img src={EmailIcon} alt="Email Icon" className="absolute w-[3.5%] top-[40%] left-44" />
            <input
              type="email"
              placeholder="আপনার ইমেইলে @ এবং . থাকতে হবে"
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
              className=" w-[70%] h-[50px] bg-white mb-12 border-1 hover:border-3 focus:border-3 rounded-lg text-[1.3rem] pl-23 placeholder:text-[1.2rem]"
            />
            <img
              src={!emailValid ? crossIcon : tickIcon}
              className={`absolute w-[3%] top-[40%] right-23 ${showEmailValid ? "" : "hidden"}`}
            />
            <label
              htmlFor="password"
              className="absolute top-[51.7%] left-35 text-[1.2rem] font-medium px-2 mixedColor bg-white"
            >
              পাসওয়ার্ড
            </label>
            <img
              src={PasswordIcon}
              alt="Password Icon"
              className="absolute w-[3%] top-[55.5%] left-44"
            />
            <input
              type={eyeOpen ? "text" : "password"}
              required
              minLength={6}
              placeholder="পাসওয়ার্ড অন্তত ৮ অক্ষরের হতে হবে এবং"
              title="একটি বড় হাতের অক্ষর, একটি ছোট হাতের অক্ষর, একটি সংখ্যা এবং একটি বিশেষ চিহ্ন থাকতে হবে"
              onChange={(e) => {
                setPassword(e.target.value);
                if (
                  /[A-Z]/.test(e.target.value) &&
                  /[a-z]/.test(e.target.value) &&
                  /[0-9]/.test(e.target.value) &&
                  /[!@#$%&*?]/.test(e.target.value) &&
                  e.target.value.length >= 8
                ) {
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
              className="w-[70%] h-[50px] mb-12 border-1 bg-white hover:border-3 focus:border-3 rounded-lg text-[1.3rem] pl-23 placeholder:text-[1.2rem]"
            />
            <button
              className="w-[4%] absolute top-[56%] right-22 hover:w-[5%] cursor-pointer"
              onClick={() => setEyeOpen(!eyeOpen)}
            >
              <img src={eyeOpen ? EyeOpen : EyeClose} alt="Password Hidden" />
            </button>
            <img
              src={!passValid ? crossIcon : tickIcon}
              className={`absolute w-[3%] top-[55.5%] right-14 ${showPassValid ? "" : "hidden"}`}
            />
            <label
              htmlFor="password"
              className="absolute top-[67.5%] left-35 text-[1.2rem] font-medium px-2 mixedColor bg-white"
            >
              পুনরায় পাসওয়ার্ড
            </label>
            <img
              src={PasswordIcon}
              alt="Password Icon"
              className="absolute w-[3%] top-[71%] left-44"
            />
            <input
              type={confirmEyeOpen ? "text" : "password"}
              required
              minLength={6}
              placeholder="আপনার পাসওয়ার্ড নিশ্চিত করুন"
              onChange={(e) => setRePassword(e.target.value)}
              className="w-[70%] h-[50px] mb-12 border-1 hover:border-3 focus:border-3 bg-white rounded-lg text-[1.3rem] pl-23"
            />
            <button
              className="w-[4%] absolute top-[72%] right-22 hover:w-[5%] cursor-pointer"
              onClick={() => setConfirmEyeOpen(!confirmEyeOpen)}
            >
              <img src={confirmEyeOpen ? EyeOpen : EyeClose} alt="Password Hidden" />
            </button>
            <img
              src={!rePassValid ? crossIcon : tickIcon}
              className={`absolute w-[3%] top-[71.5%] right-14 ${showRePassValid ? "" : "hidden"}`}
            />

            <button
              className="w-[50%] h-[50px] backgroundGreen textGolden text-2xl border-none rounded-lg hover:text-3xl font-medium cursor-pointer"
              onClick={() => {
                if (
                  validName != "" &&
                  validName == name &&
                  validUserName != "" &&
                  validUserName == userName &&
                  validEmail != "" &&
                  validEmail == email &&
                  validPassword != "" &&
                  validPassword == password &&
                  validRePassword != "" &&
                  validRePassword == rePassword &&
                  password == rePassword &&
                  validPassword == validRePassword
                ) {
                  console.log(validName, validUserName, validEmail, validPassword);
                  setValidationError("আপনি সফলভাবে নিবন্ধন সম্পন্ন করেছেন");
                  setShowValidationError(false);
                } else {
                  setValidationError("অনুগ্রহ করে সব ও সঠিক তথ্য দিন");
                  setShowValidationError(true);
                }
              }}
            >
              নিবন্ধন করুন
            </button>
          </div>

          <div
            className={`${showValidationError ? "text-red-500 " : "text-green-500"} text-center text-[1.3rem] -mt-5 h-[35px]`}
          >
            {validationError}
          </div>
          <h1 className="text-left text-[1.3rem] ml-12 font-medium my-5">
            আগেই সদস্য হয়েছেন?{" "}
            <button
              className="hover:underline hover:text-2xl cursor-pointer"
              onClick={props.toggleForm}
            >
              এখনই লগইন করুন
            </button>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default SignUp;

// Again Standard Signup form. May add new things in future.

// /\S+@\S+\.\S+/ -> this is a regex, it checks if email have atleast a character @ atleast a character . then atleast a character.

// First interesting problem was comparing pass and repass. If we check repass, then we change pass, it doesnt go to effect. So, we used useEffect, which goes effect when pass and repass changes.

// Second interesting problem was 1 character lag behind. So if we update and then use the update to validate, it is always 1 character behind. So instead of using update, we used current value to validate.

// All are ok from frontend part, now we just have to connect to backend.

// May need to work on sanitization in future.

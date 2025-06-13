import EmailIcon from "../../assets/envelope-solid.svg";
import PasswordIcon from "../../assets/lock-solid.svg";
import NameIcon from "../../assets/user-solid.svg";
import UsernameIcon from "../../assets/at-solid.svg";
import EyeOpen from "../../assets/eye-solid.svg";
import EyeClose from "../../assets/eye-slash-solid.svg";
import { useState } from "react";

const SignUp = (props) => {
  const [eyeOpen, setEyeOpen] = useState(false);
  const [confirmEyeOpen, setConfirmEyeOpen] = useState(false);

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
          <div className="px-8 py-6 font-medium">
            <h1 className="text-5xl">একটি একাউন্ট তৈরি করুন</h1>
          </div>

          <div className="p-10 h-fit flex flex-col items-center relative text-golden">
            <label
              htmlFor="text"
              className="absolute top-[4%] left-35 text-[1.3rem] font-medium px-2 mixedColor bg-white"
            >
              নাম
            </label>
            <img src={NameIcon} alt="Email Icon" className="absolute w-[3%] top-[8%] left-44" />
            <input
              type="text"
              placeholder="এখানে আপনার নাম লিখুন"
              className=" w-[70%] h-[50px] mb-12 bg-white border-1 hover:border-3 focus:border-3 rounded-lg text-[1.3rem] pl-23"
            />
            <label
              htmlFor="text"
              className="absolute top-[19.8%] left-35 text-[1.3rem] font-medium px-2 mixedColor bg-white"
            >
              ইউজারনেম
            </label>
            <img
              src={UsernameIcon}
              alt="Email Icon"
              className="absolute w-[3%] top-[24.5%] left-44"
            />
            <input
              type="text"
              placeholder="এখানে আপনার ইউজারনেম দিন"
              className=" w-[70%] h-[50px] bg-white mb-12 border-1 hover:border-3 focus:border-3 rounded-lg text-[1.3rem] pl-23"
            />
            <label
              htmlFor="email"
              className="absolute top-[35.6%] left-35 text-[1.3rem] font-medium mixedColor px-2 bg-white"
            >
              ইমেইল
            </label>
            <img src={EmailIcon} alt="Email Icon" className="absolute w-[3.5%] top-[40%] left-44" />
            <input
              type="email"
              placeholder="এখানে আপনার ইমেইল দিন"
              className=" w-[70%] h-[50px] bg-white mb-12 border-1 hover:border-3 focus:border-3 rounded-lg text-[1.3rem] pl-23"
            />
            <label
              htmlFor="password"
              className="absolute top-[51.4%] left-35 text-[1.3rem] font-medium px-2 mixedColor bg-white"
            >
              পাসওয়ার্ড
            </label>
            <img
              src={PasswordIcon}
              alt="Password Icon"
              className="absolute w-[3%] top-[55.5%] left-45.5"
            />
            <input
              type={eyeOpen ? "text" : "password"}
              placeholder="এখানে আপনার পাসওয়ার্ড দিন"
              className="w-[70%] h-[50px] mb-12 border-1 bg-white hover:border-3 focus:border-3 rounded-lg text-[1.3rem] pl-23"
            />
            <button
              className="w-[4%] absolute top-[56%] right-23 hover:w-[5%] cursor-pointer"
              onClick={() => setEyeOpen(!eyeOpen)}
            >
              <img src={eyeOpen ? EyeOpen : EyeClose} alt="Password Hidden" />
            </button>
            <label
              htmlFor="password"
              className="absolute top-[67.2%] left-35 text-[1.3rem] font-medium px-2 mixedColor bg-white"
            >
              পুনরায় পাসওয়ার্ড
            </label>
            <img
              src={PasswordIcon}
              alt="Password Icon"
              className="absolute w-[3%] top-[71%] left-45.5"
            />
            <input
              type={confirmEyeOpen ? "text" : "password"}
              placeholder="আপনার পাসওয়ার্ড নিশ্চিত করুন"
              className="w-[70%] h-[50px] mb-12 border-1 hover:border-3 focus:border-3 bg-white rounded-lg text-[1.3rem] pl-23"
            />
            <button
              className="w-[4%] absolute top-[72%] right-23 hover:w-[5%] cursor-pointer"
              onClick={() => setConfirmEyeOpen(!confirmEyeOpen)}
            >
              <img src={confirmEyeOpen ? EyeOpen : EyeClose} alt="Password Hidden" />
            </button>

            <button className="w-[50%] h-[50px] backgroundGreen textGolden text-2xl border-none rounded-lg hover:text-3xl font-medium cursor-pointer">
              নিবন্ধন করুন
            </button>
          </div>

          <h1 className="text-left text-[1.3rem] -mt-3 ml-12 font-medium">
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

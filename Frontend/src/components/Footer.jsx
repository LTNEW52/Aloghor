import { useLocation } from "react-router-dom";
import EmailIcon from "../assets/envelope-solid.svg";
import PhoneIcon from "../assets/phone-solid.svg";
import LocationIcon from "../assets/location-dot-solid.svg";
import FacebookIcon from "../assets/facebook-brands.svg";
import XIcon from "../assets/x-twitter-brands.svg";
import RedditIcon from "../assets/reddit-brands.svg";

const Footer = () => {
  const date = new Date();

  const location = useLocation(); // Stores Current Location
  const homePage = "/";

  return (
    <>
      <div
        className={` ${location.pathname == homePage ? "w-[50%] h-[320px] ml-[7%] -mt-[18%]" : "w-[70%] h-[300px] ml-[10%]"} " textGreen backgroundGolden z-10 rounded-3xl border-none boxShadowright" `}
      >
        <div className="h-[90%] flex flex-row justify-evenly">
          <div className="w-[45%] h-[100%] flex flex-col justify-evenly">
            <h1 className="text-4xl pl-[23%] underline">যোগাযোগ করুন</h1>
            <h1 className="text-[22px] ml-6 hover:text-2xl hover:underline pl-[20%]">
              <a href="mailto:aloghor@gmail.com">
                <img src={EmailIcon} alt="Email Icon" className="w-[7%] inline mr-2" />{" "}
                aloghor@gmail.com
              </a>
            </h1>
            <h1 className="text-[22px] ml-6 pl-[20%]">
              <img src={PhoneIcon} alt="Phone Icon" className="w-[7%] inline mr-2" /> ০১XXXXXXXXX
            </h1>
            <h1 className="text-[22px] ml-6 pl-[20%]">
              <img src={LocationIcon} alt="Location Icon" className="w-[7%] inline mr-2" /> ঢাকা,
              বাংলাদেশ
            </h1>
          </div>

          <div className="w-[45%] h-[100%] flex flex-col justify-evenly">
            <h1 className="text-4xl pl-[23%] underline">অনুসরন করুন</h1>
            <h1 className="text-[22px] ml-10 hover:text-2xl hover:underline pl-[20%]">
              <a href="https://www.facebook.com/profile.php?id=100078409717405" target="blank">
                <img src={FacebookIcon} alt="Facebook Icon" className="w-[7%] inline mr-2" />{" "}
                আলোঘর{" "}
              </a>
            </h1>
            <h1 className="text-[22px] ml-10 hover:text-2xl hover:underline pl-[20%]">
              <a href="https://x.com/LabibT" target="blank">
                <img src={XIcon} alt="Twitter Icon" className="w-[7%] inline mr-2" /> @Aloghor
              </a>
            </h1>
            <h1 className="text-[22px] ml-10 hover:text-2xl hover:underline pl-[20%]">
              <a href="https://www.reddit.com/user/LTNEW52/" target="blank">
                <img src={RedditIcon} alt="Reddit Icon" className="w-[7%] inline mr-2" /> u/Aloghor
              </a>
            </h1>
          </div>
        </div>

        <h1 className="text-1xl flex flex-row justify-center">
          © {date.getFullYear()} আলোঘর. সমস্ত অধিকার সংরক্ষিত. তৈরি করেছেন লাবীব তাহ্‌মিদ, কাওসার
          আহমেদ এবং জিনেদিন হাসান জিদান.
        </h1>
      </div>
    </>
  );
};

export default Footer;

// Standard Footer page, nothing fancy!

// UPDATE: Had to do more work, first fixed the copyright, took it and replaced it in another div, removing absolute and used flex flex-row.

// The problem was, at first it was only for home. So when added in App.jsx, it broke, because of course it was made for home only. So removed the relative and absolute, and added margin left and minus margin top to align footer better.

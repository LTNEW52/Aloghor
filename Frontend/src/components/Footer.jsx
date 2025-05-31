import { useLocation } from "react-router-dom"

const Footer = () => {

    const date = new Date()

    const location = useLocation() // Stores Current Location
    const homePage = "/"

    return (
        <>
            <div className = {` ${location.pathname == homePage ? "w-[50%] h-[320px]" : "w-[75%] h-[300px]" } " textGreen backgroundGolden z-10 rounded-3xl border-none ml-[7%] -mt-[18%] boxShadowright " `} >
                <div className="h-[90%] flex flex-row justify-evenly">
                    <div className="w-[45%] h-[100%] flex flex-col justify-evenly">
                        <h1 className="text-4xl pl-[23%] underline">যোগাযোগ করুন</h1>
                        <h1 className="text-[22px] ml-6 hover:text-2xl hover:underline pl-[20%]"><a href="mailto:aloghor@gmail.com"><i class="fa-solid fa-envelope pr-2"></i> aloghor@gmail.com</a></h1>
                        <h1 className="text-[22px] ml-6 pl-[20%]"><i class="fa-solid fa-phone pr-2"></i> ০১XXXXXXXXX</h1>
                        <h1 className="text-[22px] ml-6 pl-[20%]"><i class="fa-solid fa-location-dot pr-2"></i> ঢাকা, বাংলাদেশ</h1>
                    </div>

                    <div className="w-[45%] h-[100%] flex flex-col justify-evenly">
                        <h1 className="text-4xl pl-[23%] underline">অনুসরন করুন</h1>
                        <h1 className="text-[22px] ml-10 hover:text-2xl hover:underline pl-[20%]"><a href="https://www.facebook.com/profile.php?id=100078409717405" target="blank"><i class="fa-brands fa-facebook pr-2"></i> আলোঘর </a></h1>
                        <h1 className="text-[22px] ml-10 hover:text-2xl hover:underline pl-[20%]"><a href="https://x.com/LabibT" target="blank"><i class="fa-brands fa-x-twitter pr-2"></i> @Aloghor</a></h1>
                        <h1 className="text-[22px] ml-10 hover:text-2xl hover:underline pl-[20%]"><a href="https://www.reddit.com/user/LTNEW52/" target="blank"><i class="fa-brands fa-reddit pr-2"></i> u/Aloghor</a></h1>
                    </div>
                </div>

                <h1 className="text-1xl flex flex-row justify-center">© {date.getFullYear()} আলোঘর. সমস্ত অধিকার সংরক্ষিত. তৈরি করেছেন লাবীব তাহ্‌মিদ, কাওসার আহমেদ এবং জিনেদিন হাসান জিদান.</h1>
            </div>
        </>
    )
}

export default Footer

// Standard Footer page, nothing fancy!

// UPDATE: Had to do more work, first fixed the copyright, took it and replaced it in another div, removing absolute and used flex flex-row.

// The problem was, at first it was only for home. So when added in App.jsx, it broke, because of course it was made for home only. So removed the relative and absolute, and added margin left and minus margin top to align footer better.
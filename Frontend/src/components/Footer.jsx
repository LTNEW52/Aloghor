const Footer = () => {

     const date = new Date()

    return (
        <>
            <div className="w-[50%] h-[320px] backgroundGolden absolute top-[53%] left-[7%] z-10 rounded-3xl border-none flex flex-row justify-evenly">
                <div className="w-[40%] h-[100%] px-10 flex flex-col justify-evenly">
                    <h1 className="text-4xl text-center underline">যোগাযোগ করুন</h1>
                    <h1 className="text-[22px] ml-6 hover:text-2xl hover:underline"><a href="mailto:aloghor@gmail.com"><i class="fa-solid fa-envelope"></i> aloghor@gmail.com</a></h1>
                    <h1 className="text-[22px] ml-6"><i class="fa-solid fa-phone"></i> ০১XXXXXXXXX</h1>
                    <h1 className="text-[22px] ml-6"><i class="fa-solid fa-location-dot"></i> ঢাকা, বাংলাদেশ</h1>
                </div>

                <div className="w-[40%] h-[100%] px-10 flex flex-col justify-evenly">
                    <h1 className="text-4xl text-center underline">অনুসরন করুন</h1>
                    <h1 className="text-[22px] ml-10 hover:text-2xl hover:underline"><a href="https://www.facebook.com/profile.php?id=100078409717405" target="blank"><i class="fa-brands fa-facebook"></i> আলোঘর </a></h1>
                    <h1 className="text-[22px] ml-10 hover:text-2xl hover:underline"><a href="https://x.com/LabibT" target="blank"><i class="fa-brands fa-x-twitter"></i> @Aloghor</a></h1>
                    <h1 className="text-[22px] ml-10 hover:text-2xl hover:underline"><a href="https://www.reddit.com/user/LTNEW52/" target="blank"><i class="fa-brands fa-reddit"></i> u/Aloghor</a></h1>
                </div>

                <h1 className="text-1xl textGreen flex flex-row justify-baseline absolute bottom-1">© {date.getFullYear()} আলোঘর. সমস্ত অধিকার সংরক্ষিত. তৈরি করেছেন লাবীব তাহ্‌মিদ, কাওসার আহমেদ এবং জিনেদিন হাসান জিদান.</h1>
            </div>
        </>
    )
}

export default Footer

// Standard Footer page, nothing fancy!
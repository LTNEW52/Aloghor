import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {

    const [showInnerDiv , setShowInnerDiv] = useState(false)
    const ref = useRef(null)

    useEffect(() => {
        function handleClickOutside (event) {
            if (ref.current && !ref.current.contains(event.target)) {
                setShowInnerDiv(false)
            }
        }

        document.addEventListener("mousedown" , handleClickOutside)

        return () => {
            document.removeEventListener("mousedown" , handleClickOutside)
        }
    }, [])
    
    return (
        <>
            <div className="w-full flex">
                <div className="flex flex-row ml-5 text-[hsl(37,100%,88%)] w-fit h-fit textShadow cursor-default userSelectNone">
                    <img src="../public/Image/Logo.png" alt="Aloghor Logo" className="w-40"/>
                    <div className="p-5 -ml-6">
                        <h1 className="text-7xl font-bold">আলোঘর</h1>
                        <h3 className="text-2xl text-right">বই পড়ার, নতুন ঠিকানা</h3>
                    </div>
                </div>

                <div className="block text-[#ffe7c1] w-fit h-fit p-5 text-4xl font-extrabold ml-25 mt-[15px] textShadow">
                    <nav>
                        <Link to="/" className="mr-10 hover:text-[hsl(37,100%,78%)] hover:underline">সূচনা</Link>
                        <Link to="/Book" className="mr-10 hover:text-[hsl(37,100%,78%)] hover:underline">বই সমগ্র</Link>
                        <Link to="/Discussion" className="mr-10 hover:text-[hsl(37,100%,78%)] hover:underline">আলোচনার আসর</Link>
                        <Link to="/Events" className="mr-10 hover:text-[hsl(37,100%,78%)] hover:underline">সাহিত্য আয়োজন</Link>
                    </nav>
                </div>

                <div className="relative mt-8 mr-10">
                    <input type="text" placeholder="পছন্দের বই খুজুন" className="bg-white rounded-full w-70 h-10 pl-5 text-[20px] placeholder:text-[#6e6a6a]"/>
                    <button className="h-8 w-8 absolute right-2 top-1 bg-[#000000] rounded-full border-none cursor-pointer hover:bg-[hsl(0,0%,20%)]"><img src="../public/Image/searchIcon.png" alt="Search Icon" className="w-5 m-auto"/></button>
                </div>

                <div ref={ref} className="text-[#2b391f] w-13 h-13 mt-6 rounded-full bg-[#2b391f] cursor-pointer userSelectNone">
                    <p className="text-[33px] text-center text-[#ffe7c1] hover:bg-[hsl(92,30%,27%)] hover:rounded-full" onClick={() => {
                        setShowInnerDiv(!showInnerDiv)
                    }}>G</p>
                    <div className={showInnerDiv ? "h-fit text-[#ffe7c1] mt-5 p-5 border text-2xl bg-[#2b391f] absolute right-3 rounded-[15px] border-none boxShadowleft" : "hidden"}>
                        <p className="mb-5 hover:text-[hsl(37,100%,78%)]">Login Or SignUp</p>
                        <p className="mb-5 hover:text-[hsl(37,100%,78%)]">Settings</p>
                        <p className="hover:text-[hsl(37,100%,78%)]">Logout</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Navbar

// Link here actually changes the URL, and Changed URL is handled by Routes.

// useState first hold the innerDev false, that means hiding it. Then it checks on upperDev with onClick and sets true. After that simple logic check, if true then render, else hide.

// Also !showInnerDiv because to make it dynamic, so when clicked again, it closes.

// Another Interesting part is useRef and UseEffect. UseRef is used for reference of current DOM or here, Div

// UseEffect is used to first handle the click. It says if there is a reference, and click is not happening in that reference, make the state false.

// After that added a event listener for any click, so mouseDown. Also removed the listener too so it doesn't run forever.

// Now we need to add the reference to our outer div, so any click beside it makes inner div false.

// UseState, UseEffect and UseRef is very very important and I should come back here for reference.

// Need huge work on Dropdown, but thats for future.
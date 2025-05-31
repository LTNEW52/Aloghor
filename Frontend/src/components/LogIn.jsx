import { Link } from "react-router-dom";

const Login = () => {
    return (
        <div className="w-[100%] h-[100%] flex flex-row">
            <img src="../public/Image/homePeopleReading.jpg" alt="Login Page Picture" className="w-[60%] h-[100%] object-cover rounded-tl-xl rounded-" />

            <div className="w-[40%] h-[100%] textGreen rounded py-5">
                <div className="flex flex-row w-fit h-fit cursor-default italic">
                    <img src="../public/Image/Logo.png" alt="Aloghor Logo" className="w-[18%]"/>
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

                        <div className="p-10 h-fit flex flex-col items-center relative text-golden">
                            <label htmlFor="email" className="absolute top-[8%] left-25 text-[1.3rem] font-medium px-3 bg-white">ইমেইল</label>
                            <input type="email" className=" w-[90%] h-[50px] mb-15 border-3 border-blackborder-3 border- rounded-lg" />
                            <label htmlFor="password" className="absolute top-[41%] left-25 text-[1.3rem] font-medium px-3 bg-white">পাসওয়ার্ড</label>
                            <input type="password" className="w-[90%] h-[50px] mb-10 border-3 border-blackborder-3 border-black rounded-lg" />

                            <button className="w-[50%] h-[50px] backgroundGreen textGolden text-2xl border-none rounded-lg hover:text-3xl font-medium cursor-pointer">সাইন ইন</button>
                        </div>

                        <hr className="w-[70%] m-auto"/>
                        
                        <div className="flex flex-col justify-center items-center">
                            <h1 className="text-2xl -mt-[2.5%] bg-white px-[3%] font-medium">অথবা</h1>
                            <button className="w-[45%] h-[50px] border-none mt-5 text-[1.3rem] backgroundGolden rounded-lg font-bold hover:text-2xl cursor-pointer"><i class="fa-brands fa-google pr-2"></i> গুগল দিয়ে প্রবেশ করুন</button>
                        </div>

                        <h1 className="text-right text-[1.3rem] m-8 font-medium">নতুন অতিথি? <Link to="" className="underline hover:text-2xl">আমাদের সাথে যোগ দিন</Link></h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login
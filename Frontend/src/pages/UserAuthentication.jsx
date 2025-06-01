import { useState } from "react"
import Login from "../components/LogIn"
import SignUp from "../components/SignUp"

const UserAuth = () => {

    const [isSignUp , setIsSignUp] = useState(false)

    return (
        <div className="min-h-screen backdrop-blur-xs flex flex-col justify-center items-center">
            <div className="w-[90%] h-[900px] border-none backgroundGolden boxShadowleft rounded-xl">
                <div className="w-[100%] h-[100%] flex flex-row">
                    <img src="../public/Image/homePeopleReading.jpg" alt="Login Page Picture" className={`w-[60%] h-[100%] object-cover rounded-t-xl rounded-b-xl ${isSignUp ? "order-1" : "order-0"}`} />
                    {isSignUp ? <SignUp toggleForm={() => setIsSignUp(false)}/> : <Login toggleForm={() => setIsSignUp(true)}/>}
                </div>
            </div>
        </div>
    )
}

export default UserAuth

// Order 0 is for Image -> Form. Order-1 for Form -> Image. Order is a css property and it can reverse the position!

// toggleForm is a function, which tells what onclick would do. () => Something, is what function returns, which is stored in toggleForm!
import Login from "../components/login"

const UserAuth = () => {
    return (
        <div className="min-h-screen backdrop-blur-xs flex flex-col justify-center items-center">
            <div className="w-[85%] h-[800px] border-none bg-white boxShadowleft rounded-xl">
                <Login></Login>
            </div>
        </div>
    )
}

export default UserAuth
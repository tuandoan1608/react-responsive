
const Login = () => {
  return (
    <div className="bg-gradient-to-r from-purple-500 flex justify-center content-center to-pink-500 w-full h-full p-5 ">
      <div className="form-login sm:max-w-sm  content-center">
        <div className="bg-white w-60 md:w-96 lg:w-[300px]    rounded-lg px-5">
          <div className="  flex flex-col ">
            <p className=" text-[28px] pt-[25px] font-bold text-center  font-sans">Login</p>
          </div>
          <div className="flex flex-col m-4">
            <label className="text-inline">Username</label>
            <input type="text" placeholder="Type your username" className="outline outline-none border-b-2 rounded-sm font-sans text-xs p-2" />
          </div>
          <div className="flex flex-col m-4">
            <label className="text-inline">Password</label>
            <input type="text" placeholder="Type you password" className="outline outline-none rounded-sm border-b-2 font-sans text-xs p-2" />
          </div>
          <div className="flex flex-col  ">
            <a href="#" className="text-right mr-4 text-xs">Forgot password</a>
          </div>
          <div>
            <button className="w-[80%] bg-gradient-to-r rounded-2xl m-4 text-white text-xs p-2">LOGIN</button>
            <p className="text-center text-xs text-current">Or sign up using</p>

          </div>
          <div className="flex flex-row pt-3 justify-center">
            <p className="bg-sky-700 max-w-xs w-[36px] rounded-full text-center m-1"> <i className="fa fa-facebook text-lg text-white p-1 " /></p>
            <p className="bg-sky-700 max-w-xs w-[36px] rounded-full text-center m-1"> <i className="fa fa-facebook text-lg text-white p-1 " /></p>
            <p className="bg-sky-700 max-w-xs w-[36px] rounded-full text-center m-1"> <i className="fa fa-facebook text-lg text-white p-1 " /></p>
          </div>
          <div className="flex justify-center">
            <div className="flex-col">
            <p className=" text-xs text-current p-4">Or sign up using</p>
            <button className="w-xs flex justify-center text-black text-xs p-2">LOGIN</button>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Login;
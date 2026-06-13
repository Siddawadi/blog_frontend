import { Loginform } from "../forms/login.form"

export const Loginpage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black">

      <div className="relative h-[100vh] w-[100%] flex rounded-2xl overflow-hidden">

        {/* IMAGE SIDE */}
        <img
          src="Exploring the Himalayas in Nepal.jpg"
          alt="login"
          className="w-full h-full object-cover"
        />

        {/* DARK OVERLAY */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* LOGIN FORM OVERLAY */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="border border-white/50 bg-white/5 backdrop-blur-md shadow-2xl rounded-2xl p-8 w-[350px]">
            <Loginform />
          </div>
        </div>

      </div>

    </div>
  )
}
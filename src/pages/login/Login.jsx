import { useState } from "react";
import DotsLoader from "../../components/loader/DotsLoader";
import Input from "../../components/input/Input";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const [user, setUser] = useState({});
  const [isLoading, setIsloading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleChangeUser = (name, value) => setUser({ ...user, [name]: value });

  const handleLogin = () => {
    if (user?.password) {
      setIsloading(true);
      setErrorMessage("");

      setTimeout(() => {
        if (user?.password === "Oybek") {
          localStorage.setItem("token", user?.password);
          navigate("/posts");
        } else setErrorMessage("User not found.");
        setIsloading(false);
      }, 500);
    }
  };

  return (
    <div className="h-screen bg-gray_light bg-sign bg-cover bg-center bg-no-repeat flex items-center justify-center">
      <div className="w-[25rem] bg-white rounded-3xl p-8 flex flex-col gap-4">
        <p className="font-bicubik text-center">SIGN IN</p>
        <Input
          id="email"
          type="email"
          label="Email"
          onChange={(e) => handleChangeUser("email", e.target.value)}
          className="w-full"
          themeMode="light"
          placeholder="Email"
        />
        <Input
          id="password"
          label="Password"
          type="password"
          onChange={(e) => handleChangeUser("password", e.target.value)}
          className="w-full"
          themeMode="light"
          placeholder="* * * * * * * * * * *"
        />
        <Link to="/" className="uppercase text-xs text-start">
          Forgot Your Password?
        </Link>
        <button
          onClick={handleLogin}
          className={`bg-blue px-8 py-2 h-10 rounded-lg text-sm text-white flex items-center justify-center ${
            isLoading ? "" : ""
          }`}
        >
          {isLoading ? <DotsLoader /> : "LOGIN"}
        </button>
        <span className="text-red text-sm">{errorMessage}</span>
        <p className="text-gray uppercase text-xs text-center">
          Don't Have An Account Yet ?
        </p>
        <Link to="/" className="flex items-center w-max mx-auto gap-2">
          <span className="text-blue">SIGN UP</span>
        </Link>
      </div>
    </div>
  );
}

export default Login;

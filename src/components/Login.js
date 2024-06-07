import Image from "next/image";
import { signIn } from "next-auth/react";

const Login = () => {
  return (
<div className="flex flex-col items-center justify-center w-full h-full absolute">
  <img
    src="https://upload.wikimedia.org/wikipedia/commons/f/fd/Facebook-reversed.svg"
    alt="Facebook logo"
    height={240}
    width={240}
  />
  <a
    onClick={signIn}
    className="px-20 py-4 z-10 text-2xl cursor-pointer mt-2 bg-blue-500 rounded-md text-white"
  >
    Login
  </a>
</div>

  );
};

export default Login;
import axios from "axios";
import { useEffect, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
// import { toast } from "react-toastify";
import BoundingBox from "../components/BoundingBox";
import Button from "../components/Button";
import CustomToast, { ToastContent } from "../components/CustomToast";
import Input from "../components/Input";
const ResetPassword = () => {
  const [openToast, setOpenToast] = useState(false);
  const [toastContent, setToastContent] = useState<ToastContent>({});
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");
  const [emailToken, setEmailToken] = useState("");
  const [error, setError] = useState(false);
  const navigate = useNavigate();
  console.log(error);

  useEffect(() => {
    const urlSearchParams = new URLSearchParams(window.location.search);
    const params = Object.fromEntries(urlSearchParams.entries());
    setEmail(params.Email || "");
    setEmailToken(params.emailToken || "");
  }, []);

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = {
      username: email,
      password,
      confirmpassword,
      emailToken,
    };
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/auth/updatepassword`,
        formData
      );
      if (response) {
        setOpenToast(true);
        setToastContent({
          message: "OK",
          // type: "error",
        });
        // toast.error("OK", {
        //   className: "custom-bg",
        //   autoClose: 3000,
        //   theme: "dark",
        // });
        navigate("/");

        // console.log("response", response);
      }

      setError(false);
    } catch (error) {
      console.log(error);
      setOpenToast(true);
      setToastContent({
        message: "Invalid Username or Password",
        type: "error",
      });
      // toast.error("Invalid Username or Password", {
      //   className: "custom-bg-error",
      //   autoClose: 3000,
      //   theme: "dark",
      // });
      setError(true);
    }
  };

  return (
    <div className="w-full flex-grow h-[100vh] md:h-full relative flex justify-center items-center text-dark  p-4 md:p-12">
      {openToast && (
        <CustomToast
          setToast={setOpenToast}
          setToastContent={setToastContent}
          message={toastContent.message}
          type={toastContent.type}
          customStyle={toastContent.customStyle}
          duration={toastContent.duration}
        />
      )}
      <BoundingBox>
        <div className="w-full h-full relative z-[100] flex justify-between flex-col lg:flex-row">
          <div className="heading text-center md:text-left">
            <h1 className="text-[2rem] md:text-[2.6rem] text-prime">
              MOZILLA FIREFOX
            </h1>
            <span className="text-light text-base md:text-2xl">
              IS RECRUITING
            </span>
            <div className="mt-6 text-xs md:text-base">
              <Link className="nes-btn" to="/dashboard">
                Go to Dashboard &rarr;
              </Link>
            </div>
          </div>
          <div className="flex-grow h-full p-4 md:p-8 mt-4 md:mt-0">
            <form
              className="flex flex-col gap-3 md:gap-6 w-full lg:w-[60%] mx-auto"
              onSubmit={handleLogin}
            >
              <Input
                label={"password"}
                placeholder="Password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value.trim())}
              />
              <Input
                label={"confirmPassword"}
                placeholder="confirmPassword"
                type="password"
                value={confirmpassword}
                onChange={(e) => setConfirmPassword(e.target.value.trim())}
              />
              <Button submit={true}>Reset Password</Button>
            </form>
            <section className="text-center mt-6 md:mt-12 text-light bg-dark py-2 md:py-4 w-full lg:w-[60%] mx-auto relative">
              <div className="text-black text-sm md:text-lg cursor-pointer w-full bg-prime absolute bottom-0 py-1">
                <NavLink to="/" className="text-black  ">
                  Back To Login page
                </NavLink>
              </div>
            </section>
          </div>
        </div>
        <img
          src="/background.png"
          alt=""
          className="hidden lg:block absolute bottom-0 invert brightness-[50%] left-0 scale-95"
        />
        <div className="absolute bottom-0 w-full lg:hidden">
          <img
            src="/empty-bg.png"
            alt=""
            className="w-[85%] mx-auto invert brightness-50 absolute bottom-8"
          />
          <img
            src="/Dino.png"
            alt=""
            className="invert w-20 absolute bottom-10 md:bottom-16"
          />
          <img
            src="/cacti.png"
            alt=""
            className="invert w-20 bottom-10 absolute right-20 md:right-32 md:bottom-16"
          />
          <img
            src="/cacti.png"
            alt=""
            className="invert w-10 bottom-10 absolute right-16 md:right-60 md:bottom-20"
          />
        </div>
      </BoundingBox>
    </div>
  );
};

export default ResetPassword;

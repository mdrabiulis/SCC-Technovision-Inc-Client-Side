import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useAuthContext from "../../Hooks/useAuthContext";
import { useState } from "react";

const LogIn = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [userErr, setUserErr] = useState("");

  const { loginuserEmailandPass } = useAuthContext();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    loginuserEmailandPass(data.email, data.password)
      .then((result) => {
        console.log(result.user);
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Login has been successful",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate(location?.state ? location?.state : "/");
      })
      .catch((error) => {
        console.log(error.message);
        setUserErr(error.message);

        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong!",
        });
      });
  };
  return (
    <div>
      <Helmet>
        <title>Login</title>
      </Helmet>
      <div className="flex flex-col login-item md:flex-row items-center ">
        <img src="" className=" rounded-lg md:w-2/4" />

        <div className="w-full lg:w-[35%]">
          <form onSubmit={handleSubmit(onSubmit)} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                {...register("email", { required: true })}
                placeholder="email"
                className="input input-bordered"
              />
            </div>
            {errors.email && (
              <span className="text-red-700">This field is required</span>
            )}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                {...register("password", { required: true })}
                placeholder="password"
                className="input input-bordered"
              />
              <label className="label"></label>
            </div>
            {errors.password && (
              <span className="text-red-700">This field is required</span>
            )}
            <span className="text-red-700">{userErr}</span>

            <div className="form-control mt-6">
              <button className="btn  bg-[#1877F2]  hover:bg-[#312ECB] text-white text-xl">
                Login
              </button>
            </div>
            <h2 className="">
              Not a member?
              <Link
                to="/signup"
                className=" text-[#312ECB] font-roboto hover:text-[#1877F2] font-bold ml-1"
              >
                Sign Up Now
              </Link>
            </h2>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LogIn;

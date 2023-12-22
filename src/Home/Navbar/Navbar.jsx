import { useState } from "react";
import "./Navbar.css";
import { FiAlignJustify, FiXCircle } from "react-icons/fi";
import Logo from "../Logo/Logo";
import { Link } from "react-router-dom";
import useAuthContext from "../../Hooks/useAuthContext";
import Swal from "sweetalert2";

const Navbar = () => {
  const {user, ignOutusers} =useAuthContext()
  const [click, setclick] = useState(false);

  const logout =()=>{
    ignOutusers()
    .then(() => {
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: " logout has been success",
        showConfirmButton: false,
        timer: 1500
      });
    }).catch(() => {
      // An error happened.
    });
  }

  const hendelClick = () => {
    setclick(!click);
  };
  return (
    <div className="flex justify-around items-center bg-[#f3f3f3] py-5  shadow-xl ggg ">
      <Logo></Logo>
      <nav>
        <ul
          className={
            click
              ? "active flex flex-col lg:flex-row pt-4 lg:pt-0 gap-4 lg:gap-8 ease-in-out duration-500"
              : "rrr flex flex-col lg:flex-row pt-4 lg:pt-0 gap-4 lg:gap-8 ease-in-out duration-500"
          }
        >
          <li className="text-[#1877F2] hover:text-[#312ECB] duration-300 ease-out font-bold hover:underline">
            Home
          </li>
          <li className="text-[#1877F2] hover:text-[#312ECB] duration-300 ease-out font-bold hover:underline">
            About
          </li>
          <li className="text-[#1877F2] hover:text-[#312ECB] duration-300 ease-out font-bold hover:underline">
            Blogs
          </li>
          <li className="text-[#1877F2] hover:text-[#312ECB] duration-300 ease-out font-bold hover:underline">
            Contact
          </li>
          <Link to={"/"}><li className="text-[#1877F2] hover:text-[#312ECB] duration-300 ease-out font-bold hover:underline">
            Service
          </li></Link>

{
  user?<div className="dropdown dropdown-start">
  <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
    <div className="w-10 rounded-full">
      <img alt="Tailwind CSS Navbar component" src={user.photoURL} />
    </div>
  </div>
  <ul tabIndex={0} className="mt-3 z-[100] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52 mr-60">
    <li>
      <a className="">
        Profile
        
      </a>
    </li>
    <li><a>Settings</a></li>
    <Link to={'/dashboard'}><li>Dashboard</li></Link>
    <li onClick={logout}><a>Logout</a></li>
  </ul>
</div>
:<Link to={"/login"}><li className="text-[#1877F2] hover:text-[#312ECB] duration-300 ease-out font-bold hover:underline">
  Login
</li></Link>
}

          
          




        </ul>
      </nav>

      <div className=" lg:hidden" onClick={hendelClick}>
        {click ? (
          <button>
            <FiXCircle className="text-[#1877F2] w-8 h-8" />
          </button>
        ) : (
          <button>
            <FiAlignJustify className="text-[#1877F2] w-8 h-8" />
          </button>
        )}
      </div>
    </div>
  );
};

export default Navbar;

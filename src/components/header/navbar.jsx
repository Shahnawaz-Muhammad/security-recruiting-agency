import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false);
  const handleToggleNavbar = () => {
    setShowNavbar(!showNavbar);
  };
  return (
    <>
      <div className="absolute z-20 hidden md:flex bg-transparent items-center justify-center w-full">
        <div className="max-w-full   py-8 px-4 md:px-8 lg:px-0">
          <div className="flex gap-8 text-gray-100">
            <p className="text-md cursor-pointer">Home</p>
            <p className="text-md cursor-pointer">About</p>
            <p className="text-md cursor-pointer">Services</p>
            <p className="text-md cursor-pointer">Packages</p>
            <p className="text-md cursor-pointer">Contact</p>
          </div>
        </div>
      </div>
      <div className="max-w-full block bg-primary  md:hidden py-1 px-4 md:px-8 lg:px-0">
        <div className="w-full flex items-center justify-between">
          <h1 className="text-3xl text-white max-w-full flex items-center">
            Safety<span className="text-secondary">First</span>
          </h1>
          <button
            className="border border-gray-600 px-3 py-1"
            onClick={handleToggleNavbar}
          >
            <RxHamburgerMenu className="text-3xl text-gray-500 " />
          </button>
        </div>
        <div
          className={`${
            showNavbar ? "flex" : "hidden"
          } flex-col gap-4 py-6 text-white transition-transform duration-200 `}
        >
          <p>Home</p>
          <p>About</p>
          <p>Services</p>
          <p>Packages</p>
          <p>Contact</p>
        </div>
      </div>
    </>
  );
};

export default Navbar;

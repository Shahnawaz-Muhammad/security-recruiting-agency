import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
const Topbar = () => {
  return (
   <>
     <div className="w-full  flex justify-center  bg-primary py-2 text-white mx-auto md:px-8 xl:px-4">
      <div className="max-w-screen-2xl w-full">
        <div className="w-full flex flex-col md:flex-row justify-center gap-2 md:justify-between items-center">
          <h1>Opening Hours: 8.00AM - 9.00PM</h1>
          <div className="flex items-center gap-2">
            <h2>Follow Us:</h2>
            <div className="flex gap-4">
              <FaFacebookF />
              <FaTwitter />
              <FaLinkedinIn />
              <FaInstagram />
              <FaYoutube />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="w-full  flex justify-center bg-white py-4 text-white mx-auto md:px-8 xl:px-4">
    <div className="max-w-screen-2xl w-full">
      <div className="max-w-full flex  justify-center md:justify-between">
        <h1 className="text-5xl text-primary max-w-full hidden md:flex items-center">
          Safety<span className="text-secondary">First</span>
        </h1>

        <div className="max-w-full text-primary flex gap-5">
          <div className="max-w-full flex flex-col justify-center items-center gap-1">
            <h2 className=" text-md text-primary uppercase">Our Office</h2>
            <h3 className="text-gray-500 text-md font-light">123, Street, NY, USA</h3>
          </div>
          <div className="w-[1px] h-full bg-gray-300"></div>
          <div className="max-w-full flex flex-col justify-center items-center gap-1">
            <h2 className=" text-md text-primary uppercase">Email Us</h2>
            <h3 className="text-gray-500 text-md font-light">info@example.com</h3>
          </div>
          <div className="w-[1px] h-full bg-gray-300"></div>
          <div className="max-w-full flex flex-col justify-center items-center gap-1">
            <h2 className=" text-md text-primary uppercase">Call Us</h2>
            <h3 className="text-gray-500 text-md font-light">+012 345 6789</h3>
          </div>
        </div>
      </div>
    </div>
  </div>
   </>
  );
};

export default Topbar;

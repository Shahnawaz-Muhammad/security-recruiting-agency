import { LiaAwardSolid } from "react-icons/lia";
import { HiOutlineClipboardDocumentCheck } from "react-icons/hi2";
import aboutImg from "../../assets/images/about.jpg";
const About = () => {
  return (
    <div className="w-full  bg-bgLight text-primary ">
      <div className="w-full h-full flex flex-col lg:flex-row justify-center items-center">
        <div className="w-full">
          <img src={aboutImg} alt="" className="w-full h-full" />
        </div>{" "}
        <div className="px-4 lg:px-12 w-full h-full flex justify-center items-center py-20 lg:py-0">
          <div className="w-full h-full flex flex-col gap-4">
            <h2 className="text-secondary text-xl uppercase font-semibold">
              About Us
            </h2>
            <h1 className="text-4xl font-medium text-primary">
              15 YEARS EXPERIENCE
            </h1>
            <p className="text-lightGray">
              Labore vero lorem eos sed aliquy ipsum aliquy sed. Vero dolore
              dolore takima ipsum lorem rebum
            </p>
            <div className="flex flex-col md:flex-row justify-between w-full">
              <div className="flex flex-col gap-2">
                <HiOutlineClipboardDocumentCheck className="text-7xl text-secondary font-light" />
                <h3 className="uppercase text-xl font-medium">Govt Approved</h3>
                <p className="text-lightGray">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Totam, doloremque.
                </p>
              </div>
              <div className="flex flex-col gap-2">
                <LiaAwardSolid className="text-7xl text-secondary font-light" />

                <h3 className="uppercase text-xl font-medium">Award Winning</h3>
                <p className="text-lightGray">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Totam, doloremque.
                </p>
              </div>
            </div>
            <div>
              <button className="bg-secondary px-8 py-3 text-white text-xl">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

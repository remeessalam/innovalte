import { Link } from "react-router-dom";
import homepagebanner from "../../assets/images/homepagebanner.jpg";
import AdvancedAISolutions from "../../assets/images/png/AdvancedAISolutions.png";
import ScalableCloudInfrastructure from "../../assets/images/png/ScalableCloudInfrastructure.png";
import DataDrivenInsights from "../../assets/images/png/DataDrivenInsights.png";
const Banner = () => {
  return (
    <div className="relative flex flex-col items-center">
      <div
        // h-bannerheightsm  lg:h-bannerheight
        className=" flex flex-col justify-center items-center h-screen lg:h-[120vh]  text-white w-screen bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${homepagebanner})` }}
      >
        <div className="bg-black/50 absolute w-full h-full" />
        <div className=" flex flex-col  items-center  text-center sm:mt-0 mt-4">
          <h1
            data-aos="fade-up"
            data-aos-offset="200"
            data-aos-delay="100"
            className="text-4xl sm:text-1xl   leading-tight"
          >
            Welcome to [Your Company Name]
          </h1>

          <p
            data-aos="fade-up"
            // whitetextshadow
            className="text-white text-desc  max-w-[70%] font-semibold my-4 "
          >
            At [Your Company Name], we’re driven by a passion for helping
            businesses thrive in the digital age. Our wide range of services is
            designed to solve your toughest challenges and create opportunities
            for growth through the power of technology. Whether you&apos;re
            looking to streamline operations, build custom solutions, or enhance
            your online presence, our team is here to guide you every step of
            the way.
          </p>
          <div className="sm:max-w-[60%] max-w-full flex md:flex-row flex-col items-center justify-center">
            <Link data-aos="fade-up" to={"/services"}>
              <p className="primary-btn sm:my-0 my-3  sm:ml-4">
                Take Product Tour ▶
              </p>
            </Link>
          </div>
        </div>
      </div>
      <div className="relative bottom-0 max-w-[90rem]  lg:translate-y-1/2 lg:mt-0 mt-10 border lg:border-none border-gray-300 lg:absolute shadow-lg rounded-lg w-[90%] sm:w-[80%] h-full  lg:h-[330px]  2xl:h-[270px] bg-white grid grid-cols-1 lg:grid-cols-3">
        <div className="w-full h-full border-dashed group  border-b lg:border-b-0 flex flex-col p-5 justify-center gap-4 hover:bg-buttonBackground  items-center">
          <div className="w-[60px] h-[60px]  bg-white flex justify-center items-center rounded-lg">
            <img
              data-aos="fade-up"
              src={AdvancedAISolutions}
              alt=""
              width={40}
              height={40}
            />
          </div>
          <h4
            data-aos="fade-up"
            className="text-head text-center group-hover:text-white"
          >
            Artificial Intelligence Development
          </h4>
          <p
            data-aos="fade-up"
            className="text-center text-desc group-hover:text-white"
          >
            Step into the future with our AI-driven solutions, automating
            processes, enhancing customer experiences, and driving data-backed
            decision-making for businesses of all sizes.
          </p>
        </div>
        <div className="border-dashed group  lg:border-x w-ful h-[270px]l flex flex-col md:p-2 lg:p-5  p-5 items-center justify-center gap-4 hover:bg-buttonBackground">
          <div className="w-[60px] h-[60px] bg-white flex justify-center items-center rounded-lg">
            <img
              data-aos="fade-up"
              src={ScalableCloudInfrastructure}
              alt=""
              width={40}
              height={40}
            />
          </div>
          <h4
            data-aos="fade-up"
            className="text-head text-center group-hover:text-white"
          >
            Cloud Computing Services
          </h4>
          <p
            data-aos="fade-up"
            className="text-center text-desc group-hover:text-white"
          >
            Optimize your business with our scalable cloud solutions, offering
            seamless integration, enhanced security, and flexibility to support
            your growth and efficiency.
          </p>
        </div>
        <div className="w-full h-full group border-dashed  border-t lg:border-t-0 flex flex-col p-5 items-center justify-center gap-4 hover:bg-buttonBackground">
          <div className="w-[60px] h-[60px] bg-white flex justify-center items-center rounded-lg">
            <img
              data-aos="fade-up"
              src={DataDrivenInsights}
              alt=""
              width={40}
              height={40}
            />
          </div>
          <h4 data-aos="fade-up" className="text-head group-hover:text-white">
            Data Science Services
          </h4>
          <p
            data-aos="fade-up"
            className="text-center text-desc group-hover:text-white"
          >
            Unlock the power of data with our advanced analytics solutions,
            enabling businesses to gain insights, optimize operations, and make
            data-driven strategic decisions.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Banner;

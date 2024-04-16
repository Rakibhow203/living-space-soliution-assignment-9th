import { CiSquareAlert } from "react-icons/ci";
import { IoLocationSharp } from "react-icons/io5";
import { RiMoneyDollarCircleFill, RiParentLine } from "react-icons/ri";
import { VscDebugBreakpointData  } from "react-icons/vsc";
import { Link } from "react-router-dom";



  const Property = ({ property }) => {
  const { id, image, estate_title, price, status, area, location, facilities } =
    property;
    return (
    
      
    <div className="mr-auto">
       
      <div>
          <div className="card w-full bg-green-50 shadow-xl mb-3">
            
        <figure className="w-[100%] h-44 p-2 rounded-2xl mt-1 ">
          <img src={image} alt="" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{estate_title}</h2>
          <div className="flex font-bold ">
            <p className="flex ">
              <span className="text-2xl">
                <RiMoneyDollarCircleFill />
              </span>
              {price}
            </p>
            <p className="flex gap-1">
              <span className="text-2xl ">
                <RiParentLine />
              </span>
              {status}
            </p>
          </div>
          <div className="flex font-bold">
            <p className="flex">
              <span className="text-2xl">
                <CiSquareAlert />
              </span>
              {area}
            </p>
            <p className="flex">
              <span className="text-2xl">
                <IoLocationSharp />
              </span>
              {location}
            </p>
          </div>
          <div>
            <ul className="font-bold">
                <li className="flex gap-2 ">
                  <span className="mt-1"> <VscDebugBreakpointData  /></span>
                  {facilities[0]}</li>
                <li className="flex gap-2 " >
                     <span className="mt-1"> <VscDebugBreakpointData  /></span>
                  {facilities[1]}</li>
                <li className="flex gap-2 " >
                     <span className="mt-1"> <VscDebugBreakpointData  /></span>
                  {facilities[2]}</li>
            </ul>
          </div>
          <div className="card-actions justify-end">
            <Link to={`/Card/${id}`}>
              <button className="btn bg-[#345217] font-bold text-white">View Property</button>
            </Link>
          </div>
        </div>
      </div>
    </div>

    </div>
  );
};

export default Property;
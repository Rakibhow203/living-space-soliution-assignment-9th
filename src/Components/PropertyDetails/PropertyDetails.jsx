import { CiSquareAlert } from "react-icons/ci";
import { IoLocationSharp } from "react-icons/io5";
import { RiMoneyDollarCircleFill, RiParentLine } from "react-icons/ri";
import { Link, useLoaderData, useParams } from "react-router-dom";
import { VscDebugBreakpointData  } from "react-icons/vsc";

const PropertyDetails = () => {
    const cards = useLoaderData();
  const { id } = useParams();
  // const idInt = parseInt(id);
  const card = cards.find(card => card.id === id);
  console.log(card);
  return (
    
      <div className="mb-12 mt-6">
      <div className="hero min-h-screen bg-white rounded-xl ">
        <div className="hero-content flex-col lg:flex-row border p-3 bg-[#eceee9] rounded-md">
          <img src={card.image} className="max-w-sm rounded-lg shadow-2xl" />
          <div className="">
            <h1 className="text-4xl font-bold uppercase"> {card.segment_name}</h1>
            <h4 className="text-1xl font-bold text-xl mt-2">{card.estate_title}</h4>
            <p className="py-3 font-semibold">{card.description}</p>
            <div className="flex font-bold gap-11">
              <p className="flex text-xl uppercase ">
                <span className="text-2xl">
                  <RiMoneyDollarCircleFill />
                </span>
                {card.price}
              </p>
              <p className="flex gap-1 text-xl uppercase">
                <span className="text-2xl ">
                  <RiParentLine />
                </span>
                {card.status}
              </p>
            </div>
            <div className="flex font-bold gap-3 py-2">
              <p className="flex text-xl uppercase">
                <span className="text-2xl">
                  <CiSquareAlert />
                </span>
                {card.area}
              </p>
              <p className="flex text-xl uppercase">
                <span className="text-2xl">
                  <IoLocationSharp />
                </span>
                {card.location}
              </p>
            </div>
            <div className="py-2">
              <ul className="font-semibold">
                <li className="flex gap-2 text-xl uppercase ">
                  <span className="mt-1"> <VscDebugBreakpointData  /></span>
                  {card.facilities[0]}</li>
                <li className="flex gap-2 text-xl uppercase ">
                  <span className="mt-1"> <VscDebugBreakpointData  /></span>
                  
                  {card.facilities[1]}</li>
                <li className="flex gap-2 text-xl uppercase " >
                  <span className="mt-1 "> <VscDebugBreakpointData  /></span>
                  {card.facilities[2]}</li>
              </ul>
            </div>
            <Link to="/">
              {' '}
              <button className="btn bg-[#345217] w-full rounded-xl font-bold text-white">
                Back To Home
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
    
  );
};

export default PropertyDetails;
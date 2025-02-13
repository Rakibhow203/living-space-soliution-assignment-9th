import { useEffect } from "react";
import Property from "../Property/Property";
import { useState } from "react";


const Properties = () => {
   const [properties, setProterties] = useState([]);
  useEffect(() => {
    fetch('JsonFackData.json')
      .then(res => res.json())
      .then(data => setProterties(data));
  }, []);
  return (
    <div>
      
      <h2 className="mt-5 mb-5 font-bold text-white text-3xl"> Estate Section</h2>
       <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-6 mt-10">
      {properties.map(property => (
        <Property key={properties.id} property={property}></Property>
      ))}
    </div>

 
    </div>
  );
};

export default Properties;
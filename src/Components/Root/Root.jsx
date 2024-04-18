import { Outlet, useLocation } from "react-router-dom";
import Nav from "../Nav/Nav";
import Footer from "../Footer/Footer";

import { useEffect } from "react";
import CuriousMindsWantToKnow from "../CuriousMindsWantToKnow/CuriousMindsWantToKnow";
import RaveReviews from "../RaveReviews/RaveReviews";


const Root = () => {
  const loc = useLocation();
  useEffect(() => {
    if (loc.pathname === '/') {
      document.title = `HOME`;
    } else {
      document.title = ` ${loc.pathname.replace('/', '-')}`;
    }
  }, [loc.pathname]);
  return (
    <div>
      <Nav></Nav>


      <Outlet></Outlet>

      <div className="mt-5">
        
        
        <h1 className="mt-5"><Footer></Footer></h1>
        
</div>
    
    </div>
  );
};

export default Root;
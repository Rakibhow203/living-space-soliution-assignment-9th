import { Outlet, useLocation } from "react-router-dom";
import Nav from "../Nav/Nav";
import Footer from "../Footer/Footer";

import { useEffect } from "react";


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
    <Footer></Footer>
    </div>
  );
};

export default Root;
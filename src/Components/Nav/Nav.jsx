import { NavLink } from "react-router-dom";


const Nav = () => {
  return (
    <div>
      

<div>
      
 <div className="container mx-auto">
      <div className="navbar bg-white rounded-lg">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm items-center dropdown-content z-[1] p-2 shadow bg-base-100 rounded-box w-52 font-bold  "
            >
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? 'text-[#be700ac1] border border-[#be0a5563] p-2 rounded'
                    : 'font-bold'
                }
              >
                Home
              </NavLink>
              <NavLink
                to="/update"
                className={({ isActive }) =>
                  isActive
                    ? 'text-[#23BE0A] border border-[#22be0a4e] p-2 rounded'
                    : 'font-bold'
                }
              >
                Update Profile
              </NavLink>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive
                    ? 'text-[#23BE0A] border border-[#22be0a4e] p-2 rounded'
                    : 'font-bold'
                }
              >
                Contact Us
                  </NavLink>
                  

                  
                  

            </ul>
          </div>
          <NavLink to="/" className="btn btn-ghost font-bold text-xl">
          Living Space Solition
          </NavLink>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 items-center font-bold gap-4">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? 'text-[#23BE0A] border border-[#22be0a4e] p-2 rounded '
                  : 'font-bold'
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/update"
              className={({ isActive }) =>
                isActive
                  ? 'text-[#23BE0A] border border-[#22be0a4e] p-2 rounded'
                  : 'font-bold'
              }
            >
              Update Profile
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive
                  ? 'text-[#23BE0A] border border-[#22be0a4e] p-2 rounded'
                  : 'font-bold'
              }
            >
              Contact Us
                </NavLink>
                
   <NavLink
                to="/GetOffers"
                className={({ isActive }) =>
                  isActive
                    ? 'text-[#23BE0A] border border-[#22be0a4e] p-2 rounded'
                    : 'font-bold'
                }
              >
                Offer Corner
                  </NavLink>

          </ul>
        </div>
        <div className="navbar-end">
          <NavLink to="/register" className="btn bg-[#345217] font-bold text-white">
            Sign Up
          </NavLink>
        </div>
      </div>
    </div>




    </div>


    </div>
  );
};

export default Nav;
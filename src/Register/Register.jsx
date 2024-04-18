
import { NavLink, useLocation, useNavigate } from "react-router-dom";

import { useForm } from "react-hook-form";
import UseAuth from "../Components/Hooks/UseAuth";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useState } from "react";
  import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

const Register = () => {

  


  const registerHandler =() => toast ("register successfully")
  const [showPassword, setShowPassword] = useState(false);
  const { createUser } = UseAuth();
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const location = useLocation();
  const form = location?.state || '/';
  const onSubmit = data => {
    const { email, password } = data;
    createUser(email, password).then(result => {
      if (result.user) {
        navigate(form);
      }
    });
  };

 

  return (
    <div>
  <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col ">
        <div className="text-center">
          <h1 className="text-5xl font-bold">Register!</h1>
        </div>
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleSubmit(onSubmit)} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="Enter Your Name"
                className="input input-bordered"
                {...register('fullName', { required: true })}
              />
              {errors.fullName && (
                <span className="text-red-500">This field is required</span>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                className="input input-bordered"
                {...register('email', { required: true })}
              />
              {errors.email && (
                <span className="text-red-500">This field is required</span>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Image URL</span>
              </label>
              <input
                type="text"
                placeholder="Image URL"
                className="input input-bordered"
                {...register('image')}
              />
            </div>
            <div className="form-control">
              <div className="relative">
                <label className="label">
                    <span className="label-text">Password</span>
                    
                </label>
                <input
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                  {...register('password', { required: true })}
                />{' '}
                {errors.email && (
                  <span className="text-red-500">This field is required</span>
                )}
                <span
                  className="absolute mt-4 -ml-5 "
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>}
                </span>
              </div>
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
              <p className="font-bold">
                Have an Account?
                <NavLink to="/login" className="text-blue-600 ml-3">
                  Login
                </NavLink>
              </p>
            </div>
            <div className="form-control mt-6">
                <button onClick={registerHandler} className="btn btn-primary">Register</button>
                <ToastContainer />
            </div>
          </form>
        </div>
      </div>
    </div>


    </div>
  );
};

export default Register;


// https://github.com/programming-hero-web-course-4/b9a9-real-estate-Rakibhow203
// https://github.com/programming-hero-web-course-4/b9a9-real-estate-Rakibhow203
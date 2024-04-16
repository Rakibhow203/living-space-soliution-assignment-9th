import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../FirebaseProvider/FirebaseProvider";
import { useForm } from "react-hook-form";


const Register = () => {

  const { createUser } = useContext(AuthContext);

  const {
    register, handleSubmit, watch,
    formState: { errors },
  } = useForm  ();
  const onSubmit = data => {
    
    console.log(data)

  };
  

  return (
    <div>
 <div className="hero min-h-screen bg-base-200 border">
      <div className="hero-content flex-col ">
        <div className="text-center border">
          <h1 className="text-5xl font-bold">Register!</h1>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100 border">
          <div className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="Enter Your Name"
                className="input input-bordered"
                  
                {...register("fullName", { required: true })}

                />
                {errors.fullName && <span className="text-red-500" >This field is required</span>}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                className="input input-bordered"
                {...register("email", { required: true })}
                />
                {errors.email && <span className="text-red-500" >This field is required</span>}
              </div>
              
<div className="form-control">
              <label className="label">
                <span className="label-text">Image Url</span>
              </label>
              <input
                type="email"
                placeholder="image url"
                className="input input-bordered"
                
                  {...register("imageUrl", { required: true })} 
                />
                
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                className="input input-bordered"
                {...register("password", { required: true })} 
                />
                {errors.imageUrl && <span className="text-red-500" >This field is required</span>}
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
              <p>
                Have a Account?{' '}
                <NavLink to="/login" className="text-blue-600">
                  Login
                </NavLink>
              </p>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">REGISTER</button>
            </div>
          </div>
        </form>
      </div>
    </div>
      


    </div>
  );
};

export default Register;


// https://github.com/programming-hero-web-course-4/b9a9-real-estate-Rakibhow203
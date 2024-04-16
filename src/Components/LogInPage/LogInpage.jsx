import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../FirebaseProvider/FirebaseProvider";
import { useForm } from "react-hook-form";


const LogInpage = () => {

  const { signInUser } = useContext(AuthContext)


const {
    register, handleSubmit, 
    formState: { errors },
  } = useForm  ();
  const onSubmit = data => {
    
    const { email, password } = data;
  signInUser(email, password) 

    .then(result => {
      console.log(result.user);
    } )
    .catch(error => {
      console.log(error);
    })

  };

  return (
    <div>
       <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col ">
          <div className="text-center ">
            <h1 className="text-5xl font-bold">Login now!</h1>
          </div>
          <form onSubmit={handleSubmit(onSubmit)} className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div  className="card-body">
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
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                  {...register("password", { required: true })}

                />
                 {errors.password && <span className="text-red-500" >This field is required</span>}
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
                <p>
                  New to Site?
                  <NavLink to="/register" className="text-blue-600">
                    Register
                  </NavLink>
                </p>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LogInpage;
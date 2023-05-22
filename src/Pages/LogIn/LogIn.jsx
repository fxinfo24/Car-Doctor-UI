import login from "../../assets/images/login/login.svg";
import { FaFacebook, FaLinkedin, FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "../../ContextProviders/AuthProvider";
import { useContext } from "react";

const LogIn = () => {
  const { logInUser } = useContext(AuthContext);

  const loginHandler = (event) => {
    event.preventDefault();

    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(name, email, password);

    logInUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row">
        <div className="mr-12 w-1/2">
          <img src={login} alt="" />
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">
            <h1 className="text-3xl font-bold text-center">Login</h1>
            {/* Form Starts */}
            <form onSubmit={loginHandler}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="pass"
                  className="input input-bordered"
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6 space-y-2.5">
                <input
                  className="btn btn-primary"
                  type="submit"
                  value="Sign In"
                />
              </div>
            </form>
            <p className="text-center">Or, Sign In With</p>
            <div className="flex gap-7 mx-auto py-5">
              <FaFacebook></FaFacebook> <FaLinkedin></FaLinkedin>
              <FaGoogle></FaGoogle>
            </div>
            <p className="text-center">
              New to Car Doctor ?{" "}
              <Link className="text-orange-600" to="/signup">
                Sign Up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogIn;

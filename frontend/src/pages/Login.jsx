import React, { useState } from "react";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../store/auth";

const Login = () => {
  const [details, setDetails] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();
  const {storeTokenInLS} = useAuth();

  const handleInput = (e) => {
    // console.log(e);
    let name = e.target.name;
    let value = e.target.value;

    setDetails({
      ...details,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(details);

    try {
      const responseLogin = await fetch("https://alumni-server-side.onrender.com/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(details),
      });

      console.log(responseLogin);
      if (responseLogin.ok) {
        const res_data = await responseLogin.json();
        console.log("after ok of response at login: ", res_data);

        // store token at localStorage
        // localStorage.setItem("Token is: ", res_data.token);

        // function creation to store the token manually
        storeTokenInLS(res_data.token);

        setDetails({ email: "", password: "" });
        navigate("/");
        alert("Welcome to our alumni website.. ");
      }
    } catch (error) {
      console.error("Login error from frontend backend connection");
    }
  };

  return (
    <div>
      <section>
        <main>
          <div className='login-section'>
            <div className='container-login grid grid-cols-2'>
              <div className='login-image'>
                <img src='/registration.jpg' height='500px' width='500px' alt='' />
              </div>

              <div className='login-form'>
                <h1 className='text-3xl py-5'>Login Form</h1>
                <form onSubmit={handleSubmit}>
                  <div className='mb-4'>
                    <label htmlFor='email'>Email: </label>
                    <input
                      type='email'
                      name='email'
                      id='email'
                      placeholder='Enter your email'
                      value={details.email}
                      className='rounded border-8'
                      onChange={handleInput}
                      required
                      autoComplete='off'
                    />
                  </div>

                  <div className='mb-4'>
                    <label htmlFor='password'>Password: </label>
                    <input
                      type='password'
                      name='password'
                      id='password'
                      placeholder='password'
                      value={details.password}
                      onChange={handleInput}
                      className='rounded border-8'
                      required
                      autoComplete='off'
                    />
                  </div>

                  <button
                    type='submit'
                    className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4
                     rounded-full'
                  >
                    Login Now
                  </button>
                </form>
              </div>
            </div>
          </div>
        </main>
      </section>

      {/* footer */}
      <Footer />
    </div>
  );
};

export default Login;

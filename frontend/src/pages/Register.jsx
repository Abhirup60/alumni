import React, { use, useState } from "react";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../store/auth";

const Register = () => {
  const [user, setUser] = useState({
    username: "",
    email: "",
    phone: "",
    password: "",
  });

  const navigate = useNavigate();
  const { storeTokenInLS } = useAuth();

  const handleInput = (e) => {
    // console.log(e)
    let name = e.target.name;
    // console.log(name);
    let value = e.target.value;
    // console.log(value);

    setUser({
      ...user,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(user);

    try {
      const response = await fetch("http://localhost:5000/api/auth/registration", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });

      console.log(response);

      if (response.ok) {
        const res_data = await response.json();
        console.log("after ok of response at register: ", res_data);

        // store token at localStorage
        // localStorage.setItem('Token is: ', res_data.token);

        // function creation to store the token manually
        storeTokenInLS(res_data.token);

        setUser({ username: "", email: "", phone: "", password: "" });
        navigate("/login");
      }
    } catch (error) {
      console.error("error from registration");
    }
  };

  return (
    <div>
      <section className='mb-9'>
        <main>
          <div className='section-registration'>
            <div className='container-register grid grid-cols-2'>
              <div className='registration-image'>
                <img src='/registration.jpg' alt='' height='500' width='500' />
              </div>

              <div className='reistration-form'>
                <h1 className='text-3xl py-5'>Registration Form</h1>

                <form onSubmit={handleSubmit}>
                  <div className='mb-4'>
                    <label htmlFor='username'>Username: </label>
                    <input
                      type='text'
                      name='username'
                      id='username'
                      placeholder='Enter your username'
                      required
                      autoComplete='off'
                      value={user.username}
                      onChange={handleInput}
                      className='rounded border-8'
                    />
                  </div>

                  <div className='mb-4'>
                    <label htmlFor='email'>Email: </label>
                    <input
                      type='email'
                      name='email'
                      id='email'
                      placeholder='Enter your email'
                      required
                      autoComplete='off'
                      value={user.email}
                      onChange={handleInput}
                      className='rounded border-8'
                    />
                  </div>

                  <div className='mb-4'>
                    <label htmlFor='phone'>Phone: </label>
                    <input
                      type='number'
                      name='phone'
                      id='phone'
                      placeholder='phone'
                      required
                      autoComplete='off'
                      value={user.phone}
                      className='rounded border-8'
                      onChange={handleInput}
                    />
                  </div>

                  <div>
                    <label htmlFor='password'>Password: </label>
                    <input
                      type='password'
                      name='password'
                      id='password'
                      placeholder='Enter your password'
                      required
                      autoComplete='off'
                      value={user.password}
                      onChange={handleInput}
                      className='rounded border-8'
                    />
                  </div>

                  <br />
                  <button
                    type='submit'
                    className='bg-blue-500 hover:bg-blue-700
                     text-white font-bold py-2 px-4 rounded-full'
                  >
                    Signup
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

export default Register;

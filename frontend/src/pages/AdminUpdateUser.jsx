import React, { useState } from "react";
import Footer from "../components/Footer";
import { useParams } from "react-router-dom";
import { useAuth } from "../store/auth";
import { toast } from "react-toastify";



const AdminUpdateUser = () => {
  const  params  = useParams();
  const {authToken} = useAuth();

  const [details, setDeatils] = useState({
    username:"",
    email:"",
  })

  const handleInput = (e)=>{
    let name = e.target.name;
    let value = e.target.value;

    setDeatils({
      ...details,
      [name]:value
    })
  }

  const handleSubmit = async(e)=>{
    e.preventDefault();
    console.log(details);

    try {
      const response = await fetch(`http://localhost:5000/api/admin//users/update/${params.id}`,{
        method:"PATCH",
        headers:{
          "Content-Type":"application/json",
          Authorization: authToken,
        },
        body:JSON.stringify(details),
      })

      const res_data = await response.json();
      console.log("user updated successfully", res_data);
      toast.success("User updated successfully");
    } catch (error) {
      console.log(error);
      toast.error("user not updated");
    }
  }
  return (
    <div>
      <h1 className='text-4xl text-center'>Only admin can update the user.</h1>
      <section>
        <main>
          <div className='update-section'>
            <div className='container-update'>
              {/* <div className='update-image'>
                <img src='/registration.jpg' height='500px' width='500px' alt='' />
              </div> */}

              <div className='update-form ml-5 mb-7 '>
                <h1 className='text-3xl py-5'>Update User</h1>
                <form onSubmit={handleSubmit}>
                  <div className='mb-4'>
                    <label htmlFor='username'>Username: </label>
                    <input
                      type='text'
                      name='username'
                      id='username'
                      placeholder='Username'
                      value={details.username}
                      onChange={handleInput}
                      className='rounded border-8'
                      required
                      autoComplete='off'
                    />
                  </div>

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

                  <button
                    type='submit'
                    className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4
                     rounded-full'
                  >
                    Update
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

export default AdminUpdateUser;

import React, { useState } from "react";
import Footer from "../components/Footer";
import { useAuth } from "../store/auth";
import { useParams } from 'react-router-dom'

const AdminUpdateContact = () => {

  const  params  = useParams();
  const { authToken } = useAuth();

  const [details, setDeatils] = useState({
    email: "",
    phone: "",
  });

  const handleInput = (e) => {
    let name = e.target.name;
    let value = e.targer.value;

    setDeatils({
      ...details,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(setDeatils);

    try {
      const response = await fetch(`https://alumni-server-side.onrender.com/api/admin/contacts/update/${params.id}`, {
        method: "PATCH",
        headers: {
          "Content-Type":"application/json",
          Authorization: authToken,
        },
        body:JSON.stringify(details),
      });

      const res_data = await response.json();
      console.log("user updated successfully", res_data);
      toast.success("User updated successfully");

    } catch (error) {
      toast.error("user not updated");

    }
  };
  return (
    <div>
      This is Contact Update Page
      <section>
        <main>
          <div className='update-section'>
            <div className='container-update'>
              {/* <div className='update-image'>
                <img src='/registration.jpg' height='500px' width='500px' alt='' />
              </div> */}

              <div className='update-form ml-5 mb-7 '>
                <h1 className='text-3xl py-5'>Update Contact</h1>
                <form onSubmit={handleSubmit}>
                  <div className='mb-4'>
                    <label htmlFor='email'>Email: </label>
                    <input
                      type='text'
                      name='email'
                      id='email'
                      placeholder='Email'
                      value={details.email}
                      onChange={handleInput}
                      className='rounded border-8'
                      required
                      autoComplete='off'
                    />
                  </div>

                  <div className='mb-4'>
                    <label htmlFor='phone'>Phone: </label>
                    <input
                      type='number'
                      name='phone'
                      id='phone'
                      placeholder='Phone Number'
                      value={details.phone}
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
      <Footer />
    </div>
  );
};

export default AdminUpdateContact;

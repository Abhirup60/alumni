import React, { useState } from "react";
import Footer from "../components/Footer";
import { useNavigate } from 'react-router-dom';
import { useAuth } from "../store/auth";

const URL = "http://localhost:5000/api/form/contact";

const Contact = () => {
  const [contact, setContact] = useState({
    username: "",
    email: "",
    message: "",
  });

  const [userData, setUserData] = useState(true);

  const {user} = useAuth();
  const navigate = useNavigate();

  if(userData && user){
    setContact({
      username: user.username,
      email: user.email,
      message: "",
    })

    setUserData(false);
  }

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setContact({
      ...contact,
      [name]: value,
    });
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    console.log("Form submitted", contact);

    try {
      const responseContact = await fetch(URL, {
        method:"POST",
        headers:{
          "Content-Type":"application/json",
        },
        body:JSON.stringify(contact),
      });

      console.log(responseContact);

      if(responseContact.ok){
        setContact({username: "",
          email: "",
          message: ""})
        alert("Message sent successfully");
        navigate("/");
      }
    } catch (error) {
      console.error("error from contact with connection");
    }
    
  };

  return (
    <div>
      <section className='contact-section'>
        <div className='container-contact grid grid-cols-2'>
          {/* image section */}
          <div className='contact-image'>
            <img src='/registration.jpg' alt='' height={"500px"} width={"500px"} />
          </div>

          {/* form section */}
          <div className='registration-form flex flex-col ml-5'>
            <h1 className='text-4xl'>Contact Form</h1>
            <form className=' ml-7 mt-5' onSubmit={handleSubmit}>
              <div className='mt-3'>
                <label htmlFor='username'>Username: </label> <br />
                <input
                  type='text'
                  name='username'
                  id='username'
                  placeholder='Enter Your Username'
                  autoComplete='off'
                  required
                  className='rounded border-8'
                  value={contact.username}
                  onChange={handleInput}
                />
              </div>

              <div className='mt-3'>
                <label htmlFor='email'>Email: </label> <br />
                <input
                  type='email'
                  name='email'
                  id='email'
                  placeholder='Email'
                  autoComplete='off'
                  required
                  className='rounded border-8'
                  value={contact.email}
                  onChange={handleInput}
                />
              </div>

              <div className='mt-3'>
                <label htmlFor='email'>Message: </label> <br />
                <textarea
                  name='message'
                  id='message'
                  autoComplete='off'
                  required
                  className='rounded border-8'
                  placeholder='Your queries...'
                  value={contact.message}
                  onChange={handleInput}
                ></textarea>
              </div>

              {/* submit button */}
              <br />
              <button
                type='submit'
                className='bg-blue-500 hover:bg-blue-700
                     text-white font-bold py-2 px-4 rounded-full'
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* footer section */}
      <Footer />
    </div>
  );
};

export default Contact;

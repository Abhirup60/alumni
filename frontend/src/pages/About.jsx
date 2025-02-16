import React from "react";
import Button from "../components/Button";
import Footer from "../components/Footer";
import { useAuth } from "../store/auth";

const About = () => {
  const user = useAuth();
  // console.log("showing in about page: ", user.user);
  const userName = user.user.username;
  const userEmail = user.user.email;
  // console.log(userName);
  // console.log(userEmail);
  return (
    <div>
      <main>
        <section className='about-section'>
          <div className='about grid grid-cols-2'>
            <div className='left-details flex flex-col justify-center items-left p-3 ml-3'>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
              <h1 className="text-2xl">Hii, this is <u>{userName}</u>  and my email is <u>{userEmail}</u></h1>
              <h1 className='text-3xl'>Why Choose Us?</h1>

              <span className="mt-4">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum, libero. Lorem ipsum dolor sit amet.
              </span>

              <span className="mt-4">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum, libero. Lorem ipsum dolor sit amet.
              </span>

              <span className="mt-4">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum, libero. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.
              </span>

              <span className="mt-4">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum, libero. Lorem ipsum dolor sit amet. Lorem, ipsum dolor sit amet consectetur adipisicing.
              </span>

              <span className="mt-4">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum, libero. Lorem ipsum dolor sit amet.
              </span>

              <Button/>
            </div>

            <div className='right-image felx justify-center items-center ml-4'>
              <img src='/registration.jpg' alt='' height={"500px"} width={"500px"} />
            </div>
          </div>
        </section>
      </main>

      {/* 2nd section */}
      <section className='section-analytics mb-6'>
          <div className='container-2nd-home grid grid-cols-4 bg-gray-500 p-5 rounded-lg'>
            <div className='div1 border-r-4 mr-4'>
              <h1 className='text-4xl'>50+</h1>
              <p>registered companies</p>
            </div>

            <div className='div1 border-r-4 mr-4'>
              <h2 className='text-4xl '>100,00+</h2>
              <p>Happy Clients</p>
            </div>

            <div className='div1 border-r-4 mr-4'>
              <h2 className='text-4xl'>500</h2>
              <p>well known developers</p>
            </div>

            <div className='div1'>
              <h2 className='text-4xl'>150+</h2>
              <p>placed from our collage</p>
            </div>
          </div>
        </section>

        {/* footer */}
        <section>
          <p className="mb-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. A quam nisi reiciendis enim reprehenderit dolor! Natus aspernatur ducimus possimus tenetur temporibus eveniet hic molestias laborum dignissimos architecto provident, error dolore sapiente? Cum qui, facilis saepe quibusdam nulla eos totam adipisci voluptas quam, deserunt suscipit? Maiores? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt suscipit eveniet harum ea, nemo consequatur ab commodi quia, quod adipisci nulla aspernatur impedit aut eos qui autem enim reiciendis assumenda laboriosam, necessitatibus ipsam numquam odit blanditiis inventore? Cupiditate ad numquam voluptatum eaque ut inventore nulla voluptatem, labore rerum sit amet?</p>
        <Footer/>
        </section>
    </div>
  );
};

export default About;

import React from "react";
import Button from "../components/Button";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div>
      <main>
        <section className='section-hero'>
          <div className='container-home grid grid-cols-2'>
            <div className='left-details p-10'>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
              <h1 className='text-3xl'>
                Welcome to meet <br /> with Alumnis'
              </h1>
              <p className='mt-3'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero rem exercitationem quia eum perspiciatis
                aliquam culpa laudantium quod aliquid modi. Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Dolore culpa omnis eligendi distinctio perspiciatis dicta.
              </p>
              
              {/* add button component */}
              <Button/>
            </div>

            {/* hero-image */}
            <div className='right-image'>
              <img src='/registration.jpg' alt='' />
            </div>
          </div>
        </section>
      </main>

      {/* 2nd section */}
      <main>
        <section className='section-analytics'>
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
      </main>

      {/* 3rd section */}
      <section className='section-hero mt-9'>
        <div className='container-home grid grid-cols-2'>
          {/* hero-image */}
          <div className='right-image'>
            <img src='/registration.jpg' alt='' />
          </div>

          {/* hero-deatils */}
          <div className='left-details p-10'>
            <p>we are here to help you.</p>
            <h1 className='text-3xl'>
              Get started from today <br /> all the best
            </h1>
            <p className='mt-3'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero rem exercitationem quia eum perspiciatis
              aliquam culpa laudantium quod aliquid modi. Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Dolore culpa omnis eligendi distinctio perspiciatis dicta.
            </p>
            <div className='btn btn-group mt-5'>
              <a href='/contact'>
                <button
                  type='button'
                  className='btn bg-blue-500 hover:bg-blue-700
                   text-white font-bold py-2 px-4
                     rounded-lg'
                >
                  contact us
                </button>
              </a>
              <a href='/service'>
                <button
                  className='btn bg-blue-500 hover:bg-blue-700
                   text-white font-bold py-2 px-4
                     rounded-lg ml-2'
                >
                  Learn more
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* footer section */}
      <Footer/>
    </div>
  );
};

export default Home;

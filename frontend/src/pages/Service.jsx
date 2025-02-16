import React from "react";
import Footer from "../components/Footer";
import { useAuth } from "../store/auth";

const Service = () => {
  const { serveciee } = useAuth();
  // console.log("course service: ", serveciee.serviceData);
  const data = serveciee.serviceData;
  // console.log("here: ", data[0]);

  return (
    <div>
      <section className='service-section grid grid-cols-3 gap-3 p-2'>
        {/* <div className='card bg-slate-500 border-4 border-lime-600'>
          <img src='/registration.jpg' alt='' />
          <div className='grid grid-cols-2'>
            <p>{data[0].course}</p>
            <p>price</p>
          </div>
          <h1 className='text-2xl'>description</h1>
        </div> */}

        {data.map((curElem, index) => {
          const { course, description, price } = curElem;

          return (
            <div key={index} className='card  border-4 border-lime-600 p-3'>
              <img src='/registration.jpg' alt='' />
              <div className='grid grid-cols-2 bg-yellow-200'>
                <p>{`${course}`}</p>
                <p>{price}</p>
              </div>
              <h1 className='text-2xl bg-amber-600 mt-1'>{description}</h1>
            </div>
          );
        })}
      </section>
      <Footer />
    </div>
  );
};

export default Service;

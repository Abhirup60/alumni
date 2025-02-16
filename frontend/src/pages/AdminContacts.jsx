import React, { useEffect } from "react";
import Footer from "../components/Footer";
import { useAuth } from "../store/auth";

const AdminContacts = () => {
  const { getAllContacts } = useAuth();
  const { allcontact } = useAuth();
  // console.log("all contacts from admin contact: ",allcontact);

  useEffect(() => {
    getAllContacts();
  });

  return (
    <div>
      <h1 className='text-4xl'>
        <b>Contact admin panel</b>
      </h1>
      
      <div>
        {allcontact.length > 0 ? (
          <ul>
            {allcontact.map((user) => (
              <li key={user._id}>
                {user.phone} - {user.email}
              </li>
            ))}
          </ul>
        ) : (
          <p>No users found.</p>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default AdminContacts;

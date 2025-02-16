import React, { useEffect } from "react";
import Footer from "../components/Footer";
import { useAuth } from "../store/auth";
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify';

const AdminContacts = () => {
  const { getAllContacts } = useAuth();
  const { allcontact, authToken } = useAuth();
  // console.log("all contacts from admin contact: ",allcontact);

  const deleteUserbyid = async(id)=>{
    console.log(id);
    try {
      const response = await fetch(`https://alumni-server-side.onrender.com/api/admin/contacts/delete/${id}`,{
        method:"DELETE",
        headers:{
          Authorization: authToken,
        }
      })

      if(response.ok){
        const res_data = await response.json();
        console.log("contact deleted successfully");
        toast.success("contact deleted successfully");
        getAllContacts();
      }

    } catch (error) {
      toast.error("not deleted");
    }
  }

  useEffect(() => {
    getAllContacts();
  },[]);

  return (
    <div>
      <h1 className='text-4xl'>
        <b>Contact admin panel</b>
      </h1>
      <div>
        <table style={{ width: "70%", borderCollapse: "collapse", marginLeft: "2rem", marginBottom: "3rem" ,marginTop:"2rem" }}>
          <thead>
            <tr>
              <th style={{ border: "1px solid black", padding: "8px", backgroundColor: "#f2f2f2", textAlign: "left" }}>
                Email
              </th>
              <th style={{ border: "1px solid black", padding: "8px", backgroundColor: "#f2f2f2", textAlign: "left" }}>
                Phone
              </th>
              <th style={{ border: "1px solid black", padding: "8px", backgroundColor: "#f2f2f2", textAlign: "left" }}>
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {allcontact.length > 0 ? (
              allcontact.map((user) => (
                <tr key={user._id}>
                  <td style={{ border: "1px solid black", padding: "8px" }}>{user.email}</td>
                  <td style={{ border: "1px solid black", padding: "8px" }}>{user.phone}</td>
                  <td style={{ border: "1px solid black", padding: "8px" }}>
                    
                    <button
                      className='btn bg-blue-500 hover:bg-blue-700
                   text-white font-bold py-2 px-4
                     rounded-lg ml-2'
                    >
                      Edit
                    </button>
                    <button
                      className='btn bg-green-500 hover:bg-green-700
                   text-white font-bold py-2 px-4
                     rounded-lg ml-8'
                      onClick={() => deleteUserbyid(user._id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan='3'>No users found.</td>
              </tr>
            )}
          </tbody>
        </table>
       
      </div>
      {/* <div>
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
      </div> */}
      <Footer />
    </div>
  );
};

export default AdminContacts;

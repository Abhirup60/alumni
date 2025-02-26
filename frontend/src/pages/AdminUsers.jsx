import React, { useEffect } from "react";
import Footer from "../components/Footer";
import { useAuth } from "../store/auth";
import { Link } from 'react-router-dom'

const AdminUsers = () => {
  const { getAllUsers, authToken } = useAuth();
  const { allusers } = useAuth();
  // console.log("all users from admin: ", allusers);
  
  useEffect(() => {
    getAllUsers();
  },[]);

  const deleteUserbyid = async (id) => {
    try {
      console.log(id);
      const response = await fetch(`https://alumni-server-side.onrender.com/api/admin/users/delete/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: authToken,
        },
      });

      if (response.ok) {
        const res = await response.json();
        console.log("user deleted successfully", res);
        getAllUsers();
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      {/* we have to show the user data from db */}
      <h1 className='text-4xl mt-2 mb-3'>
        <b>Admin Users panel</b>
      </h1>
      <div>
        <table style={{ width: "70%", borderCollapse: "collapse", marginLeft: "2rem", marginBottom: "3rem" }}>
          <thead>
            <tr>
              <th style={{ border: "1px solid black", padding: "8px", backgroundColor: "#f2f2f2", textAlign: "left" }}>
                Name
              </th>
              <th style={{ border: "1px solid black", padding: "8px", backgroundColor: "#f2f2f2", textAlign: "left" }}>
                Email
              </th>
              <th style={{ border: "1px solid black", padding: "8px", backgroundColor: "#f2f2f2", textAlign: "left" }}>
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {allusers.length > 0 ? (
              allusers.map((user) => (
                <tr key={user._id}>
                  <td style={{ border: "1px solid black", padding: "8px" }}>{user.username}</td>
                  <td style={{ border: "1px solid black", padding: "8px" }}>{user.email}</td>
                  <td style={{ border: "1px solid black", padding: "8px" }}>
                    
                    <button
                      className='btn bg-blue-500 hover:bg-blue-700
                   text-white font-bold py-2 px-4
                     rounded-lg ml-2'
                    >
                      <Link to={`/admin/users/${user._id}/edit`} >Edit</Link>
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
        {/* {allusers.length > 0 ? (
          <ul>
            {allusers.map((user) => (
              <li key={user._id}>
                {user.username} - {user.email}
              </li>
            ))}
          </ul>
        ) : (
          <p>No users found.</p>
        )} */}
      </div>
      <Footer />
    </div>
  );
};

export default AdminUsers;

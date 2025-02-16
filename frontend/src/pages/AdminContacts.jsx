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
        <table style={{ width: "70%", borderCollapse: "collapse", marginLeft: "2rem", marginBottom: "3rem" }}>
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
            {allusers.length > 0 ? (
              allusers.map((user) => (
                <tr key={user._id}>
                  <td style={{ border: "1px solid black", padding: "8px" }}>{user.email}</td>
                  <td style={{ border: "1px solid black", padding: "8px" }}>{user.phone}</td>
                  <td style={{ border: "1px solid black", padding: "8px" }}>
                    <button
                      className='btn bg-blue-500 hover:bg-blue-700
                   text-white font-bold py-2 px-4
                     rounded-lg ml-2'
                    >
                      <Link to={`/admin/users/${user._id}/edit`}>Edit</Link>
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

import React, { useState } from "react";
import "./users.css";

// Users component receives a prop 'usersList'
const Users = ({ usersList }) => {
  // State variables to manage sorting
  const [sortBy, setSortBy] = useState("");
  const [asc, setAsc] = useState(false);

  // Function to get sorted user data based on current sorting criteria
  const getSortedData = () => {
    return usersList.sort((x, y) => {
      if (x[sortBy] > y[sortBy]) {
        return asc ? 1 : -1;
      } else if (x[sortBy] < y[sortBy]) {
        return asc ? -1 : 1;
      } else {
        return 0;
      }
    });
  };

  return (
    <div style={{ padding: "20px" }}>
      {/* Display Users title */}
      <h3 className="title is-3">Users</h3>
      
      {/* Table to display user data */}
      <table className="table is-striped" style={{ width: "100%" }}>
        <thead>
          <tr>
            {/* Table headers with sorting functionality */}
            <th
              onClick={() => {
                setSortBy("id");
                setAsc(!asc);
              }}
            >
              Id
            </th>
            <th
              onClick={() => {
                setSortBy("first");
                setAsc(!asc);
              }}
            >
              First Name
            </th>
            <th
              onClick={() => {
                setSortBy("last");
                setAsc(!asc);
              }}
            >
              Last Name
            </th>
            <th
              onClick={() => {
                setSortBy("coins");
                setAsc(!asc);
              }}
            >
              Coins
            </th>
          </tr>
        </thead>
        <tbody>
          {/* Map through sorted user data and display in table */}
          {getSortedData().map((user, idx) => (
            <tr key={idx}>
              {/* Map through each user's values and display in table cells */}
              {Object.values(user).map((cell, idx2) => (
                <td key={idx2}>{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Users;

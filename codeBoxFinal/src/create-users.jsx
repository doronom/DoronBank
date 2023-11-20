import React, { useState } from "react";

// CreateUser component receives prop 'createUser' which is a function to create a new user
const CreateUser = ({ createUser }) => {
  // State variables to track the input values for user creation
  const [id, setId] = useState(0);
  const [first, setFirst] = useState("");
  const [last, setLast] = useState("");
  const [coins, setCoins] = useState("");

  return (
    <div style={{ padding: "20px" }}>
      <h3 className="title is-3">Create User</h3>
      {/* Input field for User Id */}
      <input
        onChange={({ target: { value } }) => setId(Number(value))}
        value={id}
        style={{ marginBottom: "10px" }}
        id="user-id"
        className="input is-info"
        type="number"
        placeholder="User Id"
      />
      {/* Input field for First Name */}
      <input
        onChange={({ target: { value } }) => setFirst(value)}
        value={first}
        style={{ marginBottom: "10px" }}
        id="first-name"
        className="input is-info"
        type="text"
        placeholder="First Name"
      />
      {/* Input field for Last Name */}
      <input
        onChange={({ target: { value } }) => setLast(value)}
        value={last}
        style={{ marginBottom: "10px" }}
        id="last-name"
        className="input is-info"
        type="text"
        placeholder="Last Name"
      />
      {/* Input field for Total Coins with constraints */}
      <input
        onChange={({ target: { value } }) => setCoins(value)}
        value={coins}
        style={{ marginBottom: "10px" }}
        id="total-coins"
        className="input is-info"
        type="number"
        min="2000"
        max="80000"
        placeholder="Total coins"
      />
      {/* Button to trigger the createUser function */}
      <button
        onClick={() => {
          // Call createUser function with the provided user details
          createUser({ id,  first, last, coins: Number(coins) });
        }}
        className="button is-medium is-fullwidth is-info"
      >
        Create User
      </button>
    </div>
  );
};

export default CreateUser;

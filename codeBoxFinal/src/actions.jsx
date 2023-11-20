import React, { useState } from "react";

// Actions component receives three functions as props: addFreeCoins, deleteRichestUser, depositUserCoins
const Actions = ({ addFreeCoins, deleteRichestUser, depositUserCoins }) => {
  // State variables for user input
  const [userIdToUpdate, setUserIdToUpdate] = useState("");
  const [userCoinsToUpdate, setUserCoinsToUpdate] = useState("");

    // Function to handle deposit action
    const handleDeposit = () => {
      // Call depositUserCoins function with the provided user details
      depositUserCoins(Number(userIdToUpdate), userCoinsToUpdate);
  
      // Clear the input fields
      setUserIdToUpdate("");
      setUserCoinsToUpdate("");
    };

  return (
    // Container with padding
    <div style={{ padding: "20px" }}>
      {/* Title for the Actions section */}
      <h3 className="title is-3">Actions</h3>

      {/* Action: Add everyone 5000 coins for free */}
      <div className="columns is-mobile">
        <div className="column is-three-quarters">
          {/* Subtitle for the action */}
          <h2 className="subtitle is-5">Add Everyone 5000 coins for free:</h2>
        </div>
        <div className="column is-one-quarter">
          {/* Button triggering the addFreeCoins function */}
          <button
            id="add-coins-free"
            onClick={() => addFreeCoins()}
            className="button is-success"
          >
            Add 5000 Now
          </button>
        </div>
      </div>

      {/* Action: Delete Richest User */}
      <div className="columns is-mobile">
        <div className="column is-three-quarters">
          {/* Subtitle for the action */}
          <h2 className="subtitle is-5">Delete Richest User</h2>
        </div>
        <div className="column is-one-quarter">
          {/* Button triggering the deleteRichestUser function */}
          <button
            id="delete-richest"
            onClick={() => deleteRichestUser()}
            className="button is-danger"
          >
            Delete
          </button>
        </div>
      </div>

      {/* Action: Deposit coins to user */}
      <div className="columns is-mobile">
        <div className="column">
          {/* Subtitle for the action */}
          <h2 className="subtitle is-5">Deposit coins to user:</h2>
        </div>
      </div>
      <div className="columns is-mobile">
        <div className="column is-one-third">
          {/* Input for User Id */}
          <input
            value={userIdToUpdate}
            onChange={({ target: { value } }) => setUserIdToUpdate(value)}
            id="userid-update"
            placeholder="User Id"
            className="input"
            type="number"
          />
        </div>
        <div className="column is-one-third">
          {/* Input for Coins */}
          <input
            value={userCoinsToUpdate}
            onChange={({ target: { value } }) => setUserCoinsToUpdate(value)}
            id="coins-update"
            placeholder="Coins"
            className="input"
            type="number"
          />
        </div>
        <div className="column is-one-third">
          {/* Button triggering the depositUserCoins function */}
          <button
            id="desposit-coins"
            onClick={handleDeposit}
            className="button is-success"
          >
            Deposit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Actions;

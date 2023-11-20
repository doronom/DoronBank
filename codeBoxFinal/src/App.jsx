import React, { useState } from "react";
import "bulma/css/bulma.min.css";
import BankTitle from "./bank-title";
import Tabs from "./tabs";
import Users from "./users";
import CreateUser from './create-users'
import Actions from './actions';
import { bankUsers } from './data';

// Array of tab values for the Tabs component
const tabsValues = ["Users", "Create User", "Actions"];

export default function App() {
  // State for selected tab index and users data
  const [selectedTab, setSelectedTab] = useState(0);
  const [users, setUsers] = useState(bankUsers);

  // Function to update users data when a new user is created
  const updateUsers = (user) => {
    const userExist = users.find((x) => x.id === Number(user.id));
    if (!userExist) {
      const usersToUpdate = [...users, user];
      setUsers(usersToUpdate);
    }
  };

  // Function to calculate the total coins in the bank
  const calculateTotalCoins = () => {
    let total = 0;
    for (let i = 0; i < users.length; i++) {
      total += users[i].coins;
    }
    return total;
  };

  // Function to add 5000 free coins to all users
  const udpateFreeCoins = () => {
    const updatedList = [...users];
    for (let i = 0; i < users.length; i++) {
      updatedList[i].coins += 5000;
    }
    setUsers(updatedList);
  };

  // Function to delete the user with the highest coin amount
  const deleteRichestUser = () => {
    let richestUserCoinsAmount = -1;
    let richestUserIndex = 0;
    for (let i = 0; i < users.length; i++) {
      if (users[i].coins > richestUserCoinsAmount) {
        richestUserCoinsAmount = users[i].coins;
        richestUserIndex = i;
      }
    }
    setUsers(users.filter((x, idx) => idx !== richestUserIndex));
  };

  // Function to add coins to a specific user
  const addCoinsToUser = (userId, coins) => {
    const updatedList = [...users];
    const userToUpdate = updatedList.find((x) => x.id === userId);
    if (userToUpdate) {
      userToUpdate.coins += Number(coins);
      setUsers(updatedList);
    }
  };

  return (
    // Main container with Bulma styling
    <div className="App">
      {/* BankTitle component displaying the bank information */}
      <BankTitle totalCoins={calculateTotalCoins()} />
      
      {/* Tabs component for navigation */}
      <Tabs
        tabs={tabsValues}
        tabChange={(tabIndex) => setSelectedTab(tabIndex)}
      />

      {/* Conditional rendering based on the selected tab */}
      {selectedTab === 0 && <Users usersList={users} />}
      {selectedTab === 1 && (
        <CreateUser createUser={(user) => updateUsers(user)} />
      )}
      {selectedTab === 2 && (
        <Actions
          addFreeCoins={() => udpateFreeCoins()}
          deleteRichestUser={() => deleteRichestUser()}
          depositUserCoins={(userId, coins) => addCoinsToUser(userId, coins)}
        />
      )}
    </div>
  );
}

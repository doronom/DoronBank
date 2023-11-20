import React, { useState } from "react";
import "bulma/css/bulma.min.css";
import BankTitle from "./bank-title";
import Tabs from "./tabs";
import Users from "./users";
import CreateUser from "./create-user";
import Actions from "./actions";
import { bankUsers } from "./data";

const tabsValues = ["Users", "Create User", "Actions"];

export default function App() {
  const [selectedTab, setSelectedTab] = useState(0);
  const [users, setUsers] = useState(bankUsers);

  const updateUsers = (user) => {
    const userExist = users.find((x) => x.id === Number(user.id));
    if (!userExist) {
      const usersToUpdate = [...users, user];
      setUsers(usersToUpdate);
    }
  };

  const calculateTotalCoins = () => {
    let total = 0;
    for (let i = 0; i < users.length; i++) {
      total += users[i].coins;
    }
    return total;
  };

  const udpateFreeCoins = () => {
    const updatedList = [...users];
    for (let i = 0; i < users.length; i++) {
      updatedList[i].coins += 5000;
    }
    setUsers(updatedList);
  };

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

  const addCoinsToUser = (userId, coins) => {
    const updatedList = [...users];
    const userToUpdate = updatedList.find((x) => x.id === userId);
    if (userToUpdate) {
      userToUpdate.coins += Number(coins);
      setUsers(updatedList);
    }
  };

  return (
    <div className="App">
      <BankTitle totalCoins={calculateTotalCoins()} />
      <Tabs
        tabs={tabsValues}
        tabChange={(tabIndex) => setSelectedTab(tabIndex)}
      />
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

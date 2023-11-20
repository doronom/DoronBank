import React from "react";

// BankTitle component receives prop 'totalCoins' to display the total number of coins
const BankTitle = ({ totalCoins }) => {
  return (
    // Hero section with a warning color
    <section className="hero is-warning">
      <div className="hero-body">
        {/* Title of the Bank */}
        <p className="title">Doron's Bank</p>
        {/* Subtitle providing a description */}
        <p className="subtitle">Manage your coins</p>
        {/* Title with size 5 displaying the total number of bank coins */}
        <p className="title is-5">Total Bank coins {totalCoins}</p>
      </div>
    </section>
  );
};

export default BankTitle;

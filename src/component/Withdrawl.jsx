import React from 'react';
import './styles/Withdrawl.css';

function Withdrawal({ coins, onRedeem }) {
  const giftOptions = [
    { name: "Flipkart Gift Voucher", cost: 500 },
    { name: "Amazon Gift Voucher", cost: 700 },
    { name: "Google Play Gift Card", cost: 300 },
  ];

  return (
    <div className="withdrawal-container">
      <h2>Redeem Your Coins</h2>
      <p>Total Coins: {coins}</p>
      <div className="voucher-options">
        {giftOptions.map((option, index) => (
          <div key={index} className="voucher-card">
            <h3>{option.name}</h3>
            <p>Cost: {option.cost} coins</p>
            <button
              onClick={() => onRedeem(option.cost)}
              disabled={coins < option.cost}
            >
              Redeem
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Withdrawal;

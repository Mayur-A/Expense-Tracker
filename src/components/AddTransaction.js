import React, { useState, useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

export const AddTransaction = () => {
  const [text, SetText] = useState("");
  const [amount, SetAmount] = useState(0);
  const { addTransaction } = useContext(GlobalContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    debugger;
    const newTransaction = {
      id: Math.floor(Math.random() * 100000000),
      text,
      amount: +amount,
    };

    addTransaction(newTransaction);
    clearFields();
  };

  const clearFields = () => {
    SetText("");
    SetAmount(0);
  };
  return (
    <>
      <h3>Add new transaction</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input
            type="text"
            value={text}
            onChange={(e) => {
              SetText(e.target.value);
            }}
            placeholder="Enter text..."
          />
        </div>
        <div className="form-control">
          <label htmlFor="amount">
            Amount <br />
            (negative - expense, positive - income)
          </label>
          <input
            type="number"
            value={amount}
            onChange={(e) => {
              SetAmount(e.target.value);
            }}
            placeholder="Enter amount..."
          />
        </div>
        <button className="btn">Add transaction</button>
      </form>
    </>
  );
};

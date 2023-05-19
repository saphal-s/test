import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Table from "react-bootstrap/Table";
import "./style.css";
import { fetchTransaction } from "../store/action/TransactinAction";
import { LOGOUT } from "../store/types/UserTypes";

const Dashboard = () => {
  const dispatch = useDispatch();

  const logOut = () => {
    localStorage.removeItem("myToken");
    dispatch({ type: LOGOUT });
    window.location.reload();
  };
  const { transaction } = useSelector((state) => state.TransactionReducer);
  // getTransaction();
  useEffect(() => {
    dispatch(fetchTransaction());
  }, [dispatch]);
  console.log(transaction);
  return (
    <div className="dashboard">
      <div className="logout">
        <button onClick={logOut}>Log Out</button>
      </div>
      <div>
        <h2>List of transaction</h2>
        <div className="container">
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>S.N</th>
                <th>Sender Full Name</th>
                <th>Receiver Full Name</th>
                <th>Current Status</th>
                <th>Send Amount</th>
                <th>Receive Amount</th>
                <th>Send Country</th>
                <th>Receive Country</th>
              </tr>
            </thead>
            <tbody>
              {transaction &&
                transaction.map((t, i) => (
                  <tr key={t.id}>
                    <td>{i + 1}</td>
                    <td>{t["Sender Full Name"]}</td>
                    <td>{t["Receiver Full Name"]}</td>
                    <td>{t["Current Status"]}</td>
                    <td>{t["Send Amount/送金額"]}</td>
                    <td>{t["Receive Amount/受取金額"]}</td>
                    <td>{t["Send Country/送金国"]}</td>
                    <td>{t["Receive Country/受取国"]}</td>
                  </tr>
                ))}
            </tbody>
          </Table>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

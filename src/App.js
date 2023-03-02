import "./App.css";
import Expence from "./component/Expenses/Expence";
import InputExpense from "./component/inputexpense/InputExpense";
import React, { useState } from "react";

function App() {
  // step1 : Static data in Array.
  const data = [
    {
      date: new Date(2023, 3, 16),
      title: "Monthley Expence",
      amount: 1000,
      id: 1,
    },
    {
      date: new Date(2023, 3, 17),
      title: "Rent",
      amount: 1500,
      id: 2,
    },

  ];

  // step 2: assign all data to useState
  const [apparraydata, setarraydata] = useState(data);

  // function getData(inputexpensedata){
  //   setarraydata(
  //     [...arraydata,
  //       {date: obj.date,
  //       title: obj.title,
  //       amount: obj.amount,
  //       id:obj.id}]
  //     );
  // }

  const getData = (inputexpensedata) => {
    setarraydata((apparraydata) => {
      return [inputexpensedata, ...apparraydata];
    });
  };

  function deleteelement(id) {
    setarraydata(apparraydata.filter((a) => a.id !== id));
  }

  return (
    <div className="maincontainer">
      <InputExpense getData={getData} />
      <Expence deleteelement={deleteelement} arraydata={apparraydata} />
    </div>
  );
}

export default App;

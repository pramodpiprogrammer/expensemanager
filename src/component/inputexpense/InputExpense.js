import React, { useState } from "react";

import "./InputExpense.css";

const InputExpense = (props) => {
  // const [title, settitle] = useState('');
  // const [amount, setamount] = useState('');
  // const [date, setdate] = useState('');

  const [newexpense, setnewexpense] = useState({
    settitle: "",
    setamount: "",
    setdate: "",
  });

  const ontitlechange = (event) => {
    
    setnewexpense({
      ...newexpense,

      settitle: event.target.value,
    });
  };

  const onamountchange = (event) => {
   
    setnewexpense({
      ...newexpense,
      // setamount: parseInt(event.target.value),
      setamount: event.target.value,

    });
  };
  const ondatechange = (event) => {
    // console.log("onchange called")
    setnewexpense({
      ...newexpense,
      setdate: event.target.value,
    });
    
  };


  function liftingState(e) {
    e.preventDefault();

    if(newexpense.settitle.trim().length=== 0 ||
     newexpense.setdate.trim().length=== 0 ||
     newexpense.setamount.trim().length=== 0){
      alert("Please enter all data fields")
      return;
     }

    let newexpensedata = {
      date: new Date(newexpense.setdate),
      title: newexpense.settitle,
      amount:parseInt( newexpense.setamount),

      id: Math.random().toString(),
    };

    props.getData(newexpensedata);

    setnewexpense({
      settitle: "",
      setamount: "",
      setdate: "",
    });


  }

  return (
    <form onSubmit={liftingState}>
      <div className="inputexpense">
        <div className="titleandamount">
          <input
            className="ititle"
            value={newexpense.settitle}
            type="text"
            onChange={ontitlechange}
            placeholder="Enter Expence Name"
          />
          <input
            className="iamount"
            value={newexpense.setamount}
            type="number"
            onChange={onamountchange}
            placeholder="$"
          />
        </div>
        <div className="date">
          <input
            className="idate"
            value={newexpense.setdate}
            onChange={ondatechange}
            type="date"
          />
        </div>
        <div>
          <button className="ibtn2" type="submit">
            ADD EXPENCE
          </button>
        </div>
      </div>
    </form>
  );
};

export default InputExpense;

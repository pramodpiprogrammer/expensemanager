import "./Expencelist.css";
import Displaydate from "../Displaydate/Displaydate";
import React, { useState } from "react";
import Card from "../UI/Card";
function Expencelist(props) {

  const arrayofobj = props.arraydata;

  if (arrayofobj.length == 0) {
    return <p>Data Not Found</p>;
  }

  // console.log("printing array in Expencelist component"+props.arraydata);

  function removeelement(event) {
    event.preventDefault();
    console.log("in array element remove function in Expenselist component");
    props.removelementid(event.target.value);
  }

  return (
    <>
      {arrayofobj.map((singleobject) => (
        <Card className="main" key={singleobject.id}>
          <Displaydate ddate={singleobject.date} />

          <div id="title">{singleobject.title}</div>

          <div id="amountouter">
            <div id="amount">{singleobject.amount}</div>
          </div>

          <button
            className="btn1"
            value={singleobject.id}
            type="button"
            onClick={removeelement}
          >
            X
          </button>
        </Card>
      ))}
    </>
  );
}

export default Expencelist;

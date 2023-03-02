import React, { useState } from "react";
import Expenselist from "./Expenselist";
import Card from "../UI/Card";
import "./expence.css";
import ExpenseFilter from "./ExpenseFilter";
import ExpenseChart from "../Chart/ExpenseChart";

const Expence = (props) => {
  const [filterYear, setFilterYear] = useState("2023");

  const filterarraydata = props.arraydata.filter(
    (filterdata) => filterdata.date.getFullYear().toString() === filterYear
  );

//   console.log(filterarraydata);

  function removelement(id) {
    props.deleteelement(id);
  }

  const filterchangeHandler = (selectedYear) => {
    setFilterYear(selectedYear);

    console.log(selectedYear);
    console.log(filterYear);
  };

  return (
    <Card className="expence1">

      <ExpenseFilter
        selected={filterYear}
        onChangeFilter={filterchangeHandler}
      />

      <ExpenseChart arraydata={filterarraydata}/>

      <Expenselist removelementid={removelement} arraydata={filterarraydata} />
      
    </Card>
  );
};

export default Expence;

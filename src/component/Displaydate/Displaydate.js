import React from 'react';
import "./Displaydate.css";


const Displaydate = (props) => {
    
    let day=props.ddate.toLocaleString('hi-IN', { day: '2-digit' });
    let month=props.ddate.toLocaleString('hi-IN', { month: 'long' });

    // console.log(day);
    let year=props.ddate.getFullYear();
    // console.log(year);
    return (
        <div id="date">
            <div id="day">{day}</div>
            <div id="month">{month}</div>
            <div id="year">{year}</div>
        </div>

    );
}

export default Displaydate;

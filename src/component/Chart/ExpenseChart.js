import React from 'react';
import Chart from './Chart';
import './ExpenseChart.css'

const ExpenseChart = (props) => {

    const chartData=[
        {lable:'jan',value:0},
        {lable:'feb',value:0},
        {lable:'mar',value:0},
        {lable:'apr',value:0},
        {lable:'may',value:0},
        {lable:'jun',value:0},
        {lable:'jul',value:0},
        {lable:'aug',value:0},
        {lable:'sep',value:0},
        {lable:'oct',value:0},
        {lable:'nov',value:0},
        {lable:'dec',value:0}

    ]



    const filtereddata=props.arraydata;
    
    if(props.arraydata.length==0){
        return <p>No Data</p>
    }

    for (const objectofarray of filtereddata) {
        const month=objectofarray.date.getMonth();
        chartData[month].value+=objectofarray.amount;
    }

    // console.log(chartData)

    return (
        <div className='expensechart'>
            <Chart chartData={chartData}/>

            <div className='chartsubinfo'>
                <p>*All Data in percent</p>
            </div>
        </div>
        
    );
}

export default ExpenseChart;

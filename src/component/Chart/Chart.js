import React from 'react';
import Chartbar from './Chartbar';
import './Chart.css'


const Chart = (props) => {


    const amountArray=props.chartData.map((amount)=>amount.value)
    // console.log(amountArray);
    const maxAmount=Math.max(...amountArray);
    // console.log(maxAmount);

    return (
        <div className='chart'>

            {
                props.chartData.map(
                    (percentbar)=>
                    
                    (<Chartbar 
                        key={percentbar.lable}
                        maxamount={maxAmount}
                        amount={percentbar.value}
                        
                        lable={percentbar.lable} />)
                )
            }
        </div>
    );
}

export default Chart;

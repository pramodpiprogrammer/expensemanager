import React from 'react';
import './Chartbar.css'

const Chartbar = (props) => {

    let percentAmount;

    if(props.maxamount>0){
         percentAmount=Math.round((props.amount/props.maxamount)*100);

    }



    // console.log(percentAmount);


    return (
        <div className='chartbar'>

            <div className='outerbar'>
                <div className='innerbar'
                style={{ height: percentAmount }}
                >
                    
                </div>
            </div>
            <div>{props.lable}</div>
            
        </div>
    );
}

export default Chartbar;

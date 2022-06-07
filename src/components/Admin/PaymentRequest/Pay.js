import React from 'react';

export default function Pay(props) {
    const{_id,name,amount,date,method} = props.anno;
  return (
    <div>
        <h5>Name of the payer   : {name}</h5>
        <h5>Amount of the payment   : {amount}</h5>
        <h5>Date of the Transaction done   :{date}</h5>
        <h5>Method   :{method}</h5>

        <button>Accept</button>
        <button>Decline</button>
    </div>
  )
}
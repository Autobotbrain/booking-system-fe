import React from 'react';

export default function Pay(props) {
    const{_id,amount,date,method} = props.anno;
  return (
    <div>
        <h4>{amount}</h4>
        <p>{date}</p>
        <p>{method}</p>
    </div>
  )
}
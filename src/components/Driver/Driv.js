import React from 'react'

export default function Driv(props) {
    const{_id,Title,Description} = props.anno;
  return (
    <div>
        <h4>{Title}</h4>
        <p>{Description}</p>
    </div>
  )
}



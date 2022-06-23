import React from 'react'
import "../Styles/Annousment.css";

export default function (props) {
    const{_id,Title,Description} = props.anno;
  return (
    <div>
        <h4 id='titleAnno'>{Title}</h4>
        <p id='DescriptionAnno'>{Description}</p>
    </div>
  )
}

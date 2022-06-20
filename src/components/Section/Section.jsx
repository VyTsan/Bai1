import React from 'react'
import './index.css'

const Section = ({title,content,imgURL}) => {
  return (
    <div class='container'>
      <div class='row'>
        <div className="col-md-5 mt-md-5">
          <h2>{title}</h2>
          <p>{content}</p>
        </div>
        <div className="col-md-7">
          <img src={imgURL} alt={title} />
        </div>
      </div>
    </div>
  )
}

export default Section
import React from 'react'
import "./index.css"

const Title = ({currency,country}) => {

  return (
    <h5 class='title'>Tiền {currency} của nước {country}</h5>
  )
}

export default Title
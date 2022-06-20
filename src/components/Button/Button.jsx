import React from 'react'
import './index.css'

const Button = ({name}) => {
  return (
    <button type="button" class="btn btn-primary">{name}</button>
  )
}

export default Button
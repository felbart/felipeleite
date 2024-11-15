/* eslint-disable no-unused-vars */
import React from 'react'

const TechBadge = (props) => {
  return (
    // eslint-disable-next-line react/prop-types
    <span className='text-secondary-400 bg-gray-800/80 text-sm py-1 px-3 rounded-md'>{props.nome}</span>
  )
}

export default TechBadge
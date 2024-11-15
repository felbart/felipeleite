import React from 'react'

const TechBadge = ({ nome }) => {
  return (
    <span className='text-secondary-400 bg-gray-800/80 text-sm py-1 px-3 rounded-md'>{nome}</span>
  )
}

export default TechBadge
import React from 'react'

const Image: React.FC<{ src: string, alt?: string }> = ({ src, alt }) => {
  if(!src || typeof src !== 'string')
    throw new Error('You should pass src props and type should be a string')
  return (
    <img
      className='card-image'
      src={src}
      alt={alt || 'Card Image'}
    />
  )
}

export default Image
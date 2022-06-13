import React, { useState } from 'react'
import './Tour.css'

const Tour = ({ id, image, info, name, price, onRemoveTour }) => {

  const handleRemoveTour = (id) => {
    onRemoveTour(id);
  }

  const [readMore, setReadMore] = useState(false);
  return (
    <article className='single-tour'>
      <img src={image} alt={name} />
      <footer>
        <div className='tour-info'>
          <h4>{name}</h4>
          <h4 className='price'>${price}</h4>
        </div>
        <p>
          {readMore ? info : `${info.substring(0, 200)}... `}
          <button onClick={() => { setReadMore(!readMore) }}>
            {readMore ? 'Show less' : 'Read more'}
          </button>
        </p>
        <button className='delete-btn' onClick={() => { handleRemoveTour(id) }}>Not interested</button>
      </footer>
    </article>
  )
}

export default Tour
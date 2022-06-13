import React from 'react'
import Tour from './Tour'
import './Tours.css'

const Tours = ({tours, onRemoveTour}) => {
  return (
    <section>
        <div className='title'>
            <h1>Our Tours</h1>
            <div className='underline'></div>
        </div>
        <div>
            {
                tours.map((tour) => {
                    return (
                        <Tour key={tour.id} {...tour} onRemoveTour={onRemoveTour}/>
                    )
                })
            }
        </div>
    </section>
  )
}

export default Tours
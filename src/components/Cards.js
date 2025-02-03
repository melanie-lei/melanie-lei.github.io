import React from 'react'
import CardItem from './CardItem'
import './Cards.css'

function Cards() {
  return (
    <div className='cards'>
      <h1>Check these out!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem src='/images/classroom.jpg'
              text='after school: A visual novel'
              label='Game'
              path='https://github.com/melanie-lei/after-school' />
            <CardItem src='/images/medium.png'
              text='Tuesday: A Google Calendar Extension'
              label='Extension'
              path='https://github.com/sherwinchiu/tuesday' />
          </ul>
          <ul className='cards__items'>
            <CardItem src='/images/spookyspider.png'
              text='Spider Cave Game'
              label='Game'
              path='https://rn-games.itch.io/spider-cave-game-demo' />
            <CardItem src='/images/crypticlogs.jpg'
              text='Coming Soon...'
              label='Game'
              path='/' />

          </ul>

        </div>
      </div>
    </div>
  )
}

export default Cards
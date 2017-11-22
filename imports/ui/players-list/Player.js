import React from 'react'
import PropTypes from 'prop-types'
import { Players } from '../../api/players'

const Player = ({ player, rank, position }) => {
  const { _id, score, name } = player
  const handleRemove = () => {
    Players.remove(_id)
  }

  const handleAdd = () => {
    Players.update(_id, { $inc: { score: 1 } })
  }

  const handleSub = () => {
    Players.update(_id, { $inc: { score: -1 } })
  }
  const itemClassName = `item item__position-${rank}`
  return (
    <div className={itemClassName}>
      <div className='player'>
        <div>
          <h3 className='player__name'>{name}</h3>
          <h5 className='player__position'>{position} place</h5>
          <p className='player__stats'>score: {score} points</p>
        </div>
        <div className='player__actions'>
          <button className='button button--round' onClick={handleAdd}>+</button>
          <button className='button button--round' onClick={handleSub}>-</button>
          <button className='button button--round' onClick={handleRemove}>X</button>
        </div>
      </div>
    </div>
  )
}

Player.propTypes = {
  player: PropTypes.object.isRequired
}

export default Player

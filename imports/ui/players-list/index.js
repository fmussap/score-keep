import React from 'react'
import PropTypes from 'prop-types'
import FlipMove from 'react-flip-move'

import Player from './Player'

const PlayersList = ({ players }) => {
  const renderPlayers = () => {
    if (players.length === 0) {
      return (
        <div className='item'>
          <p className='item__message'>Enter a new name</p>
        </div>
      )
    }
    return (
      players.map((player) => {
        return (
          <div key={player._id}>
            <Player
              player={player}
              rank={player.rank}
              position={player.position}
            />
          </div>
        )
      })
    )
  }

  return (
    <div>
      <FlipMove duration={750} maintainContainerHeight easing='ease-out'>
        {renderPlayers()}
      </FlipMove>
    </div>
  )
}

PlayersList.propTypes = {
  players: PropTypes.array.isRequired
}

export default PlayersList

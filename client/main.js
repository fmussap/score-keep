import React from 'react'
import ReactDom from 'react-dom'
import { Meteor } from 'meteor/meteor'
import { Tracker } from 'meteor/tracker'

import { Players } from '../imports/api/players'

const renderPlayers = (players) => {
  return players.map((player) => {
    const handleRemove = () => {
      Players.remove({
        _id: player._id
      })
    }

    const handleAdd = () => {
      Players.update(
        {
          _id: player._id
        },
        {
          $set: {
            score: player.score + 1
          }
        }
      )
    }

    const handleSub = () => {
      Players.update(
        {
          _id: player._id
        },
        {
          $set: {
            score: player.score - 1
          }
        }
      )
    }

    return (
      <div
        key={player._id}
      >
        {player.name} score: {player.score}
        <button onClick={handleAdd}>+</button>
        <button onClick={handleSub}>-</button>
        <button onClick={handleRemove}>X</button>
      </div>
    )
  })
}

const handleSubmit = (e) => {
  e.preventDefault()
  const playerName = e.target.playerName.value

  if (playerName) {
    Players.insert({
      name: playerName,
      score: 0
    })
  }
  e.target.playerName.value = ''
}

Meteor.startup(() => {
  const title = 'Score Keep'
  Tracker.autorun(() => {
    let players = Players.find().fetch()
    let jsx = (
      <div>
        <h1>{title}</h1>
        {renderPlayers(players)}
        <form onSubmit={handleSubmit}>
          <input type='text' name='playerName' placeholder='player name' />
          <button>Add player</button>
        </form>
      </div>
    )
    ReactDom.render(jsx, document.getElementById('app'))
  })
})

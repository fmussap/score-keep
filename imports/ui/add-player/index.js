import React from 'react'

import { Players } from '../../api/players'

const AddPlayer = () => {
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
  return (
    <div className='item'>
      <form className='form' onSubmit={handleSubmit}>
        <input className='form__input' type='text' name='playerName' placeholder='player name' />
        <button className='button'>Add player</button>
      </form>
    </div>
  )
}

export default AddPlayer

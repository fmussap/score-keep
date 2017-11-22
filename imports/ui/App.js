import React from 'react'

import TitleBar from './title-bar'
import AddPlayer from './add-player'
import PlayersList from './players-list'

const App = ({ players }) => {
  return (
    <div>
      <TitleBar title='Score Keep' />
      <div className='wrapper'>
        <PlayersList players={players} />
        <AddPlayer />
      </div>
    </div>
  )
}

export default App

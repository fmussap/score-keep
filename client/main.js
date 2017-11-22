import React from 'react'
import ReactDom from 'react-dom'
import { Meteor } from 'meteor/meteor'
import { Tracker } from 'meteor/tracker'

import { Players, calPlayerPos } from '../imports/api/players'
import App from '../imports/ui/App'

Meteor.startup(() => {
  Tracker.autorun(() => {
    const players = Players.find({},
      {
        sort: { score: -1, name: 1 }
      }
    ).fetch()
    const positionedPlayer = calPlayerPos(players)
    ReactDom.render(<App players={positionedPlayer} />, document.getElementById('app'))
  })
})

import React from 'react'
import PropTypes from 'prop-types'

const TitleBar = ({ title }) => (
  <div className='title-bar'>
    <div className='wrapper'>
      <h1>{title}</h1>
    </div>
  </div>
)

TitleBar.propTypes = {
  title: PropTypes.string
}

TitleBar.defaultProps = {
  title: 'no title'
}

export default TitleBar

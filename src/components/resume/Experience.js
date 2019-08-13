import React from 'react'
import PropTypes from 'prop-types'
import Entry from './Entry'

const ExperienceGrid = ({ gridItems }) => (
  gridItems.map(item => (
    <Entry 
      image={item} 
      line1={item.name}
      line2={item.job}
      line3={item.duration}
      text={item.text}
      imageWidth={80}
    />
  ))
)

ExperienceGrid.propTypes = {
  gridItems: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
      name: PropTypes.string,
      job: PropTypes.string,
      duration: PropTypes.string,
      text: PropTypes.string,
    })
  ),
}

export default ExperienceGrid

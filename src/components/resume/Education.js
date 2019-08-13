import React from 'react'
import PropTypes from 'prop-types'
import Entry from './Entry'

const EducationGrid = ({ gridItems }) => (
  gridItems.map(item => (
    <Entry 
      image={item} 
      line1={item.name}
      line2={item.degree + ', ' + item.major + ', ' + item.grade}
      line3={item.duration}
      text={item.text}
      imageWidth={80}
    />
  ))
)

EducationGrid.propTypes = {
  gridItems: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
      name: PropTypes.string,
      degree: PropTypes.string,
      major: PropTypes.string,
      grade: PropTypes.string,
      duration: PropTypes.string,
      text: PropTypes.string,
    })
  ),
}

export default EducationGrid

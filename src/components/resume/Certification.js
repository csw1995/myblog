import React from 'react'
import PropTypes from 'prop-types'
import Entry from './Entry'

const CertificationGrid = ({ gridItems }) => (
  gridItems.map(item => (
    <Entry 
      image={item} 
      line1={item.name}
      line3={item.duration}
      text={<a href={item.link} >Validation Link</a>}
      imageWidth={80}
    />
  ))
)

CertificationGrid.propTypes = {
  gridItems: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
      name: PropTypes.string,
      duration: PropTypes.string,
      link: PropTypes.string,
    })
  ),
}

export default CertificationGrid

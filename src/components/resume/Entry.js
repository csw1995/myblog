import React from 'react'
import PropTypes from 'prop-types'
import PreviewCompatibleImage from '../PreviewCompatibleImage'

const EntryGrid = ({ 
  image,
  line1,
  line2,
  line3,
  text,
  imageWidth,
}) => (
  <div 
    style={{
      paddingBottom: 10 + 'px',
      borderBottom: 'dashed 1px #EEEEEE',
      margin: 20 + 'px',
    }}
  >
    <div className="columns is-multiline">
      <div className="column is-3 has-text-centered">   
        <div 
          style={{
            width: imageWidth + 'px',
            display: 'inline-block',
            marginTop: 40 + 'px',
          }}
        >
          <PreviewCompatibleImage imageInfo={image} />
        </div>
      </div>
      <div className="column is-9">
        <h3 style={{ 
          fontSize: 1.5 + 'em', 
          fontWeight: 700 
        }}>
          {line1}
        </h3>

        <p>{line2}</p>
        <p style={{ fontWeight: 300 }}>{line3}</p>
        <br/>
        <p>{text}</p>
      </div>
    </div>
  </div>
)

EntryGrid.propTypes = {
  gridItems: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
      line1: PropTypes.string,
      line2: PropTypes.string,
      line3: PropTypes.string,
      text: PropTypes.string,
      imageWidth: PropTypes.number,
    })
  ),
}

export default EntryGrid

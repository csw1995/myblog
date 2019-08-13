import React from 'react'
import PropTypes from 'prop-types'
import PreviewCompatibleImage from '../PreviewCompatibleImage'

const SkillGrid = ({ gridItems }) => (
  <div className="columns is-multiline">
    {gridItems.map(item => (
      <div key={item.text} className="column is-4" style={{
        borderBottom: 'dashed 1px #EEEEEE',
      }}>
          <div className="has-text-centered">
            <div
              style={{
                width: '80px',
                display: 'inline-block',
              }}
            >
              <PreviewCompatibleImage imageInfo={item} />
            </div>
            <div className="has-text-centered"  style={{ margin: '10px' }}>
                <p>{item.name}</p>
                <p>{item.level}</p>
            </div>
          </div>
      </div>
    ))}
  </div>
)

SkillGrid.propTypes = {
  gridItems: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
      text: PropTypes.string,
    })
  ),
}

export default SkillGrid

import React from 'react'
import PropTypes from 'prop-types'

import Image from './Image'
import Content from './Content'
import './PageHeader.css'

const PageHeader = ({
  title,
  subtitle,
  backgroundImage,
  large,
  className = ''
}) => {
  if (large) className += ' PageHeader-large'
  if (!backgroundImage) className += ' PageHeaderNoImage'
  return (
    <div className={`PageHeader relative ${className}`}>
      {backgroundImage && (
        <div className='PageHeaderImages'>
          <Image
            background
            resolutions="large"
            src={backgroundImage}
            alt={title}
            size="cover"
          />
          <img
            className="MobileImage"
            src={backgroundImage}
            alt={title}
          />
        </div>
      )}
      <div className="container relative">
        <h1 className="PageHeader--Title">{title}</h1>
        {subtitle && (
          <Content className="PageHeader--Subtitle" src={subtitle} />
        )}
      </div>
    </div>
  )
}

PageHeader.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string
}

export default PageHeader

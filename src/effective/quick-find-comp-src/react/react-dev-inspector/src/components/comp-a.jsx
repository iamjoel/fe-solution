import React from 'react'
import PropTypes from 'prop-types'

class CompA extends React.Component {
  static propTypes = {
    classNames: PropTypes.string,
  }

  static defaultProps = {
    classNames: ''
  }

  constructor(props) {
    super(props)
    this.state = {
    }
  }

  render() {
    return (
      <div style={{
        width: '300px',
        height: '300px',
        lineHeight: '300px',
        textAlign: 'center',
        border: '1px solid'
      }}>
        comp A
      </div>
    )
  }
}

export default CompA
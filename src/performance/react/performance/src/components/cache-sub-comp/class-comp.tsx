import React from 'react'

interface IProps {
  name: string
}

// export default class ClassComp extends React.Component<IProps, any> {
class ClassComp extends React.PureComponent<IProps, any> {
  componentDidMount() {
    console.log('Pure Class Component mount')
  }

  render() {
    console.log('render Pure Class Component')
    return (
        <div>Pure Class Component: {this.props.name}</div>
    )
  }
}

export default ClassComp
import React from 'react'

interface IState {
  boyName: string
  girlName: string
}

class ClassComp extends React.PureComponent<any, IState> {
  constructor(props: any) {
    super(props)
    this.state = {
      boyName: 'Joel',
      girlName: 'Lily'
    }
  }

  handleChangeMultiState = () => {
    const {boyName, girlName} = this.state
    // 因为是事件处理函数中的 setState 是异步的，因此 写若干次 setState 只会触发一次 Render
    this.setState({boyName: boyName === 'Joel' ? 'Jack' : 'Joel'})
    this.setState({girlName: girlName === 'Lily' ? 'JoJo' : 'Lily'})
  }
  render() {
    console.log('render batch update state Class Component')
    const {boyName, girlName} = this.state
    return (
      <div>
        <button onClick={this.handleChangeMultiState}>更改名字</button>
        <div>{boyName}, {girlName}</div>
      </div>
    )
  }
}

export default ClassComp
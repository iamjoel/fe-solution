import React from 'react';
import './App.css';
const caseNo = 6 // 不同的情况，一共有6种

const elemInOrder = ['elem1', 'elem2', 'elem3']
const prevElemRelation = getElemOrderObj(elemInOrder)

function getElemOrderObj(arr: string[]) :Record<string, string | null>{
    const res:Record<string, string | null> = {}
    arr.forEach((key, index) => {
      res[key] = index > 0 ? arr[index - 1] : null
    })
    return res
}

interface IAppState {
  dataLoaded: Record<string, boolean>;
  dataLoadError: Record<string, boolean>;
  isRender: Record<string, boolean>
}

class App extends React.Component<any, IAppState> {
  constructor(props: any) {
    super(props);
    this.state = {
      dataLoaded: {
        elem1: false,
        elem2: false,
        elem3: false
      },
      dataLoadError: { // todo
        elem1: false,
        elem2: false,
        elem3: false
      },
      isRender: {
        elem1: false,
        elem2: false,
        elem3: false
      },
    }
  }

  componentDidMount() {
    fetchElem1Data().then(() => this.onLoadData('elem1', true), () => this.onLoadData('elem1', false))
    fetchElem2Data().then(() => this.onLoadData('elem2', true), () => this.onLoadData('elem2', false))
    fetchElem3Data().then(() => this.onLoadData('elem3', true), () => this.onLoadData('elem3', false))
  }

  calIsRenderAll() {
    const {isRender} = this.state
    return Object.values(isRender).filter(_isRender => !_isRender).length === 0
  }

  onLoadData = (elem: string, isSuccess: boolean) => {
    this.setState({
        dataLoaded: {
          ...this.state.dataLoaded,
          [elem]: true
        },
        dataLoadError: {
          ...this.state.dataLoadError,
          [elem]: !isSuccess
        }
      })
      this.checkAndDraw()
  }

  checkAndDraw = () => {
    const isRenderAll = this.calIsRenderAll()
    let isFind = false
    const {isRender, dataLoaded} = this.state
    
    if(isRenderAll) {
      console.log('已渲染完成')
      return
    }
    elemInOrder.filter(elem => !isRender[elem]).forEach(elem => {
      if(isFind) {
        return
      }
      const prevElem = prevElemRelation[elem]
      if(dataLoaded[elem] && (!prevElem || (prevElem && isRender[prevElem]))) {
        console.log(`${elem} rendered`)

        this.setState({
          isRender: {
            ...isRender,
            [elem]: true
          }
        }, () => {
          this.checkAndDraw()
        })
        isFind = true
        return
      }
    })
  }

  render() {
    const isRenderAll = this.calIsRenderAll()
    const {isRender, dataLoadError} = this.state
    
    return (
      <div>
          {
            isRender.elem1 && (
              <div>elem1 {dataLoadError.elem1 ? '对应的接口报错': '正常输出'}</div>
            )
          }
          {
            isRender.elem2 && (
              <div>elem2 {dataLoadError.elem2 ? '对应的接口报错': '正常输出'}</div>
            )
          }
          {
            isRender.elem3 && (
              <div>elem3 {dataLoadError.elem3 ? '对应的接口报错': '正常输出'}</div>
            )
          }

          {
            !isRenderAll && (
              <div>加载中...</div>
            )
          }
      </div>
    )
  }
};


function fetchElem1Data () :Promise<void> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let isSuccess = Math.random() > 0.2
      if(isSuccess) {
        console.log('Success: Data 1 Loaded')
        resolve()
      } else {
        console.log('Fail: Data 1 Loaded')
        reject()
      }
    }, getCaseTime(caseNo, 1))
  })
}

function fetchElem2Data () :Promise<void> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let isSuccess = Math.random() > 0.2
      if(isSuccess) {
        console.log('Success: Data 2 Loaded')
        resolve()
      } else {
        console.log('Fail: Data 2 Loaded')
        reject()
      }
    }, getCaseTime(caseNo, 2))
  })
}

function fetchElem3Data () :Promise<void> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let isSuccess = Math.random() > 0.2
      if(isSuccess) {
        console.log('Success: Data 3 Loaded')
        resolve()
      } else {
        console.log('Fail: Data 3 Loaded')
        reject()
      }
    }, getCaseTime(caseNo, 3))
  })
}

function getCaseTime(no: number, nth: number) : number{
  const fast = 100
  const md = 500
  const slow = 2000
  const cases: Record<number, number[]> = {
    1: [fast, md, slow],
    2: [fast, slow, md],
    3: [md, fast, slow],
    4: [md, slow, fast],
    5: [slow, md, fast],
    6: [slow, fast, md],
  }
  return cases[no][nth - 1]
}

export default App;

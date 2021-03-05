import React, { DragEvent } from 'react'
import './App.css'

type IFileList = { [key: string]: any }[]

interface IUploadedItem {
  name: string
  size: number
}

export interface IUploadState {
  isOver: boolean
  uploadedList: IUploadedItem[]
}

export default class App extends React.Component<any, IUploadState> {
  constructor(props: any) {
    super(props)
    this.state = {
      isOver: false,
      uploadedList: []
    }
  }

  counter = 0

  render() {
    const { uploadedList, isOver } = this.state
    return (
      <div className="dnd-upload">
        <div 
          className={['dnd-upload__area', isOver && 'dnd-upload__area--over'].join(' ')}
          onDragEnter={this.handleDragEnter}
          onDragOver={this.handleDragOver}
          onDragLeave={this.handleDragLeave}
          onDrop={this.handleDrop}
        >
          请将文件拖到这里(支持同时拖多个)

          <div>一堆其他内容</div>
          <div>一堆其他内容</div>
          <div>一堆其他内容</div>
        </div>

        <div className="dnd-upload__uploaded">
          <h2>已上传文件</h2>
          <div className="dnd-upload__uploaded-list">
            {uploadedList.map((item, i) => {
              return (
                <div className="dnd-upload__uploaded-item" key={i}>
                  <div>文件名: {item.name}</div>
                  <div>大小: {item.size} KB</div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    )
  }

  handleDragEnter = (e: DragEvent<HTMLDivElement>) => {
    // 非文件
    if (e.dataTransfer.types.indexOf('Files') < 0) {
      return
    }
    e.preventDefault()
    e.stopPropagation()
    this.counter++
    this.setState({
      isOver: true,
    })
  }

  handleDragOver = (e: DragEvent<HTMLDivElement>) => {
    if (e.dataTransfer.types.indexOf('Files') < 0) {
      return
    }
    e.preventDefault()
    e.stopPropagation()
  }

  handleDragLeave = (e: DragEvent<HTMLDivElement>) => {
    if (e.dataTransfer.types.indexOf('Files') < 0) {
      return
    }
    e.preventDefault()
    e.stopPropagation()
    this.counter--
    if (this.counter === 0) {
        this.setState({ isOver: false })
    }
  }

  handleDrop = (e: DragEvent<HTMLDivElement>) => {
    if (e.dataTransfer.types.indexOf('Files') < 0) {
      return
    }
    e.preventDefault()
    e.stopPropagation()
    this.counter = 0
    const uploadedList:IUploadedItem[]  = [...(e.dataTransfer.files as unknown as IFileList)].map(file => {
      const rawFile = new File(
        [file as BlobPart], 
        `${Date.now()}-${file.name}`, // 防止文件名在服务器端重名
        {
          type: file.type,
        }
      )
      console.log('提交个服务器端的文件: ', rawFile)
      return {
        name: file.name,
        size: file.size / 1000,
      }
    })
    this.setState({ 
      isOver: false,
      uploadedList: [...this.state.uploadedList, ...uploadedList]
    })
    console.log('上传成功！')
  }
}


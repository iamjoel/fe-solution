// eslint-disable-next-line
import React from 'react';
import './App.css';
// 一定要有下面这句
/** @jsx jsx */
// eslint-disable-next-line
import { css, jsx, Global} from '@emotion/core'

import styled, { createGlobalStyle } from 'styled-components'

const color = 'white'

// emotion
const btnStyle = css`
  margin: 0 auto;
  width: 200px;
  padding: 5px;
  background-color: hotpink;
  font-size: 14px;
  border-radius: 4px;
  &:hover {
    color: ${color};
  }
  a {
    text-decoration: none;
    border-bottom: 1px dashed currentColor;
  }
  @media (max-width: 1000px) {
    background: red;
  }
`

// styled-components
const Btn = styled.div`
  margin: 10px auto;
  width: 200px;
  padding: 5px;
  background-color: hotpink;
  font-size: 14px;
  border-radius: 4px;
  &:hover {
    color: ${color};
  }
  a {
    text-decoration: none;
    border-bottom: 1px dashed currentColor;
  }
  @media (max-width: 1000px) {
    background: red;
  }
`

const GlobalStyleStyledComponents = createGlobalStyle`
  body {
    background-color: #ddd;
  }
`

function App() {
  return (
    <div>
      <Global
        styles={
          css`
            body {
              font-size: 20px;
            }
          `
        }
      >

      </Global>
      <div
        css={btnStyle}
      >
        Hover to change color.
        <a href="https://github.com/emotion-js/emotion">link</a>
      </div>

      <GlobalStyleStyledComponents></GlobalStyleStyledComponents>
      <Btn>
        Hover to change color.
        <a href="https://github.com/styled-components/styled-components">link</a>
      </Btn>

      <Circle/>
      <Circle size={30} />
    </div>
  );
}

function Circle(props) {
  const size = props.size || 50
  const style = css`
    width: ${size}px;
    height: ${size}px;
    background: hotpink;
    border-radius: 50%;
  `
  return (<div css={style}></div>)
}
export default App;

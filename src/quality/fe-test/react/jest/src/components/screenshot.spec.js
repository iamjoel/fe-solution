import React from 'react';
import renderer from 'react-test-renderer';
import Counter from "./screenshot";

// 第一次和多次后，和 DOM 的内容变化后，做更新。
it('should render correctly', () => {
  const tree = renderer
    .create(<Counter></Counter>)
    .toJSON();
  expect(tree).toMatchSnapshot();
})
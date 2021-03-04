import React from "react";
import { shallow, mount } from "enzyme";

import Counter from "./counter";

describe("<Counter />", () => {
  it("DOM detect should works!", () => {
    const wrapper = shallow(<Counter />);
    // 输出 DOM 结构。
    // console.log(wrapper.debug()) 
    // html 是 outerHTML 的概念。
    expect(wrapper.find(".title>span").html()).toBe('<span>计数器Demo</span>');
    expect(wrapper.find(".title").some('h1')).toBe(true);
    expect(wrapper.find(".title").filter('h1').length).toBe(1);

  })
  it("Increments and decrements should works!", () => {
    const wrapper = shallow(<Counter />);
    expect(wrapper.state("count")).toBe(0);

    // 调用组件上的函数 wrapper.instance().函数名
    wrapper.instance().increment();
    // 调用组件上的函数 wrapper.state('属性名')
    expect(wrapper.state("count")).toBe(1);

    wrapper.instance().decrement();
    expect(wrapper.state("count")).toBe(0);

    // wrapper.props().属性值

  });


  it("simulate should works!", () => {
    const wrapper = shallow(<Counter />);
    // 触发 click
    wrapper.find('.add-btn').simulate('click')
    // DOM 操作的 api 和 [cheerio](https://github.com/cheeriojs/cheerio#api) 一致
    expect(parseInt(wrapper.find('.value').text())).toBe(1)

    // https://enzymejs.github.io/enzyme/docs/api/ReactWrapper/simulate.html
    wrapper.find('.input').simulate('change', {target: {value: 5}})
    expect(parseInt(wrapper.find('.value').text())).toBe(5)
    expect(parseInt(wrapper.find('.input').render().attr('value'))).toBe(5)
  })

  //https://enzymejs.github.io/enzyme/docs/api/mount.html Full DOM rendering is ideal for use cases where you have components that may interact with DOM APIs or need to test components that are wrapped in higher order components.
  it("full render should works!", () => {
    const wrapper = mount(<Counter />);
    expect(wrapper.state("count")).toBe(0);
    wrapper.instance().increment();
    expect(wrapper.state("count")).toBe(1);
    wrapper.instance().decrement();
    expect(wrapper.state("count")).toBe(0);
    wrapper.unmount()
  })

});
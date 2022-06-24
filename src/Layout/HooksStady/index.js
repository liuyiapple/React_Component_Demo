import React, { useState, useEffect } from "react";
import { Button } from "antd";
const Example = (props) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    document.title = `you clickt ${count} times`;
  });
  const [num, setNum] = useState(0);
  useEffect(() => {
        console.log(num);
  }, [num]);
  return (
    <div>
      <h1>{count}</h1>
      <h2>{num}</h2>
      <Button
        type="primary"
        onClick={() => {
          setCount(count + 1);
          setNum(num + 1)
        }}
      >
        按钮
      </Button>
    </div>
  );
};
export default Example;

/**
 *  @param useState
 *
 * 调用useState的时候都做了什么？
 *      调用useState函数，将会返回一个数组，这个数组中会有两个参数
 *      [0] 第一个是作为当前定义的一个参数
 *      [1] 第二个是修改这个参数的方法
 *      const [ count, setCount ] = useState(0)
 *      解构出两个参数，并给第一个参数附一个初始值为0
 *          在页面调用的时候，直接就 { count } 就可以直接访问到了
 *
 *
 *  @param useEffect
 *  useEffect --->
 *      可以将其看作是class组件中的
 *           componentDidMount，
 *           componentDidUpdate，
 *           componentWillUnmount，
 *      三个生命周期的组合API
 *
 *    useEffect(() => {
 *
 *     },[variable]])
 *    1. 在使用useEffect的时候，每次选然后都会执行useEffect，但是这会导致不相关的DOM，
 *         这里可以给 对应数据的 useEffect 传递第二个参数，当这个值在 两 次 渲染之间没有改变，effect便可以跳过本次的渲染调用
 *    2. 如果只想在组件挂载和卸载时执行一次，可以传递一个空数组作为第二个参数、
 *             这就是告诉React不在需要依赖props或者是state中的任何值，他就永远不会再执行
 * * */

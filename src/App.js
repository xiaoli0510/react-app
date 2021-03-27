import './App.css'
import React from 'react'

/*
在jsx中使用点语法
自定义组件需要大写开头，不然react会把这个元素当做HTML标签。如果自定义的是小写开头的，在使用之前，需将自定义组件名赋值给一个大写开头的变量名。
jsx不能是一个表达式，需通过将表达式赋值给大写开头的变量来解决此问题。
js表达式作为props。
if for不是表达式，不能直接在jsx中使用。
可直接将字符串字面量赋值给prop。
props默认值为true。
props属性展开。
jsx可以返回一组数组，需注明key。
js表达式可作为子元素。
*/

//将函数push到items，注意,props.children是一个函数，需要执行props.children(i)才返回div
function Repeat(props){
  let items = [];
  for(let i= 0;i<props.numTimes;i++){
    items.push(props.children(i));
  }
  return <div>{items}</div>;
}

//函数作为子元素
function ListOfTenThings(){
  const numTimes = 10;
  return (
    <Repeat numTimes={numTimes}>
      {(index)=><div key={index}>This is item {index} in the list。</div>}
    </Repeat>
  )
}



function App(props) {
  return ( 
    <>
   <ListOfTenThings/>
    
    </>
  )
}


export default App
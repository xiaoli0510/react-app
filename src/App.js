import './App.css'
import React from 'react'


/*
ReactDOM:
(1)ReactDOM.render(element,container,[,callback]):在提供的container里面渲染一个React元素，并返回对该组件的引用(针对无状态组件返回null)。
如果React元素之前已经在container里面渲染过，这将会对其进行更新操作，并仅会在必要时改变DOM以映射最新的React元素。
第三参数是可选的回调函数，在该组件被渲染或更新后会执行回调函数。
ReactDOM.render()会控制传入容器节点的内容。首次调用时，container里面所有的DOM元素都会被替代。后续的调用会调用Diffing算法进行更新。
ReactDOM.render()不会修改容器节点(只会修改container的子节点)。可以在不覆盖子节点的情况下，将组件插入已有的DOM节点中。
ReactDOM.render()目前会返回对根组件ReactComponent实例的引用。但是目前要避免使用该引用。
(2)ReactDOM.hydrate(element,container,[,callback]):用于在ReactDOMServer渲染的容器中对HTML的内容进行hydrate操作。
(3)unmountComponentAtNode(container):从DOM中卸载组件，会将其事件处理器和state一起清除。如果指定容器上没有对应已挂载的组件，则此函数什么都不做。如果组件被移除返回true,如果没有组件被移除返回false。
(4)ReactDOM.findDOMNode(component):访问底层DOM节点，应避免使用，不能用在函数组件中。
(5)ReactDOM.createPortal(child,container):创建portal。Portal提供一种将子节点渲染到DOM节点中的方式，该节点存在于DOM组件的层次结构之外。

ReactDOMServer:将组件渲染成静态标记。

DOM元素：React实现了一套独立于浏览器的DOM系统。所有的DOM特性和属性都应该使用小驼峰命名的方式。

dangerouslySetInnerHTML:接受的是一个带有_html属性的对象。用来设置innerHtml。
style:接受的是一个对象，样式不会自动补齐前缀。用来设置动态需要计算的样式。


*/


class App extends React.Component {
  render() {
    return ( 
      <div > 
        react
      </div>
    )
  }
}

export default App
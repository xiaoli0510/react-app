/*
高阶组件的两种方式：
1.属性代理Props Proxy：
  (1)读取、添加、编辑、删除props或者将非受控组件变为受控组件，注意需要在被包装的组件dom元素上使用{...this.props}才能使props生效。
  (2)通过Refs访问到组件实例。通过ref回调函数来实现。
  (3)提取state。
  (4)用其他元素包裹WrappedComponent。
2.反向继承Inheritance Inversion。
  (1)渲染劫持。
   在由render输出的任何React元素中读取、添加、编辑、删除props。
   读取和修改由render输出的React元素树。
   有条件的渲染元素树。
   把样式包裹进元素树。
  (2)操作state。
可通过this获取到WrappedComponent。为了不破坏WrappedComponent,需调用super.[lifecycleHook]

*/

import React from 'react'

class WrappedComponent extends React.Component {
    render() {
        return ( <
            input type = "text" {
                ...this.props
            }
            />
        )
    }
}

//属性代理在高阶函数中使用参数
function HOCFactoryFactory(params){
    return function HOCFactory(WrappedComponent){
        return class HOC extends React.Component{
            render(){
                return (
                    <div>
                        {params}
                        <WrappedComponent {...this.props}/>
                    </div>
                )
            }
        }

    }

}

//因为使用export default所以withSection返回的需是一个函数组件/class组件
export default HOCFactoryFactory(123)(WrappedComponent)
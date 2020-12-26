/*
第一步：创建新的React应用。
执行命令行：
npx create-react-app my-app
cd my-app
npm start
将在页面中显示

第二步:Hello World。
修改src>app.js为：
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        Hello World
      </header>
    </div>
  );
}
export default App;
将在页面中显示Hello World。

第三步：相关资料介绍：
1.
2.jsx简介。
const element = <h1>Hello,{name}</h1>;像这种element变量就成为jsx，jsx是一个js的语法扩展。React认为组件模板和组件逻辑内在耦合，所以将模板和逻辑联合起来，即在html嵌入到js中，所以使用jsx。
3.将一个元素渲染成DOM。
ReactDOM.render(element,document.getElementById('root'));此处的id为root，需与public>index.html里面"根"DOM节点的id一致，该节点内的所有内容都将由React DOM管理。
ReactDOM.render(模板，插入该模板的目标位置)是React的最基本方法，用于将模板转为HTML语言，并插入指定的DOM节点。
4.组件&props。
(1).函数组件：
修改src>app.js文件为：
import './App.css';

function App(props) {
  return (
    <div className="App-header">
        Hello World, {props.name}
    </div>
  );
}
export default App;
(2).class组件：
创建class组件有两种方法，一是使用es6的extends，二是使用es5的createReactClass。
修改src>app.js文件为：
//使用extends来创建
import './App.css';
import React from 'react';

props不可更改，子组件只能通过props来传递数据,可通过 类名.defaultProps={xx:xx}来设置默认的props。

//因为class组件需要继承React.Component,所以需要import React,React.Component的子类中必须定义render()函数。
class App extends React.Component {//extends是es6里面的继承语法
  render() {
    return <div className="App-header">Hello,{this.props.name}</div>;
  }
}
export default App;

React里面没有“槽”的概念。React通过props可传递任何东西;通过props.children来显示包含的内容。
使用组件的思想：先提取，后组合。

5.State&生命周期。
state可更改,state是用来跟用户交互。
修改src>app.js文件为：
import './App.css';
import React from 'react';

class Clock extends React.Component{
  //constructor是类背身默认的属性和方法，new出来的实例会自动执行constructr()。
  constructor(props){
    super(props);
    this.state = {date:new Date(),a:1};
  }  

  //componentDidMount是react的挂载(mount)生命周期
  componentDidMount(){
    this.timerId = setInterval(()=>{
     this.tick();
    },1000)
  }

  //componentWillUnmount是react的卸载(unmount)生命周期
  componentWillUnmount(){
    clearInterval(this.timerId);
  }

  //tick是原型方法
  tick(){
    this.setState({
      date:new Date()
    });
    this.setState(function(state){
      return { a:state.a+1};
    })
  }

  render(){
    return (
      <div className="App-header">
        <h1>Hello,world!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}</h2>
        <h2>It is {this.state.a}</h2>
      </div>
    )
  }

}

function App(){
  return (
    <div>
      <Clock/>
    </div>
  )
}
export default App;
页面会显示一个时钟和计数器。
6.事件处理。
react的onClick使用驼峰命名法，与传统html的onclick不同。




class里面的static表示该方法不会被实例继承，而是直接通过类来调用；但是父类的静态方法，能被子类继承。
*/




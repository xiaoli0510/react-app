/**
 1.es6中的class与es5中的一般函数的区别：
 (1)class没有变量提升，es5中的函数有变量提升。
 (2)this指向不同。一般情况下，this根据谁调用this指向谁的原则。在实际情况中，使用es6的解构赋值会丢失原来的this,所以class在constructor()函数中使用this.方法名=this.方法名.bind(this)来绑定this。
 解决class中的事件的this问题有以下四种方法：
 (1)在class的constructor()中使用class在constructor()函数中使用this.fn=this.fn.bind(this)。
 (2)在dom元素上使用嵌套箭头函数onClick={()=>this.fn()}。
 (3)在dom元素上直接使用bind,onClick={this.fn.bind(this)}。
 (4)监听的是箭头函数，即定义fn的时候使用fn = ()=>{}。

 */
/*
1.public:默认是public。也可显式将一个成员标记成public。
2.private:只能在class的内部使用。当我们比较带有private和protected成员的类型的时候，如果其中一个类型里包含一个private成员，那么只有当另外一个类型中也存在这样一个private成员，并且他们都是来自
同一处声明时，才认为这两个类型是兼容的。对于protected也使用这个规则。
3.protected:protected只能在Class和子类的class内部使用。Class中protected constructor，说明此class不能被实例化，可以被继承。
4.readonly:只读。只读属性在声明时或者构造函数里被初始化。使用参数属性：直接在constructor在参数前面添加readonly，即把声明和赋值合并至一处；参数属性也可用private、public、protected。

5.存取器：通过get来获取值，通过set来设置值。只有get没有set的存取器，默认是readonly。
6.static:静态属性。静态属性只存在于类本身上面而不是类的实例上。使用类名.来访问静态属性。
6.abstract:抽象类。抽象类作为其他派生类的基类使用。不能实例化抽象类。抽象类中的抽象方法不包含具体实现并且必须在派生类中实现。抽象方法必须包含abstract关键字并可以包含访问修饰符。
  如果抽象类中没有定义某抽象方法，只在派生类中实现某方法，则派生类.某方法会报错，提示抽象类中不存在此方法。
7.高级技巧：构造函数。
在ts中声明一个Class的时候，声明了类的实例的类型；创建了一个叫做构造函数的值，这个函数会在new的时候调用。
8.把类当做接口使用。
*/

class Point{
  x:number;
  y:number;
}

interface Point3d extends Point{
  z:number;
}

let point3d:Point3d={x:1,y:2,z:3};
console.log(point3d);

export  {Point};
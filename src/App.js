import './App.css'
import React from 'react'

function SearchBar (props){
  return (
    <div>
      <input placeholder="Search..." onChange={props.handleSearch}/>
      <br/>
      <input type="checkbox" onChange={props.handleCheck}/><span>Only show products in stock</span>
    </div>
  )
}

class ProductTable extends React.Component{
  render(){
    const productArr = this.props.productArr
    let categoryArr = [];
   productArr.forEach(function(item){
      if(categoryArr.indexOf(item.category)===-1){
        categoryArr.push(item.category);
      }
   })

   let wrapDiv = productArr.map((item,index)=>{
     let productCategoryRowContent = '';
     if(categoryArr.indexOf(item.category)>-1){
      categoryArr.splice(categoryArr.indexOf(item.category),1);
      productCategoryRowContent=<ProductCategoryRow product={item}/>
     }else{
      productCategoryRowContent = ''
     }
     return (
       <div key={item.name}>
        {productCategoryRowContent}
        <ProductRow product={item}/>
       </div>
     )
   })
    return (
      <div className="table-wrap">
        <div className="table-header">
          <div>Name</div>
          <div>Price</div>
        </div>
          {wrapDiv}
      </div>
    )
  }
}

//商品标题
class ProductCategoryRow extends React.Component{
  render(){
    const titles = this.props.product;
    return (
      <div>
        <div>{titles.category}</div>
      </div>
    )
  }
}

//商品列表
class ProductRow  extends React.Component{
  render(){
    const products = this.props.product;
    return (
      <div className="product-row">
        <div className={!products.stocked?"red":""}>{products.name}</div>
        <div>{products.price}</div>
      </div>
    )
  }
}

class FilterableProductTable extends React.Component{
  constructor(props){
   super(props);
   this.state = {
     searchValue:'',
     isChecked:false
   }
   this.handleSearch = this.handleSearch.bind(this);
   this.handleCheck = this.handleCheck.bind(this);
  }

  //进行搜索
  handleSearch(e){
     this.setState({searchValue:e.target.value});
  }

  //复选框的选中
  handleCheck(e){
     this.setState({isChecked:e.target.checked})
  }

  render(){
    let productArr = [
      {category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football"},
      {category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball"},
      {category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball"},
      {category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch"},
      {category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5"},
      {category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7"}
    ];
    productArr = productArr.filter(item=>{
        if(this.state.isChecked){
          return item.name.indexOf(this.state.searchValue)>-1&&item.stocked===this.state.isChecked;
        }else{
          return item.name.indexOf(this.state.searchValue)>-1;
        }
    })

    return (
      <div className="box">
        <SearchBar handleSearch={this.handleSearch} handleCheck={this.handleCheck}/>
        <ProductTable productArr={productArr}/>
      </div>
    )
  }
}


function App(){
  return (
    <div className="App-header">
    <FilterableProductTable/>
    </div>
  )
}
export default App


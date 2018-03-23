import React from 'react';
import {connect} from 'dva';
import ProductList from '../components/ProductList';

const Products = ({dispatch, list}) => {
  function handleDelete(id) {
    console.log("dispatch======>", id);
    dispatch({
      type: 'productss/delete',
      payload: id,
    });
  }

  return (
    <div>
      <h2>List of Products</h2>
      <ProductList onDelete={handleDelete} products={list}/>
    </div>
  );
};

// export default Products;
// export default connect(({productss}) => ({
//     list: productss,
// }))(Products);

export default connect((state)=>{
  const {productss:productss} = state;//state=>{productss:[1,2]}，这里隐形地创建了一个变量productss在value
  //ES6对象解构，还可以简写成{productss} = state;就像上面的传参一样
  console.log("productss=========>",productss);
  return {
    list:state.productss
  }
})(Products)

//react-route@4可以把路由地址组件化。纯组件里写方法不太优雅不便于管理，
// 在这个文件里把纯组件引入，并且用conect与state和dispatch联系起来

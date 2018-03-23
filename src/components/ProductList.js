import React from 'react';
import PropTypes from 'prop-types';
import {Table,Button,Popconfirm} from 'antd';

const ProductList = ({onDelete,products})=>{
  const cols = [{
    title:'name',
    dataIndex:'name',
    key:'1'
  }, {
    title:"Action",
    key:'2',
    dataIndex:'Action',
    render:(text,record)=>{

      return(
        <Popconfirm title="delete?" onConfirm={()=>onDelete(record.id)}>
          <Button>Delete</Button>
        </Popconfirm>
      )
    }
  }]

  return(
    <Table dataSource={products} columns={cols}/>
  )
};

ProductList.propTypes = {
  onDelete: PropTypes.func.isRequired,
  products: PropTypes.array.isRequired,
};

export default ProductList;

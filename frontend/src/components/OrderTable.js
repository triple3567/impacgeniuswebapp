import React, { useState, useEffect } from "react"
import '../css/OrderTable.css'
import {Table} from 'antd'

const axios = require('axios').default;

/*

const testDataSource = [
    {
        orderID: '1',
        customer: 'Mike Wazowski',
        grossSales: '5130',
        status: 'Delivered'
    },
    {
        orderID: '2',
        customer: 'Patrick O\'Shea ',
        grossSales: '333',
        status: 'Lost'
    },
    {
        orderID: '3',
        customer: 'Jessica Jones',
        grossSales: '23535',
        status: 'Shipped'
    },
    {
        orderID: '4',
        customer: 'Toby McDonald',
        grossSales: '14343',
        status: 'Shipped'
    },
    {
        orderID: '5',
        customer: 'Larry Bird',
        grossSales: '34233',
        status: 'Delivered'
    },
    {
        orderID: '6',
        customer: 'Ronald Reagan ',
        grossSales: '696969',
        status: 'Not Shipped'
    },
    {
        orderID: '7',
        customer: 'Thomas Tank',
        grossSales: '153',
        status: 'Delivered'
    },
];

const testColumns = [
  {
      title: 'Order ID',
      dataIndex: 'orderID',
      key: 'orderID'  
  },
  {
      title: 'Customer',
      dataIndex: 'customer',
      key: 'customer'
  },
  {
    title: 'Gross Sales',
    dataIndex: 'grossSales',
    key: 'grossSales'
  },
  {
    title: 'Status',
    dataIndex: 'status',
    key: 'status'
  }
];

*/

const realColumns = [
    {
        title: 'ID',
        dataIndex: 'id',
        key: 'id'
    },
    {
        title: 'Order Number',
        dataIndex: 'order_number',
        key: 'order_number'
    },
    {
        title: 'Product Name',
        dataIndex: 'product_name',
        key: 'product_name'
    },
    {
        title: 'Count',
        dataIndex: 'count',
        key: 'count'
    },
    {
        title: 'Date',
        dataIndex: 'date',
        key: 'date'
    },
    {
        title: 'Product Type',
        dataIndex: 'product_type',
        key: 'product_type'
    },
    {
        title: 'Cost',
        dataIndex: 'cost',
        key: 'cost'
    },
    {
        title: 'Customer Name',
        dataIndex: 'customer_name',
        key: 'customer_name'
    }
]
const OrderTable = (props) => {

    const [realDataSource, setRealDataSource] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios(
                'http://localhost:5000/api'
            );
    
            setRealDataSource(result.data);
        }

        fetchData();
    }, []);

    return(
        <div className="table">
            <Table 
            dataSource={realDataSource}
            columns={realColumns}
            size='small'
            scroll={{ y: 220 }}
            pagination={false}
            />
        </div>
    );
}

export default OrderTable;
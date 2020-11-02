import React from "react"
import '../css/OrderTable.css'
import {Table} from 'antd'

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
  
const columns = [
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

const OrderTable = (props) => {
    return(
        <div>
            <Table 
            dataSource={testDataSource} 
            columns={columns}
            size='small'
            scroll={{ y: 220 }}
            pagination={false}
            />
        </div>
    );
}

export default OrderTable;
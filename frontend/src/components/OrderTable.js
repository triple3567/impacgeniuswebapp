import React, { useState, useEffect } from "react"
import '../css/OrderTable.css'
import {Table} from 'antd'

const axios = require('axios').default;

const realColumns = [
    {
        title: 'ID',
        dataIndex: 'id',
        key: 'id',
        width: '10%',
        sorter: (a,b) => a.id - b.id,
        defaultSortOrder: 'descend'
    },
    {
        title: 'Order Number',
        dataIndex: 'order_number',
        key: 'order_number',
        width: '10%',
        sorter: (a,b) => a.order_number - b.order_number,
    },
    {
        title: 'Product Name',
        dataIndex: 'product_name',
        key: 'product_name',
        width: '15%',
    },
    {
        title: 'Count',
        dataIndex: 'count',
        key: 'count',
        width: '7%',
    },
    {
        title: 'Date',
        dataIndex: 'date',
        key: 'date',
        width: '20%',
    },
    {
        title: 'Product Type',
        dataIndex: 'product_type',
        key: 'product_type'
    },
    {
        title: 'Cost',
        dataIndex: 'cost',
        key: 'cost',
        sorter: (a,b) => a.order_number - b.order_number,
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
            scroll={{ y: 400 }}
            pagination={false}
            />
        </div>
    );
}

export default OrderTable;
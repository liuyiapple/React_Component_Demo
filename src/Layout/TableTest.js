import React, {Component, useState} from 'react';
import GolbalTable from "../components/GlobalTable"
// mockdata
import  {data,columns} from "./mockData"
const TableTest = () => {
    /**
     *  @param tableLoading // 作为页面加载的loading效果，在下方有个1s的定时器作为效果展示
     * */
    const [tableLoading, setTableLoading] = useState(true)

    const [current,setCurrent] = useState(1)
    const [pageSize,setPageSize] = useState(5)
    const [total,setTotal] = useState(0)
    setTimeout(() => {
        setTableLoading(false)
    }, 1000)
    const paginationProps = {
        current: current,
        pageSize: pageSize,
        total: total,
    }
    /**
    *  @param onChange // 表格的分页器功能
    * */
    const onChange = (pagination) => {
        setCurrent(pagination.current)
        setPageSize(pagination.pageSize)
        setTotal(pagination.total)
    }
    return (
        <div>
            <GolbalTable
                dataList={data}
                columnList={columns}
                isLoading={tableLoading}
                tableChange={onChange}
                paginationProps={paginationProps}
                showScoll={true }
            ></GolbalTable>
        </div>
    );
}

export default TableTest;
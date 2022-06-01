import React, {Component} from 'react';
import {Table, Card} from 'antd';

/**
 * 公用Table的数据
 *
 * 必填项
 * @param columnList //  array 表头数据
 * @param dataList // array 表格内容
 * @param tableChange // function 表格分页功能
 *
 * 非必填项
 * @param isLoading // boolean 表格的加载 自己处理也行，传递过来也行
 * @param showScoll // boolean 是否展示横向滚动条 如果当前传递了参数，就根据传递参数展示，否则默认值为fasle
 * */
class GlobalTable extends Component {
  render() {
    const {
      dataList,
      columnList,
      isLoading = false,
      tableChange,
      paginationProps = {},
      showScoll = false,
    } = this.props;
    const paginationPropsObj = {
      total: paginationProps.total, // 数据总数
      pageSize: paginationProps.pageSize, // 每页条数
      current: paginationProps.current, // 当前页码
    };
    return (
      <Card>
        {showScoll ? (
          <Table
            columns={columnList}
            dataSource={dataList}
            loading={isLoading}
            onChange={tableChange}
            pagination={paginationPropsObj}
            scroll={{x: 1500}}
          ></Table>
        ) : (
          <Table
            columns={columnList}
            dataSource={dataList}
            loading={isLoading}
            onChange={tableChange}
            pagination={paginationPropsObj}
            // scroll={{ x: 1500 }}
          ></Table>
        )}
      </Card>
    );
  }
}

export default GlobalTable;

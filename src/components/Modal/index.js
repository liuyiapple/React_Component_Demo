import React, { useEffect } from "react";
import styles from "./index.module.less";
import { toJS } from "mobx"
import { useObserver } from "mobx-react"
import { Table, Card } from "antd";
import store from "./store";
const Modal = () => {
  const { getTableList } = store;

  useEffect(() => {
    getTableList();
  },[]);
  return useObserver(() => {
    let { groupDataList } = toJS(store)
    console.log(groupDataList)

    return (
      <Table></Table>
    )
  })
};
export default Modal;

import React, { useEffect } from "react";
import { Select,Button } from "antd";
import useMobxStore from "./store";
import { toJS } from "mobx";
import { Observer, observer } from "mobx-react";
const { Option } = Select;
const UseMobx = () => {
  let { getUserList, userList, count, increment } = useMobxStore;
  useEffect(() => {
    getUserList();
  }, []);
  return (
    <>
      <Observer>
        {() => {
          return (
            <>
              <Select style={{ width: "300px" }}>
                {userList.map((item) => {
                  return (
                    <Option value={item.id} key={item.id}>
                      {item.name}
                    </Option>
                  );
                })}
              </Select>
              <h1>{count}</h1>
              <Button type="primary" onClick={() =>{
                increment()
              }}>Store方法</Button>
            </>
          );
        }}
      </Observer>
    </>
  );
};
export default observer(UseMobx);

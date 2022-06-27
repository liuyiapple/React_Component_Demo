import React, { useEffect } from "react";
import { observer } from "mobx-react-lite";
import { Button, Select } from "antd";
function MobxSix({ countStore }) {
  useEffect(() => {
    countStore.getUserInfo();
  }, []);
  return (
    <div>
      <h1>{countStore.count}</h1>
      <Button
        type="primary"
        onClick={() => {
          countStore.increment();
        }}
      >
        点击+1
      </Button>
      <Button
        type="primary"
        onClick={() => {
          countStore.resetCount();
        }}
      >
        重置
      </Button>
      <Select style={{width:"300px"}}>
        {countStore.userInfo.map((item) => {
          return <Select.Option key={item.id}>{item.name}</Select.Option>;
        })}
      </Select>
    </div>
  );
}
export default observer(MobxSix);

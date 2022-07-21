import React, { Component } from "react";
// 1. Table的测试文件
// import TableTest  from "./Layout/Table/TableTest"
// 2. 文本复制测试文件

// import CopyText from "./components/CopyText/CopyText"
// import Modal from "./components/Modal/index"
// import DiyHook from "./Layout/HooksStady/DiyHook"
// import UseMobx from './components/UseMobx';
// import ShowPage from './Store/showPage';
// import MobxSix from "./components/MobxSix";
// import CuntMobx from "./components/MobxSix/store"
// import DataBuilding from "./Layout/DataBuilding"
// import UploadComponent from "./Layout/UploadComponent"
import TableBusiness from "./Layout/TableBusiness"
// const countStore = new CuntMobx()
class App extends Component {
  render() {
    return (
      <div>
        {/* 1.Table的则是文件 */}
        {/*<TableTest></TableTest>*/}
        {/* 2.文本复制的测试文件   */}
        {/* <CopyText getData={this.getData}/> */}
        {/* <Modal/> */}
        {/* <DiyHook/> */}
        {/* <UseMobx/> */}
        {/* <ShowPage/> */}
        {/*<MobxSix countStore={countStore}/>*/}
        {/*<DataBuilding/>*/}
          {/* <UploadComponent/> */}
          <TableBusiness/>
      </div>
    );
  }
}

export default App;

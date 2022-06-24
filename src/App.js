import React, {Component} from 'react';
// 1. Table的测试文件
// import TableTest  from "./Layout/Table/TableTest"
// 2. 文本复制测试文件

// import CopyText from "./components/CopyText/CopyText"
// import Modal from "./components/Modal/index"
import DiyHook from "./Layout/HooksStady/DiyHook"
class App extends Component {
    getData = () => {
        console.log(123);
    }
    render() {
        return (
            <div>
                {/* 1.Table的则是文件 */}
                {/*<TableTest></TableTest>*/}
                {/* 2.文本复制的测试文件   */}
                {/* <CopyText getData={this.getData}/> */}
                {/* <Modal/> */}
                <DiyHook/>
            </div>
        );
    }
}

export default App;
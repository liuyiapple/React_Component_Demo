import React, {Component} from 'react';
// 1. Table的测试文件
// import TableTest  from "./Layout/Table/TableTest"
// 2. 文本复制测试文件
import CopyText from "./components/CopyText/CopyText"
class App extends Component {
    render() {
        return (
            <div>
                {/* 1.Table的则是文件 */}
                {/*<TableTest></TableTest>*/}
                {/* 2.文本复制的测试文件   */}
                <CopyText/>

            </div>
        );
    }
}

export default App;
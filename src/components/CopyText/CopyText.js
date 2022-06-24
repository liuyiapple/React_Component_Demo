import React, {Component, createRef, useRef} from 'react';
import {Button, Card} from 'antd';
import styles from './index.module.css';
// 很重要的一个包，用来复制文本
import {CopyToClipboard} from 'react-copy-to-clipboard';
// 导入假数据
import MockData from './mockText';
class CopyText extends Component {
  copyRef = createRef();
  state = {
    value: '',
    copied: false,
  };
  copyHandle = () => {
    this.setState({
      value: this.copyRef.current.innerText,
      copied: true,
    });
    console.log();
  };
  // TODO 这里由于点击下面的按钮，会触发两次，所以提前调了一下，会改进
  componentDidMount() {
    this.copyHandle();
    this.props.getData();
  }

  render() {
    return (
      <Card className={styles.container}>
        <Card className={styles.textContainer}>
          <div ref={this.copyRef}>{MockData}</div>
        </Card>
        <div>
          <CopyToClipboard
            text={this.state.value}
            onCopy={() => this.setState({copied: true})}
          >
            <Button
              type={'primary'}
              className={styles.buttonLocation}
              onClick={() => {
                this.setState({
                  copied: true,
                });
                this.copyHandle();
                this.props.getData();
              }}
            >
              一键复制
            </Button>
          </CopyToClipboard>
        </div>
      </Card>
    );
  }
}

export default CopyText;

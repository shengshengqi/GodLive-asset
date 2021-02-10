import React from "react";
import { Modal, Button } from "antd-mobile";

function closest(el, selector) {
  const matchesSelector =
    el.matches ||
    el.webkitMatchesSelector ||
    el.mozMatchesSelector ||
    el.msMatchesSelector;
  while (el) {
    if (matchesSelector.call(el, selector)) {
      return el;
    }
    el = el.parentElement;
  }
  return null;
}

class ModalExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal1: false,
      modal2: false,
    };
  }
  showModal = (key) => (e) => {
    e.preventDefault(); // 修复 Android 上点击穿透
    this.setState({
      [key]: true,
    });
  };
  onClose = (key) => () => {
    this.setState({
      [key]: false,
    });
  };

  onWrapTouchStart = (e) => {
    // fix touch to scroll background page on iOS
    if (!/iPhone|iPod|iPad/i.test(navigator.userAgent)) {
      return;
    }
    const pNode = closest(e.target, ".am-modal-content");
    if (!pNode) {
      e.preventDefault();
    }
  };

  render() {
    return (
      <div>
        <Button onClick={this.showModal("modal1")} icon="check-circle-o">
          游览结束
        </Button>
        <Modal
          visible={this.state.modal1}
          transparent
          maskClosable={false}
          onClose={this.onClose("modal1")}
          title="神仙居"
          footer={[
            {
              text: "Ok",
              onPress: () => {
                // console.log("ok");
                this.onClose("modal1")();
              },
            },
          ]}
          wrapProps={{ onTouchStart: this.onWrapTouchStart }}
          //   afterClose={() => {
          //     alert("afterClose");
          //   }}
        >
          <div>祝您新年快乐~</div>
        </Modal>
      </div>
    );
  }
}

export default ModalExample;

import { Tabs, WhiteSpace } from "antd-mobile";
import "./Tab.css";

function TabExample() {
  const tabs = [
    { title: "A1 线", sub: "0" },
    { title: "A2 线", sub: "1" },
    { title: "B1 线", sub: "2" },
    { title: "B2 线", sub: "3" },
  ];

  return (
    <div>
      <Tabs
        tabs={tabs}
        initialPage={0}
        onChange={(tab, index) => {
          console.log("onChange", index, tab);
        }}
        onTabClick={(tab, index) => {
          console.log("onTabClick", index, tab);
        }}
      >
        <div className="tab">
          <img
            src="https://test1-1258878792.cos.ap-nanjing.myqcloud.com/A1.PNG"
            alt="A1路线图"
          ></img>
        </div>
        <div className="tab">
          <img
            src="https://test1-1258878792.cos.ap-nanjing.myqcloud.com/A2.PNG"
            alt="A2路线图"
          ></img>
        </div>
        <div className="tab">
          <img
            src="https://test1-1258878792.cos.ap-nanjing.myqcloud.com/B1.PNG"
            alt="B1路线图"
          ></img>
        </div>
        <div className="tab">
          <img
            src="https://test1-1258878792.cos.ap-nanjing.myqcloud.com/B2.JPG"
            alt="B2路线图"
          ></img>
        </div>
      </Tabs>
      <WhiteSpace />
    </div>
  );
}
export default TabExample;

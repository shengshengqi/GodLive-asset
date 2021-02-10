import React, { useEffect } from "react";
import "antd-mobile/dist/antd-mobile.css";
import Tab from "./components/Tab";
import Modal from "./components/Modal";
import axios from "axios";

axios.defaults.baseURL = "http://129.204.218.96:4000";

function App() {
  useEffect(() => {
    axios.get("/goldlog/pv").then(function (response) {
      console.log(response.data, "成功加一");
    });
  });

  return (
    <div className="App">
      <h3 style={{ textAlign: "center" }}>神仙居春节山顶旅游线示意图</h3>
      <Tab />
      <Modal />
    </div>
  );
}

export default App;

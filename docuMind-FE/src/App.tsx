import React, { useState } from "react";

import { Layout, theme } from "antd";
import "./App.css";
import SideBar from "./components/sidebar/SideBar";
import HeaderSection from "./components/header/HeaderSection";
import ContentSection from "./components/content/ContentSection";

const App: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [newChat, setNewChat] = useState(true);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <SideBar collapsed={collapsed} setNewChat={setNewChat}/>
      <Layout style={{ minHeight: "100vh" }}>
        <HeaderSection collapsed={collapsed} setCollapsed={setCollapsed} colorBgContainer={colorBgContainer}/>
        <ContentSection borderRadiusLG={borderRadiusLG} colorBgContainer={colorBgContainer} newChat={newChat} setNewChat={setNewChat}/>
      </Layout>
    </Layout>
  );
};

export default App;

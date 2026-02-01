import React from "react";
import { Button, Layout } from "antd";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import styles from "./HeaderSection.module.css";
import sidebarlogo from "../../assets/sidebar-logo.png";

const { Header } = Layout;

interface HeaderSectionProps {
  collapsed: boolean;
  setCollapsed: (value: boolean) => void;
  colorBgContainer: string;
}

const HeaderSection: React.FC<HeaderSectionProps> = ({
  collapsed,
  setCollapsed,
  colorBgContainer,
}) => {
  return (
    <Header
      style={{
        padding: "0 16px",
        background: colorBgContainer,
        display: "flex",
        alignItems: "center",
      }}
    >
      {/* Left toggle */}
      <Button
        type="text"
        icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
        onClick={() => setCollapsed(!collapsed)}
        style={{
          fontSize: "16px",
          width: 34,
          height: 34,
        }}
      />

      {/* Center container */}
      <div className={styles.centerWrapper}>
        <div className={styles.headline}>
          Welcome to
          <span className={styles.brand}>
            <img src={sidebarlogo} alt="D" className={styles.logo} />
            ocuMind-99
          </span>
        </div>
      </div>
    </Header>
  );
};

export default HeaderSection;

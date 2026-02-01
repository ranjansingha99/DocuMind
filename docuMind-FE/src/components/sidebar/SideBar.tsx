import { Layout } from "antd";
const { Sider } = Layout;
import style from "./SideBar.module.css";
import sidebarlogo from "../../assets/sidebar-logo.png";
import NewChat from "./features/NewChat";

interface SideBarProps {
  collapsed?: boolean;
  setNewChat: (value: boolean) => void;
}

const SideBar: React.FC<SideBarProps> = ({ collapsed, setNewChat }) => {
  return (
    <>
      <Sider
        trigger={null}
        collapsible
        collapsed={collapsed}
        width="22%"
        collapsedWidth="5%"
        style={{
          background: "#584294",
        }}
      >
        {!collapsed ? (
          <>
            <div className={style.name}>DocuMind-99</div>
            <div className={style.description}>
              <h2>Welcome to DocuMind-99</h2>
              <p>
                Upload your PDF and start a conversation with your documents.
                DocuMind lets you ask questions, generate summaries, and extract
                insights instantly using AI-powered analysis.
              </p>
              <p>
                Save time, avoid manual searching, and get precise answers
                directly from your files — just upload and chat.
              </p>
            </div>

            <div className={style.newChatButton}>
              <NewChat setNewChat={setNewChat} />
            </div>
          </>
        ) : (
          <img src={sidebarlogo} alt="D" className={style.logo} />
        )}
      </Sider>
    </>
  );
};

export default SideBar;

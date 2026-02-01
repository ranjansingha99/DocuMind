import { Layout } from "antd";
import { useState } from "react";
import LandingPage from "./features/LandingPage";
import ChattingWindow from "./features/ChattingWindow";
import AnalyzeButton from "./features/AnalyzeButton";
import Loader from "./features/Loader";
import Uploader from "./features/Uploader";

const { Content } = Layout;
interface ContentSectionProps {
  borderRadiusLG: number;
  colorBgContainer: string;
  newChat: boolean;
  setNewChat: (value: boolean) => void;
}

function ContentSection({
  borderRadiusLG,
  colorBgContainer,
  newChat,
  setNewChat,
}: ContentSectionProps) {
  const [isAnalyzeButton, setIsAnalyzeButton] = useState(false);
  const [isLoader, setIsLoader] = useState(false);
  const [isChattingWindow, setIsChattingWindow] = useState(false);

  console.log(isLoader);
  return (
    <Content
      style={{
        margin: "24px 16px",
        padding: 24,
        minHeight: 280,
        background: colorBgContainer,
        borderRadius: borderRadiusLG,
      }}
    >
      {newChat ? (
        <>
          <LandingPage />
          <Uploader setIsAnalyzeButton={setIsAnalyzeButton} />
          {isAnalyzeButton ? (
            <AnalyzeButton setIsLoader={setIsLoader} setNewChat={setNewChat} />
          ) : null}
        </>
      ) : isLoader ? (
        <Loader
          setIsLoader={setIsLoader}
          setIsChattingWindow={setIsChattingWindow}
          setNewChat={setNewChat}
        />
      ) : isChattingWindow ? (
        <ChattingWindow />
      ) : null}
    </Content>
  );
}

export default ContentSection;

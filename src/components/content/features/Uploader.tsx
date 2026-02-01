import React from "react";
import { InboxOutlined } from "@ant-design/icons";
import type { UploadProps } from "antd";
import { message, Upload } from "antd";
import style from "./Uploader.module.css";

const { Dragger } = Upload;

interface UploaderProps {
  setIsAnalyzeButton: (value: boolean) => void;
}

const props: UploadProps = {
  name: "file",
  multiple: false,
  action: "https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload", // BE endpoint
  onChange(info) {
    const { status } = info.file;
    if (status !== "uploading") {
      console.log(info.file, info.fileList);
    }
    if (status === "done") {
      message.success(`${info.file.name} file uploaded successfully.`);
    } else if (status === "error") {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
  onDrop(e) {
    console.log("Dropped files", e.dataTransfer.files);
  },
};

const Uploader: React.FC<UploaderProps> = ({ setIsAnalyzeButton }) => {
  // will enable Analyze button upon successful upload setIsAnalyzeButton(true)

  // on unsuccessful just show notification
  setIsAnalyzeButton(true);
  return (
    <div className={style.dragger}>
      <Dragger {...props}>
        <p className="ant-upload-drag-icon">
          <InboxOutlined />
        </p>
        <p className="ant-upload-text">
          Click or drag file to this area to upload
        </p>
        <p className="ant-upload-hint">Upload the PDF here</p>
      </Dragger>
    </div>
  );
};

export default Uploader;

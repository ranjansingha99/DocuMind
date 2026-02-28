import React from "react";
import { InboxOutlined } from "@ant-design/icons";
import type { UploadProps } from "antd";
import { message, Upload } from "antd";
import style from "./Uploader.module.css";
import { uploadPdf } from "../../../store/uploadSlice";
import { useAppDispatch } from "../../../hooks/useAppDispatch";

const { Dragger } = Upload;

interface UploaderProps {
  setIsAnalyzeButton: (value: boolean) => void;
}

interface UploaderProps {
  setIsAnalyzeButton: (value: boolean) => void;
}

const Uploader: React.FC<UploaderProps> = ({ setIsAnalyzeButton }) => {
  const dispatch = useAppDispatch();
  const props: UploadProps = {
    name: "file",
    multiple: false,
    maxCount: 1,

    beforeUpload: async (file) => {
      const formData = new FormData();
      formData.append("file", file);

      try {
        await dispatch(uploadPdf(formData)).unwrap();
        message.success(`${file.name} uploaded successfully`);
        setIsAnalyzeButton(true);
      } catch (err) {
        message.error(`${file.name} upload failed`);
      }

      return false;
    },
  };
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

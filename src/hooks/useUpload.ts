import { useAppDispatch } from "./useAppDispatch";
import { useAppSelector } from "./useAppSelector";
import { uploadPdf } from "../store/uploadSlice";

const useUpload = () => {
  const dispatch = useAppDispatch();
  const { status, error, jobId } = useAppSelector((state: any) => state.upload);

  const upload = async (file: File) => {
    const formData = new FormData();
    formData.append("file", file);

    return dispatch(uploadPdf(formData));
  };

  return { upload, status, error, jobId };
};

export default useUpload;
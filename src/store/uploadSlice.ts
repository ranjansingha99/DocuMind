import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../api/client";

interface AnalyzeState {
  jobId: string | null;
  status: "pending" | "success" | "failed";
  error: string | null;
}

const initialState: AnalyzeState = {
  jobId: null,
  status: "pending",
  error: null,
};

export const uploadPdf = createAsyncThunk(
  "api/upload",
  async (formData: FormData) => {
    const res = await api.post("/api/files/upload", formData);
    return res.data;
  }
);

const uploadSlice = createSlice({
  name: "upload",
  initialState,
  reducers: {
    resetAnalyze(state) {
      state.jobId = null;
      state.status = "pending";
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      // ---- Upload PDF ----
      .addCase(uploadPdf.pending, (state) => {
        state.error = null;
      })
      .addCase(uploadPdf.fulfilled, (state, action) => {
        state.jobId = action.payload.jobId;
        state.status = "pending";
      })
      .addCase(uploadPdf.rejected, (state) => {
        state.error = "PDF upload failed";
      })
  },
});

export const { resetAnalyze } = uploadSlice.actions;
export default uploadSlice.reducer;

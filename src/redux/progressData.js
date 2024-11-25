import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL } from "../api";
import { departments } from "../components/variables/variables";

if (!Array.isArray(departments) || departments.length === 0) {
  throw new Error("Departments array is not defined or empty.");
}

export const fetchProgressData = createAsyncThunk(
  "progress/fetchProgressData",
  async () => {
    try {
      const data = {};
      for (const dep of departments) {
        const response = await axios.get(
          `${BASE_URL}/api/clerk/progress/${dep}`
        );
        console.log(`Response for ${dep}:`, response.data);
        data[dep] = response.data || {};
      }
      return data;
    } catch (error) {
      console.error("Error fetching progress data:", error.message);
      return {}; // Return empty object on error
    }
  }
);

const progressSlice = createSlice({
  name: "progress",
  initialState: {
    data: null,
    loading: false,
    error: null,
  },
  reducers: {
    resetProgress: (state) => {
      state.data = null;
      state.loading = false;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProgressData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProgressData.fulfilled, (state, action) => {
        state.data = action.payload;
        state.loading = false;
      })
      .addCase(fetchProgressData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { resetProgress } = progressSlice.actions;
export default progressSlice.reducer;

export const selectProgressData = (state) => state.progress?.data || {};
export const selectProgressLoading = (state) =>
  state.progress?.loading || false;
export const selectProgressError = (state) => state.progress?.error || null;

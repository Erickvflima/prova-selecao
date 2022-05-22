import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { AxiosError } from "axios";
import { personDataInterface } from "../../../interfaces/personData";
import { reduxTemplate } from "../../../interfaces/redux";
import { getPersonData } from "./services";

export const personDataList = createAsyncThunk<
  personDataInterface,
  void,
  { rejectValue: reduxTemplate }
>("getPersonData", async (_, { rejectWithValue }) => {
  try {
    const data = await getPersonData();
    return data;
  } catch (error) {
    const err = error as AxiosError<reduxTemplate>;
    return rejectWithValue(err.response?.data as reduxTemplate);
  }
});

interface IPersonData extends reduxTemplate {
  personDataList: personDataInterface;
}

const initialState: IPersonData = {
  status: "idle",
  message: "",
  type: "",
  personDataList: {
    status: "",
    message: "",
    document: [],
  },
};

export const cobapReducer = createSlice({
  name: "cobap",
  initialState,
  reducers: {
    clearStatusCobap: (state) => {
      state.status = "idle";
      state.message = "";
      state.type = "";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(personDataList.pending, (state, action) => {
        state.status = "loading";
        state.type = action.type;
      })
      .addCase(personDataList.fulfilled, (state, action) => {
        state.status = "completed";
        state.type = action.type;
        state.personDataList = action.payload;
      })
      .addCase(personDataList.rejected, (state, action) => {
        state.status = "failed";
        state.message = action.payload?.message || "";
        state.type = action.type;
      });
  },
});
export const { clearStatusCobap } = cobapReducer.actions;
export default cobapReducer.reducer;

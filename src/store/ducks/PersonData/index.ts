import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { AxiosError } from "axios";
import {
  personDataInterface,
  postPersonDataPost,
} from "../../../interfaces/personData";
import { reduxTemplate } from "../../../interfaces/redux";
import { getPersonData, postPersonData } from "./services";

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
export const personDataPost = createAsyncThunk<
  personDataInterface,
  postPersonDataPost,
  { rejectValue: reduxTemplate }
>("postPersonData", async (payload, { rejectWithValue }) => {
  try {
    const data = await postPersonData(payload);
    return data;
  } catch (error) {
    const err = error as AxiosError<reduxTemplate>;
    return rejectWithValue(err.response?.data as reduxTemplate);
  }
});

interface IPersonData extends reduxTemplate {
  personDataList: personDataInterface;
  personDataPost: personDataInterface;
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
  personDataPost: {
    status: "",
    message: "",
    document: [],
  },
};

export const personDataReducer = createSlice({
  name: "personData",
  initialState,
  reducers: {
    clearStatusPersonData: (state) => {
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
      })
      .addCase(personDataPost.pending, (state, action) => {
        state.status = "loading";
        state.type = action.type;
      })
      .addCase(personDataPost.fulfilled, (state, action) => {
        state.status = "completed";
        state.type = action.type;
        state.personDataPost = action.payload;
      })
      .addCase(personDataPost.rejected, (state, action) => {
        state.status = "failed";
        state.message = action.payload?.message || "";
        state.type = action.type;
      });
  },
});
export const { clearStatusPersonData } = personDataReducer.actions;
export default personDataReducer.reducer;

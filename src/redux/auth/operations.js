import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://connections-api.goit.global/";

export const registerUser = createAsyncThunk(
  "auth/register",
  async (body, thinkAPI) => {
    try {
      const { data } = await axios.post(`users/signup`, body);
      return data;
    } catch (error) {
      return thinkAPI.rejectWithValue(error.message);
    }
  }
);

export const loginUser = createAsyncThunk(
  "auth/login",
  async (body, thinkAPI) => {
    try {
      const { data } = await axios.post(`users/login`, body);
      return data;
    } catch (error) {
      return thinkAPI.rejectWithValue(error.message);
    }
  }
);

export const logoutUser = createAsyncThunk(
  "auth/logout",
  async (body, thinkAPI) => {
    try {
      const { data } = await axios.post(`users/logout`, body);

      return data;
    } catch (error) {
      return thinkAPI.rejectWithValue(error.message);
    }
  }
);

export const refreshtUser = createAsyncThunk(
  "auth/refresh",
  async (id, thinkAPI) => {
    try {
      const { data } = await axios.delete(`/contacts/${id}`);

      return data.id;
    } catch (error) {
      return thinkAPI.rejectWithValue(error.message);
    }
  }
);

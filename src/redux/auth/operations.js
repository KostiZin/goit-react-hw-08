import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://connections-api.goit.global/";

const setAuthHeader = (token) => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = "";
};

export const register = createAsyncThunk(
  "auth/register",
  async (credentials, thinkAPI) => {
    try {
      const { data } = await axios.post(`users/signup`, credentials);
      setAuthHeader(data.token);
      return data;
    } catch (error) {
      return thinkAPI.rejectWithValue(error.message);
    }
  }
);

export const logIn = createAsyncThunk(
  "auth/login",
  async (credentials, thinkAPI) => {
    try {
      const { data } = await axios.post(`users/login`, credentials);
      setAuthHeader(data.token);
      return data;
    } catch (error) {
      return thinkAPI.rejectWithValue(error.message);
    }
  }
);

export const logOut = createAsyncThunk("auth/logout", async (_, thinkAPI) => {
  try {
    const { data } = await axios.post(`users/logout`);
    clearAuthHeader();

    return data;
  } catch (error) {
    return thinkAPI.rejectWithValue(error.message);
  }
});

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

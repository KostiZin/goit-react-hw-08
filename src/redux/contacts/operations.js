import { createAsyncThunk } from "@reduxjs/toolkit";
import { goitApi } from "../auth/operations";
import toast from "react-hot-toast";

export const fetchContacts = createAsyncThunk(
  "contacts/fetchAll",
  async (_, thunkApi) => {
    try {
      const { data } = await goitApi.get("/contacts");
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const addContacts = createAsyncThunk(
  "contacts/addContact",
  async (body, thunkApi) => {
    try {
      const { data } = await goitApi.post(`/contacts`, body);
      console.log(data);
      toast.success(`Contact ${data.name} was successfully created`);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const deleteContacts = createAsyncThunk(
  "contacts/deleteContact",
  async (id, thunkApi) => {
    try {
      const { data } = await goitApi.delete(`/contacts/${id}`);
      toast.success(`Contact ${data.name} was successfully deleted`);
      return data.id;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

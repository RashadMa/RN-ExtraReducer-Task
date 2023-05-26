import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import axios from 'axios';

const url = 'https://northwind.vercel.app/api/customers/';

export const getAllCustomers = createAsyncThunk(
  'customer/getAllCustomers',
  async () => {
    const response = await axios.get(url);
    return response.data;
  },
);

export const deleteCustomer = createAsyncThunk(
  'customer/deleteCustomer',
  async (id: string) => {
    const response = await axios.delete(url + id);
    return response.data;
  },
);

interface CustomerState {
  customers: any[];
  loading: boolean;
  error: any;
}

const initialState: CustomerState = {
  customers: [],
  loading: true,
  error: '',
};

const customerSlice = createSlice({
  name: 'customer',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(getAllCustomers.pending, (state, action) => {
      state.customers = [];
      state.loading = true;
    });
    builder.addCase(getAllCustomers.fulfilled, (state, action) => {
      state.customers = action.payload;
      state.loading = false;
    });
    builder.addCase(getAllCustomers.rejected, (state, action) => {
      state.customers = [];
      state.loading = false;
      state.error = action.payload;
    });
    builder.addCase(deleteCustomer.pending, (state, action) => {
      state.customers = [];
      state.loading = true;
    });
    builder.addCase(deleteCustomer.fulfilled, (state, action) => {
      state.customers = action.payload;
      state.loading = false;
    });
    builder.addCase(deleteCustomer.rejected, (state, action) => {
      state.customers = [];
      state.loading = false;
      state.error = action.payload;
    });
  },
});

export default customerSlice.reducer;

import { PayloadAction, createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { RootState } from '../../redux/store';
import { Users } from '../../models/users';

interface CountState {
  value: number;
  pending: boolean;
  error: boolean;
  user: Users;
}

export const fetchUsers = createAsyncThunk('user/fetch', async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = response.json();
  console.log(data);
  return data;
});

const initialState: CountState = {
  value: 0,
  pending: false,
  error: false,
  user: [],
};
export const counterSlice = createSlice({
  name: 'count',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value > 0 && (state.value -= 1);
    },
    incrementBy: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
    reset: (state) => {state.value=0},
    addUser: (state,action) => {state.user.push(action.payload)},
  },
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.user = action.payload;
      state.error = false;
      state.pending = false;
    });
    builder.addCase(fetchUsers.pending, (state) => {
      state.pending = true;
    });
    builder.addCase(fetchUsers.rejected, (state) => {
      state.error = true;
      state.pending = false;
    });
  },
});
export const { increment, decrement, incrementBy, reset ,addUser} = counterSlice.actions;
export const selectCount = (state: RootState) => state.counter.value;
export const selectUser = (state: RootState) => state.counter.user;
export const selectPending = (state: RootState) => state.counter.pending;
export const selectError = (state: RootState) => state.counter.error;
export default counterSlice.reducer;

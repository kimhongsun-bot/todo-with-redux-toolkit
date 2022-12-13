
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchToDo } from '../counter/counterAPI';

const initialState = {
  task: [],
  done: [],
  deleted: [],
  status: 'idle',
};


export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.task.push(action.payload);
    },
    deleteTask: (state, action) => {
        const index = state.task.indexOf(action.payload);
        if (index > -1) {
            state.task.splice(index, 1);
            state.deleted.push(action.payload);
        }
    },
    moveToDone: (state, action) => {
        const index = state.task.indexOf(action.payload);
        if (index > -1) {
            state.task.splice(index, 1)
            state.done.push(action.payload);
        }
    },
    recoverTask: (state, action) => {
        const index = state.deleted.indexOf(action.payload);
        if (index > -1) {
            state.deleted.splice(index, 1);
            state.task.push(action.payload);
        }
    }
  },
});

export const { addTask, deleteTask, moveToDone, recoverTask } = todoSlice.actions;


export default todoSlice.reducer;

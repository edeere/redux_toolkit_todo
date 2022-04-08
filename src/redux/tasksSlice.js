import { createSlice } from "@reduxjs/toolkit";

export const tasksSlice = createSlice({
    name: "tasks",
    initialState:[],
    reducers:{
        addTask: (state, action)=>{
            const id = Math.round((new Date()).getTime() / 1000)
            const newTask = {
                id,
                title: action.payload.task
            }
            state.push(newTask);
        }
    }
});

export const {addTask, deleteTask} = tasksSlice.actions;

export default tasksSlice.reducer;
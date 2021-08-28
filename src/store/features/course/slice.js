import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchCourse } from '../../../api';



export const initialCourseState = {
  value: 42,
  status: 'idle',
  error: null,
};

export const fetchTodayCourse = createAsyncThunk(
  "course/fetchCourse",
  async () => {
    const response = await fetchCourse;
    return response.course;
  }
)

const courseSlice = createSlice({
  name: 'course',
  initialState: initialCourseState,
  extraReducers: {
    [fetchTodayCourse.pending]: () => {},
    [fetchTodayCourse.fulfilled]: () => {},
    [fetchTodayCourse.rejected]: () => {},
  }
});

export const selectCourse = (state) => state.course.value;
export default courseSlice.reducer;
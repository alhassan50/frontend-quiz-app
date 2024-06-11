import { configureStore } from "@reduxjs/toolkit";

//reducers
import selectedSubjectReducer from '../slices/subjectSlice'

const store = configureStore({
    reducer: {
        selectedSubject: selectedSubjectReducer,
    }
})

export default store
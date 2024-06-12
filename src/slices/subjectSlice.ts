import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: Subject = {
    title: "",
    icon: "",
    color: "",
};

const subjectSlice = createSlice({
    name: 'selectedSubject',
    initialState,
    reducers: {
        selectSubject: {
            prepare(subject: Subject | undefined) {
                if (subject === undefined) return { payload: initialState };
                return { payload: subject };
            },
            reducer(state, action: PayloadAction<Subject>) {
                state.title = action.payload.title
                state.icon = action.payload.icon
                state.color = action.payload.color
            },
        }
    }
});


export const getSelectedSubject = (state: { selectedSubject: Subject }) => state.selectedSubject
export const { selectSubject } = subjectSlice.actions;
export default subjectSlice.reducer;

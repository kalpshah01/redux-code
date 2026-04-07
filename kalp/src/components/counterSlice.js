import { createSlice } from "@reduxjs/toolkit"
const initialState = {
    count: 0
}
const counterSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        intcount: (state) => {
            state.count += 1
        },
        descount: (state) => {
            state.count -= 1
        }
    }
})
export const { intcount, descount } = counterSlice.actions
export default counterSlice.reducer
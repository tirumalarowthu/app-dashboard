const { createSlice } = require("@reduxjs/toolkit");
const initialState = {
    sidebarShow: true,
    unfoldable :false
}
const sidebarSlice = createSlice({
    name: "sidebarSlice",
    initialState,
    reducers: {
        changeState: (state, action) => {
            state.sidebarShow = !state.sidebarShow
        },
        changeUnfoldableState:(state,action)=>{
            state.unfoldable=!state.unfoldable
        }
    }
})
export default sidebarSlice.reducer
export const { changeState,changeUnfoldableState } = sidebarSlice.actions
import {createSlice} from '@reduxjs/toolkit'
const initialState={
    value:[]
}
export const  colorSlide = createSlice({
    name:"color",
    initialState,
    reducers:{
        setColor:(state)=>{
            state.value=["red"]
        }
    }
})

export const { setColor } =colorSlide.actions
export default colorSlide.reducer



import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

//api call or asynchrounus function call using thunk
//first argument is name of slice+/+name of Thunk function
export const fetchRestourent = createAsyncThunk('restourentSlice/fetchRestourent', () => {
    const result = axios.get('/restaurant.json').then(responce => responce.data)
    console.log("rsponce from thunk")
    console.log(result)
    return result
})

const restourentSlice = createSlice({
    name: 'restourentSlice',
    initialState: {
        loading: false,//pending state that means Api calls i progres 
        allRestourent: [],//resolve state
        error: '',//rejected state return error
    },
    extraReducers: (builder) => {
        builder.addCase(fetchRestourent.pending, (state) => {
            state.loading = true;
        })
        builder.addCase(fetchRestourent.fulfilled, (state, action) => {
            state.loading = false
            state.allRestourent = action.payload;
            state.searchReastouorent = action.payload;
            state.error = ''
        })
        builder.addCase(fetchRestourent.rejected, (state, action) => {
            state.loading = false
            state.allRestourent = []
            state.error = action.error.message
        })
    },
    reducers:
    {
        searchReastouorent: (state, action) => {
            state.allRestourent.restaurants = state.searchReastouorent.restaurants.filter(item => item.neighborhood.toLowerCase().includes(action.payload))
        }
    }
})



export default restourentSlice.reducer

export const {searchReastouorent} = restourentSlice.actions

//redux is a synchronus operarion but api call or file read or write are asynchronus oprations
//to deal with asynchroumus operation in redux we are using Redux Thung
//thung is not a part of slice, seprate method in redux toolkit 
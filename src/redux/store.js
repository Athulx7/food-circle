import { configureStore } from "@reduxjs/toolkit";
import restourentSlice from "./restourentSlice";

const store = configureStore({
    reducer:{

        restourentSlice: restourentSlice
    }
})

export default store
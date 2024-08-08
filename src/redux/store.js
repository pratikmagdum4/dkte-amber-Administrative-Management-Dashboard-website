import {configureStore} from "@reduxjs/toolkit"
import authReducers from "./auth.js";

export default configureStore({
    reducer:{
        auth:authReducers,
    },
})



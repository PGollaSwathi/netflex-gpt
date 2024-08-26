import {configureStore} from "@reduxjs/toolkit"
import userSlice from "./userSlice"
import nowPLayingMovies from "./nowPLayingMovies"

const appStore = configureStore({
    reducer : {
     user : userSlice,
     movies : nowPLayingMovies
    }
})


export default appStore
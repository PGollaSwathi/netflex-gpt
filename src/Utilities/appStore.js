import {configureStore} from "@reduxjs/toolkit"
import userSlice from "./userSlice"
import nowPLayingMoviesSlice from "./nowPLayingMovies"
import gptSlice from "./gptSlice";

const appStore = configureStore({
    reducer : {
     user : userSlice,
     movies : nowPLayingMoviesSlice,
     gpt : gptSlice,
    },
});


export default appStore
import { createSlice } from "@reduxjs/toolkit";

const nowPLayingMovies = createSlice({
    name : "movies",
    initialState : {
        nowPlayingadd : null,
        videoTrailer : null
    },
    reducers : {
        addNowPlayingMovies : (state , action)=>{
         state.nowPlayingadd = action.payload
        },
        addVideoTrainer : (state, action) =>{
            state.videoTrailer = action.payload
        }
    }
})

export const {addNowPlayingMovies , addVideoTrainer} = nowPLayingMovies.actions
export default nowPLayingMovies.reducer
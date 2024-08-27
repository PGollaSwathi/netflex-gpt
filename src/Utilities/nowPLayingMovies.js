import { createSlice } from "@reduxjs/toolkit";

const nowPLayingMovies = createSlice({
    name : "movies",
    initialState : {
        nowPlayingadd : null,
        videoTrailer : null,
        nowPopularMovies :null,
        toprated : null
    },
    reducers : {
        addNowPlayingMovies : (state , action)=>{
         state.nowPlayingadd = action.payload
        },
        addNowPopularMovies : (state , action)=>{
            state.nowPopularMovies = action.payload
           },
           addTopRated : (state , action)=>{
            state.toprated = action.payload
           },
           

        addVideoTrainer : (state, action) =>{
            state.videoTrailer = action.payload
        }
    }
})

export const {addNowPlayingMovies , addVideoTrainer ,addNowPopularMovies ,addTopRated} = nowPLayingMovies.actions
export default nowPLayingMovies.reducer
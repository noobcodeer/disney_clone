import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    recommend:null,
    original:null,
    newmovie:null,
    trending:null
}
const movieSlice= createSlice({
    name:'movie',
    initialState,
    reducers:{
        setMovie:(state,action)=>{
            state.recommend = action.payload.recommend;
            state.original = action.payload.original;
            state.newmovie= action.payload.newmovie;
            state.trending = action.payload.trending;
        }
    }
})
 
export const  {setMovie} =  movieSlice.actions;

export const selectRecommend =(state)=>state.movie.recommend;
export const selectOriginal =(state)=>state.movie.original;
export const selectNewmovie =(state)=>state.movie.newmovie;
export const selectTrending =(state)=>state.movie.trending;

export default movieSlice.reducer;

import axios from "axios"
import { getFailed, getSuccess } from "../actions/spost";
const API_URL = 'https://api.jikan.moe/v3/'
export const getSport =() => async (dispatch)=>{
    const res = await axios.get(API_URL+ 'anime/1/characters_staff');
    if(res.data){
        dispatch(getSuccess(res.data))
    }else{
        dispatch(getFailed)
    }

}
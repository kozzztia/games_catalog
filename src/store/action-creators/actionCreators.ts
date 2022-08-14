import {ActionsTypesEnum, AllActionTypes} from "../../types/types";
import {Dispatch} from "react";
import axios  from "axios";



const createUrl = (param: string) : string =>{
    return  `https://api.rawg.io/api/${param}?key=3719d7855af54634ad3aa19763652ea2`


}

export const fetchGenres = ()=>{
    return async (dispatch : Dispatch<AllActionTypes>) =>{
        try{
            dispatch({type: ActionsTypesEnum.CHANGE_LOADER_VALUE , payload : true})
            const response = await axios.get(createUrl("genres"))
            const genres = response.data.results;
            dispatch({type: ActionsTypesEnum.GET_GENRES , payload: genres})
            dispatch({type: ActionsTypesEnum.CHANGE_LOADER_VALUE , payload : false})
        }catch (e){
            dispatch({type: ActionsTypesEnum.CHANGE_LOADER_VALUE , payload : false})
            dispatch({type: ActionsTypesEnum.GET_ERROR , payload : `${e}`})
        }
    }
}
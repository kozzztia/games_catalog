import {applyMiddleware , legacy_createStore as createStore} from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from 'redux-thunk';
import {ActionsTypesEnum, AllActionTypes, InitialStoreTypesInterface} from "../types/types";




const initialStore : InitialStoreTypesInterface = {
    genres: [],
    loading: false,
    error: null,
}


export const rootReducer = (state = initialStore, action : AllActionTypes) => {
    switch (action.type) {
        case ActionsTypesEnum.CHANGE_LOADER_VALUE:
            return {
                ...state,
                loading: action.payload,
            }
        case ActionsTypesEnum.GET_GENRES:
            return {
                ...state,
                genres: [...action.payload],
            }
            case ActionsTypesEnum.GET_ERROR:
            return {
                ...state,
                error: action.payload,
            }
        default:
            return state
    }
}
export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

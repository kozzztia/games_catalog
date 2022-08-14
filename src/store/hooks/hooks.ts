import {rootReducer} from "../store"
import {useSelector , TypedUseSelectorHook} from "react-redux";


// hook for useSelector, get type from reducer
type RootState = ReturnType<typeof rootReducer>
export const useTypedSelector : TypedUseSelectorHook<RootState> = useSelector


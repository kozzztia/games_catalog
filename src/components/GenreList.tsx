
import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {InitialStoreTypesInterface} from "../types/types";
import {fetchGenres} from "../store/action-creators/actionCreators";
import {useTypedSelector} from "../store/hooks/hooks";


const GenreList: React.FC = () => {
    const {loading , error , genres} = useTypedSelector (state => state)
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(fetchGenres() as any)
    },[])


    if(loading) {
        return <h2>Loading</h2>
    }
    if(error) {
        return <h2>error</h2>
    }
    return (
        <div>
            {genres.map((item, index) => <p key={genres[index].id}>{genres[index].name}</p>)}
        </div>
    );
}

export default GenreList;
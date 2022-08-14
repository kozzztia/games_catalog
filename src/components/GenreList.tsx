
import React, {useEffect} from 'react';

// import {fetchGenres} from "../store/action-creators/actionCreators";
import {useActions, useTypedSelector} from "../store/hooks/hooks";


const GenreList: React.FC = () => {
    const {loading , error , genres} = useTypedSelector (state => state)
    const {fetchGenres} = useActions()
    useEffect(()=>{
        fetchGenres()
    },[])


    if(loading) {
        return <h2>Loading</h2>
    }
    if(error) {
        return <h2>{error}</h2>
    }

    return (
        <div>
            {genres.map((item) =>
                (<p key={item.id}>{item.name}</p>))

            }

        </div>

    );
}

export default GenreList;

export interface InitialStoreTypesInterface {
    genres: genreInterface[],
    loading: boolean,
    error: string | null,
}
export enum ActionsTypesEnum {
    CHANGE_LOADER_VALUE = "CHANGE_LOADER_VALUE",
    GET_GENRES = "GET_GENRES",
    GET_ERROR = "GET_ERROR",
}
interface ChangeLoaderValueActionTypesInterface {
    type : ActionsTypesEnum.CHANGE_LOADER_VALUE;
    payload : boolean;
}
interface GetGenresActionTypesInterface {
    type : ActionsTypesEnum.GET_GENRES;
    payload : genreInterface[];
}
interface GetErrorActionTypesInterface {
    type : ActionsTypesEnum.GET_ERROR;
    payload : string | null;
}
interface genreInterface{
    games: [],
    games_count: number,
    id: number,
    image_background: string,
    name: string,
    slug: string,

}

export type AllActionTypes =ChangeLoaderValueActionTypesInterface | GetGenresActionTypesInterface | GetErrorActionTypesInterface
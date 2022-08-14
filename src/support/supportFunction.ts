


//api function   param-genre/games  paramGame- genre=action |none
export const createUrl = (param : string, paramGame : string | null = null)  : string =>{
    return  `https://api.rawg.io/api/${param}?key=3719d7855af54634ad3aa19763652ea2&${paramGame}`
}
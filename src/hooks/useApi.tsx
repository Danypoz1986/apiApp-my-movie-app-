export enum SearchType{
    all = '',
    movie = 'movie',
    series = 'series',
    episode = 'episode',
}

export interface searchResult {
    Title: string
    Year: string
    Poster: string
    imdbID: string
    Type: string
}

export interface searchError {
    Response: string
    Error: string
}

export interface DetailsResult {
    Genre: string
    Title: string
    Year: string
    Poster: string
    imdbRating: string
    Director: string
    Actors: string
    Website: string
    Awards: string
    Plot: string
}

export const useApi = () => {
    let url = 'https://www.omdbapi.com'
    let apikey = '6d6d09e7'

    const searchData = async (title: string, type: SearchType): Promise<searchResult[] | searchError> => {
        const result = await fetch(
             `${url}?s=${encodeURI(title)}&type=${type}&apikey=${apikey}`            
        )

        return result.json()
    }

    const getDetails = async (id: string): Promise<DetailsResult> => {
        const result = await fetch(`${url}?i=${id}&plot=full&apikey=${apikey}`)
        return result.json()
    }

    return {
        searchData,
        getDetails,
    }
}

export default useApi
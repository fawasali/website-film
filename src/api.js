import axios from "axios";

const baseurl=process.env.REACT_APP_BASEURL
const apikey=process.env.REACT_APP_APIKEY


export const getMovieList = async() => {
    const movie = await axios.get(
        `${baseurl}/movie/popular?page=1&api_key=${apikey}`
        )
        // console.log({movieList : movie})
    return movie.data.results
}

export const getSearch = async(q) => {
    const search = await axios.get(`${baseurl}/search/movie?query=${q}&page=1&api_key=${apikey}`)
    return search.data
    
}
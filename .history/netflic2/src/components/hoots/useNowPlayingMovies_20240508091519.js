import axios from "axios"
const nowPlayingMovies = async()=>{
    try{
      const res = await axios.get(Now_Playing_Movie, options)
      // console.log(res)
      dispatch(getNowPlayingMovies(res.data.results))

    }
    catch(error){

    }
  }
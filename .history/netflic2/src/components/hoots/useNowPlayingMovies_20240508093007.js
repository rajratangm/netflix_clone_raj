import axios from "axios"
import { useDispatch } from "react-redux"
import { getNowPlayingMovies } from "../../redux/movieSlice"
import { Now_Playing_Movie, options } from "../../utils/constants"
import 
const dispatch = useDispatch()
const useNowPlayingMovies = async()=>{
    try{
      const res = await axios.get(Now_Playing_Movie, options)
      // console.log(res)
      dispatch(getNowPlayingMovies(res.data.results))

    }
    catch(error){

    }
  }

  export default useNowPlayingMovies
import React, { useEffect } from 'react'
import Banner from '../component/Banner'
import Card from '../component/Card'
import axios from 'axios';

const API_KEY = process.env.REACT_APP_API_KEY;
const Home = () => {
  const popular = async ()=>{
      const popularApi = axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`);
      const topRatedApi = axios.get(`https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`);
      const upComingApi = axios.get(`https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`);

      let [popularMovies,topRatedMovies,upComingMovies] = await Promise.all([popularApi,topRatedApi,upComingApi])
      console.log("popularMovies",popularMovies);
      console.log("topRatedMovies",topRatedMovies);
      console.log("upComingMovies",upComingMovies);
  }
  useEffect(()=>{
      popular();
  },[])

  return (
    <div>
      <Banner/>
      <Card movies={popularMovies}></Card>
      <Card movies={topRatedMovies}></Card>
      <Card movies={upComingMovies}></Card>
    </div>
    
  )
}

export default Home
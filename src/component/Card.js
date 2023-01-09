import React, { useEffect, useState } from 'react';
import axios from 'axios';

const API_KEY = process.env.REACT_APP_API_KEY;
const Card = () => {
    const [popularData,setPopularData] = useState([]);
    const popular = ()=>{
        axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`)
        .then((response)=>{
            setPopularData(response.data.results)
        })
    }
    useEffect(()=>{
        popular();
    },[])
    
    return (
        <>
            {
                popularData && popularData.map((item,i)=>{
                    return(
                    <div key={i}>{item.original_title}</div>
                    )
                })
            }
            
        </>
    );
}

export default Card;
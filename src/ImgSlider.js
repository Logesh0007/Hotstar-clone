import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import axios from './axios'
import requests from './requests';

function ImgSlider() {
    const [movie, setMovie] = useState([]);
    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(requests.fetchHotstarOriginals)
            setMovie(request.data.results[Math.floor(Math.random() * request.data.results.length)]);
        }
        fetchData()
    }, [])

    return (
        <Carousel className='banner' style={movie?.backdrop_path && { objectFit: 'cover', height: '52vh', backgroundSize: 'cover', backgroundImage: `url('http://image.tmdb.org/t/p/original/${movie?.backdrop_path}')`, backgroundPosition: 'center center' }}>
        </Carousel>
    )
}

export default ImgSlider

const Carousel = styled.div`
    margin-top: 15px;

    ul li button {
        &:before {
            font-size: 10px;
            color: rgb(150, 158, 171);
        }
    }

    li.slick-active button::before {
        color: white;
    }

    .slick-list {
        overflow: visible;
    }

    button {
        z-index: 1;
    }
`
import React from 'react'
import styled from 'styled-components'

function Viewers() {
    function find(e) {
        e.target.currentTime = 0;
    }
    return (
        <Container>
            <Wrap onMouseEnter={find}>
                <img src='./images/viewers-disney.png' />
                <video autoPlay muted preload='auto' loop playsInline>
                    <source src="/videos/disney.mp4" type="video/mp4" />
                </video>
            </Wrap>
            <Wrap onMouseEnter={find}>
                <img src='./images/viewers-pixar.png' />
                <video autoPlay muted preload='auto' loop playsInline>
                    <source src="/videos/pixar.mp4" type="video/mp4" />
                </video>
            </Wrap>
            <Wrap onMouseEnter={find}>
                <img src='./images/viewers-marvel.png' />
                <video autoPlay muted preload='auto' loop playsInline>
                    <source src="/videos/marvel.mp4" type="video/mp4" />
                </video>
            </Wrap>
            <Wrap onMouseEnter={find}>
                <img src='./images/viewers-starwars.png' />
                <video autoPlay muted preload='auto' loop playsInline>
                    <source src="/videos/star-wars.mp4" type="video/mp4" />
                </video>
            </Wrap>
            <Wrap onMouseEnter={find}>
                <img src='./images/viewers-national.png' />
                <video autoPlay muted preload='auto' loop playsInline>
                    <source src="/videos/national-geographic.mp4" type="video/mp4" />
                </video>
            </Wrap>
        </Container>
    )
}

export default Viewers

const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(5, minmax(0, 1fr));
    grid-gap: 25px;
    padding: 30px 0 26px;
`

const Wrap = styled.div`
    background-color: #24304b;
    border-radius: 7px;
    transition: all 200ms;
    cursor: pointer;
    position: relative;

    &:hover {
        transform: scale(1.05);
        box-shadow: rgb(0 0 0 / 80%) 0 40px 58px -16px, rgb(0 0 0 /72%) 0 30px 22px -10px;
        border-color: rgba(249, 249, 249, 0.8);
    }

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    video {
        position: absolute;
        top: 0;
        left: 0;
        opacity: 0;
        width: 100%;
        height: 100%;
        border-radius: 7px;
        object-fit: cover;
        transition: opacity 180ms ease-in;
        display: inline-block;
        
        &:hover {
            opacity: 1;
        }
    }
`
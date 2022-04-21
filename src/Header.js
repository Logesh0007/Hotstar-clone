import React from 'react'
import styled from 'styled-components';

function Header() {
    return (
        <Nav>
            <Logo src='./images/logo.svg' alt='Logo' />
            <NavMenu>
                <a><img src='./images/home-icon.svg' alt='homeIcon' /><span>home</span></a>
                <a><img src='./images/search-icon.svg' alt='searchIcon' /><span>search</span></a>
                <a><img src='./images/watchlist-icon.svg' alt='watchlistIcon' /><span>watchlist</span></a>
                <a><img src='./images/original-icon.svg' alt='originalIcon' /><span>originals</span></a>
                <a><img src='./images/movie-icon.svg' alt='movieIcon' /><span>movies</span></a>
                <a><img src='./images/series-icon.svg' alt='seriesIcon' /><span>series</span></a>
            </NavMenu>

            <UserImg src='./images/user.png' alt='profile' />
        </Nav>
    )
}

export default Header

const Nav = styled.div`
    height: 70px;
    background-color: #131a28;
    color: white;
    display: flex;
    align-items: center;
    padding: 0 36px;
    overflow-x: hidden;
`

const Logo = styled.img`
    width: 80px;
`

const NavMenu = styled.div`
    display: flex;
    flex: 1;
    margin-left: 20px
    align-items: center;

    a {
        display: flex;
        align-items: center;
        padding: 0 12px;
        cursor: pointer;

        img {
            height: 20px;
        }

        span {
            font-size: 13px;
            letter-spacing: 1.42px;
            position: relative;

            &:after {
                content: '';
                height: 2px;
                background-color: white;
                position: absolute;
                left: 0;
                right: 0;
                bottom: -6px;
                opacity: 0;
                transform: scaleX(0);
                transition: all 230ms ease-in;
            }
        }

        &:hover {
            span:after {
                transform: scaleX(1);
                opacity: 1;
            }
        }
    }
    span {
        text-transform: uppercase;
    }
`

const UserImg = styled.img`
    width: 35px;
    height: 35px;
    filter: invert(1);
    opacity: 0.4;
    border-radius: 50%;
`
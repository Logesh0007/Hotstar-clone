import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import './Login.css'

function Login() {
    return (
        <Container>
            <Content>
                <ContLogo1 src='/images/cta-logo-one.svg' />
                <Link id='field' to='/home'><SignUp>get all there</SignUp></Link>
                <Desc>Get Premier Access to Raya and the Last Dragon for an additional fee with a Disney+ subscription. As of 03/26/21, the price of Disney+ and The Disney Bundle will increase by $1.
                </Desc>
                <ContLogo2 src='/images/cta-logo-two.png'></ContLogo2>
            </Content>
        </Container>
    )
}

export default Login

const Container = styled.div`
    position: relative;
    height: calc(100vh - 70px);
    display: flex;
    justify-content: center;
    align-items: center;

    &:before {
        position: absolute;
        content: '';
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background: url('/images/login-background.jpg') top / cover no-repeat;
        z-index: -1;
        opacity: 0.7;
    }
`

const Content = styled.div`
    max-width: 650px;
    width: 70%;
    padding: 80px 40px;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const ContLogo1 = styled.img`

`

const SignUp = styled.a`
    
`

const Desc = styled.p`
    font-size: 11px;
    letter-spacing: 1.5px;
    text-align: center;
    line-height: 1.5;
`

const ContLogo2 = styled.img`
    width: 90%;
`
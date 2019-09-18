import React from 'react';
import styled from 'styled-components';
import Girl from '../img/svg/girl.webp';
import dots from '../img/svg/dots.svg';
import longsticks from '../img/svg/longsticks.svg';
import './Illustration.css';





const Container = styled.div`
    width: 1900px;
    height: 680px;
    padding: 50px 0;
    margin: 0 0 80px;
    position: relative;
    text-align: center;
    background: #f0f3ff;
    z-index: -5;

`

const Box = styled.div`
    width: 1140px;
    height: 680px;
    text-align: left;
    padding: 0 10px;
    margin: 0 315px 0;
    position: relative;
`

const Image0 = styled.div`
img{
    position: absolute;
    top: 80px;
    left: 300px;

}
`

const Image1 = styled.div`
    img{
        position: absolute;
        top: 80px;
        left: 300px;
    }
`

const Image2 = styled.div`
    img{
        position: absolute;
        bottom: -32px;
        left: 110px;
    }
`

class Illustration extends React.Component{
    render(){
        return(
            <Container >
                <Box >
                <Image0 className="pink"><img  src={Girl} alt="girl"/></Image0>
                <Image1><img src={dots} alt="dots"/></Image1>
                <Image2 className="green"><img src={longsticks} alt="dots"/></Image2>
                </Box>
            </Container>
        );
    }

}

export default Illustration;
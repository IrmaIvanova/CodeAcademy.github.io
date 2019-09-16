import React from 'react';
import styled from 'styled-components';
import './YourPerspective.css';
import SubTitle from './SubTitle.js';
import Logos from '../img/logos.webp'

const Container = styled.div`
    width: 1887px;
    height: 1066px;
    margin: 0 0 80px;
    position: relative;
    text-align: center;
    font-family: 'Nunito Sans', sans-serif;

`

const Box = styled.div`
    width: 1200px;
    height: 444px;
    text-align: center;
    padding: 50px 10px 35px;
    margin: 50px 344px 0;
    position:absolute;
    color: #767676;
`

const Image = styled.div`
    margin: 35px 0 100px;
`

class YourPerspective extends React.Component{
    render(){
        return(
            <Container className="Background">
                <Box>
                    <SubTitle text="OUR LEARNERS WORK AT"/>
                    <Image><img src={Logos} alt="logos"/></Image>
                </Box>
            </Container>
        );
    }

}

export default YourPerspective;
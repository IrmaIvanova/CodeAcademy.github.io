import React from 'react';
import styled from 'styled-components';
import Paragraf from './Paragraf.js'
import TitleH2 from './TitleH2.js';
import Button from './ButtonYellow.js';
import Office from '../img/office-image-small.png';
import Sticks from '../img/bluewhitesticks.svg';
import Coner from '../img/blueconer.svg';


const Container = styled.div`
    width: 1900px;
    height: 417px;
    padding: 64px 0px;
    position: relative;
    background-color: #141e3b;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: -5;
`

const Box = styled.div`
    width: 528px;
    height: 289px;
    margin: 0;
    display: flex;
    flex-direction: column;
    text-align: left;

    h2{
        font-size: 34px;
        color: #fff;
    }

    {
        color: #fff;

    }

`
const Image = styled.div`
    margin-top: 70px;
    position: relative;

    .Sticks{
        position: absolute;
        top: 0px;
        left: -45px;
    }
    .Coner{
        position: absolute;
        bottom: -30px;
        right: -30px;
        z-index: -1;
    }
`

class Looking extends React.Component{
    render(){
        return(
            <Container >


                <Box >
                    <TitleH2 text="Looking for a team license?"/>
                    <Paragraf text="All the benefits of learning on Codecademy Pro, plus dedicated support, flexible plans, and progress reporting to help teams upskill and do their greatest work. Get Codecademy for your team of 5 or more members."/>
                    <Button text="Learn More"/>
                </Box>
                <Image><img src={Office} alt="office"/>
                    <img className="Sticks" src={Sticks} alt="sticks"/>
                    <img className="Coner" src={Coner} alt="Coner"/>
                </Image>
            </Container>
        );
    }

}

export default Looking;
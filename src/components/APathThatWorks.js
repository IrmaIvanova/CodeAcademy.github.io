import React from 'react';
import styled from 'styled-components';
import Paragraf from './Paragraf.js';
import City  from '../img/svg/backgroundcity.webp';
import TitleH2 from './TitleH2.js'


const Container = styled.div`
    width: 1887px;
    height: 502px;
    padding: 0 96px;
    margin: 0;
    position: relative;
    text-align: center;
`

const Box = styled.div`
    width: 1140px;
    height: 212px;
    text-align: left;
    padding: 10px 0 210px;
    margin: 0 300px 0;
    position:absolute;
    color: #333;
    letter-spacing: 0.01px;
    line-height: 3em;
    ;
    p{
        font-size: 17px;
        width: 571px;
        line-height: 1.6em;
    }
    h2{
        margin: 0;
        font-weight: 800;
        letter-spacing: 0.01em;
    }

`
const Image = styled.div`
    img{
        position: absolute;
        bottom: 0px;
        left: 0px;
    }
`

class APathThatWorks extends React.Component{
    render(){
        return(
            <Container >
                <Box >
                    <TitleH2 text="A Path That Works For You"/>
                    <Paragraf text="You don’t need to know all of a programming language to start using it. Paths show you where to start on day one and guide you through languages, projects, and practice to get you to your goal. You choose what you want (to learn a skill, build a thing, get qualified for a promotion) and we’ll get you there."/>
                
                </Box>
                <Image><img src={City} alt="city"/></Image>
            </Container>
        );
    }

}

export default APathThatWorks;
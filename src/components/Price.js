import React from 'react';
import styled from 'styled-components';
import Paragraf from './Paragraf.js';
import TitleH2 from './TitleH2.js'


const Container = styled.div`
    width: 1900px;
    height: 255px;
    padding: 97px 0;
    margin: -113px 0 0;
    position: relative;
    text-align: center;
    background-color: #6400E4;
`

const Box = styled.div`
    width: 1200px;
    height: 138px;
    text-align: center;
    padding: 0 10px;
    margin: 0 351.5px;
    position:absolute;
    color: #fff;
    letter-spacing: 0.01px;
    line-height: 3em;
    ;
    p{
        width: 580px;
        margin: 30px auto 0;
        height: 84px;
    }
`
class Price extends React.Component{
    render(){
        return(
            <Container >
                <Box >
                    <TitleH2 text="Coding is for everyone, and so are we"/>
                    <Paragraf text="College is expensive. So are bootcamps. Not everyone can afford to quit their job to learn full-time. We’re here to make coding more flexible and accessible so everyone has a chance to learn."/>
                
                </Box>

            </Container>
        );
    }

}

export default Price;
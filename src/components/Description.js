import React from 'react';
import styled from 'styled-components';
import TitleH2 from './TitleH2.js';
import Dots from '../img/pinkdots.svg';
import Back2 from '../img/back2.webp';
import Button from './Button.js';
import SubTitle from './SubTitle.js';

const Container = styled.div`
    width: 1200px;
    height: 443px;
    margin: 0 313px 80px;
    position: relative;
    text-align: center;
`
const Image = styled.div`
`
const Box = styled.div`
    width: 824px;
    height: 444px;
    text-align: left;
    margin: 0 auto;
`

const Back = styled.div`
    text-align: right;
    img{
    width: 300px;
    height: 315px;
    padding-left: 60px;
    }
`

const Content = styled.div`
    display: flex;
    justify-content: space-between;

`
const ContentBox = styled.div`
    display: flex;
    flex-direction: column;
`
const Paragraf = styled.p`
    font-size: 18px;
    line-height: 1.5em;
    font-family: 'Nunito Sans', sans-serif;
    width: 490px;
    height: 100px;
    margin-top: 40px;

`
const Bold = styled.b`
    
`

class Description extends React.Component{
  render(){
    return (
    <Container>
      <Box>
        <Image><img src={Dots} alt="dots"/></Image>
        <TitleH2 text="What is Codecademy Pro?"/>
        <Content>
            <ContentBox>
                <Paragraf>Access our premium service: <Bold>quizzes, portfolio-building projects, and customized paths</Bold> 
                —your blueprint for learning new skills. Learning doesn’t have to be painful. 
                Take care of yourself with features designed to make it easier.</Paragraf>
                <Button text='Upgrade Now'/>
                <SubTitle text='We’ve helped more than 45 million people.'/>
            </ContentBox>
            <Back><img src={Back2} alt="dots"/></Back>
        </Content>
      </Box>
    </Container>
    );
  }
}
export default Description;
import React from 'react';
import styled from 'styled-components';
import TitleH2 from './TitleH2.js';
import BackPhone from '../img/backphons.png';
import Button from './Button.js';



const Container = styled.div`
    width: 1887px;
    height: 518px;
    margin: 0 0 32px;
    position: relative;
    text-align: left;
    background: #f0f3ff;
`

const Box = styled.div`
    width: 1140px;
    height: 517px;
    display: flex;
    text-align: left;

    margin: 0 480px 0;
    position:absolute;

`
const Image = styled.div`
    text-align: left;
    margin-left: 0 -10px 0 10px;
    img{
        width: 538px;
        height: 518px;
    }
`
const Paragraf = styled.p`
    font-size: 17px;
    line-height: 1.5em;
    font-family: 'Nunito Sans', sans-serif;
    font-weight: 600;
`;
const Content = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 390px;

`

class WhyItWorks extends React.Component{
    render(){
        return(
            <Container>
                <Box>
                <Content>
                    <TitleH2 text="Practice That Fits Your Lifestyle"/>
                    <Paragraf>Learn on the web. Practice on the go. Pro lets you unlock
                     more courses and unlimited practice and reviews in the Codecademy GO app. 
                     Quickly refresh your skills with new exercises and articles each day..
                    </Paragraf>
                    <Button text="Upgrade Now"/>
                </Content>
                    <Image><img src={BackPhone} alt=""/></Image>
                </Box>
            </Container>
        );
    }

}

export default WhyItWorks;
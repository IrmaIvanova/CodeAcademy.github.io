import React from 'react';
import styled from 'styled-components';
import Paragraf from './Paragraf.js';
import TitleH2 from './TitleH2.js';
import Member1 from '../img/member1.jpg';
import Member2 from '../img/member2.jpg';
import SubTitle from './SubTitle.js';
import './MembersSay.css';


const Container = styled.div`
    max-width: 1900px;
    height: 881px;
    padding: 60px 0 80px;
    position: relative;
    text-align: center;

`

const Box = styled.div`
    width: 1200px;
    height: bopx;
    text-align: center;
    padding: 0 10px;
    margin: 0 351px;
    letter-spacing: 0.01px;
    display: flex;
    flex-direction: column;
    align-itemsL space-between;

    ;
    h2{
        letter-spacing: 0.01px;
        line-height: 1em;
        width:557px;
        margin: 0 auto;
    }
`


const Content = styled.div`
    width: 1000px;
    height: 240px;

    padding: 0 10px;
    margin: 115px 0 60px 0;
    display: flex;
    flex-direction: space-between;
    
    p{
        font-size: 21px;
        text-align: left;
        width: 493px;
    }

`


const Image = styled.div`
img{

    width: 240px;
    height:240px;
    top: 230px;
    right: 500px;
    position: absolute;

}
`

const Image1 = styled.div`
    img{
        width: 240px;
        height:240px;
        bottom: 130px;
        left: 450px;
        position: absolute;
    }
`
const PS = styled.p`
    width: 493px;
    text-align: left;

`
const Text = styled.div`

    width: 493px;
    display: flex;
    flex-direction: column;
    margin: 0 150px;
    line-height: 1.5em;

    p{
        font-size: 21px;
        margin:0;
    }
    h3{
        font-size: 21px;
        text-align: left;
    }
`

const Text2 = styled.div`

    width: 493px;
    display: flex;
    flex-direction: column;
    margin-left:450px;
    line-height: 1.5em;

    p{
        font-size: 21px;
        margin:0;
    }
    h3{
        font-size: 21px;
        text-align: left;
    }
`
class MembersSay extends React.Component{
    render(){
        return(
            <Container className="back" >
                <Box className="circle">
                    <TitleH2 text="If you know how to read, you can learn to code."/>
                    <Content>
                        <Text>
                            <Paragraf text="For the longest time I didn't consider myself a programmer and I always put coding on a pedestal. I was like, you need to be like super smart to know programming..."/>
                            <SubTitle text="Patrick Stapleton"/>
                            <PS>Co-Founder of Y Combinator-backed Tipe.io</PS>
                        </Text>
                        <Image className="member1"><img src={Member1} alt=""/></Image>
                    </Content>
                    <Content>

                        <Text2>
                            <Paragraf text="I wanted to learn enough HTML and CSS to make custom edits on Squarespace sites for work...I fell in love and haven't gone a day without coding since."/>
                            <SubTitle text="Jackson Handry"/>
                            <PS>Founder of Webside.io</PS>
                        </Text2>
                        <Image1 className="member2"><img src={Member2} alt=""/></Image1>
                    </Content>
                    </Box>
                    
            </Container>
        );
    }

}

export default MembersSay;
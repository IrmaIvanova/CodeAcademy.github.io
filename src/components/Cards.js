import React from 'react';
import styled from 'styled-components';
import Button from './Button.js';
import './Cards.css';

const Card = styled.div`
    width: 353px;
    height: 300px;
    padding: 80px 24px 24px;
    margin:40px 20px 0 0;
    box-shadow: 0px 0px 9px #00000061;
    text-align: center;
    z-index: 0;

`
const Duration = styled.p`
    font-size: 17px;
    color: #6C767D;
`

const PriceForMo = styled.h2`
    justify-content: center;
    height: 54px;
    color: #000;
    font-size: 36px;
    display: flex;
    align-items: center;
    font-weight: 400;
    margin-bottom: 0;
`



const Dollar = styled.h2`
    font-size: 36px;
    font-weight: 700;
    color: #000;
    

`

const NotPrice = styled.p `
    font-size: 19px;
    text-decoration: line-through;
    color: #000;
    height: 26px;
    margin-top: 0;

`


class Cards extends React.Component{
    render(){
        return(
            <Card className="hover ">

                <Duration>{this.props.duration}</Duration>
                <PriceForMo><Dollar>{this.props.price}</Dollar>/mo</PriceForMo>
                <NotPrice>{this.props.text}</NotPrice>
                <Button text="Upgrade Now"></Button>
            </Card>
 

        );
    }

}

export default Cards;
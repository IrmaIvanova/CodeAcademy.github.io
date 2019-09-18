import React from 'react';
import styled from 'styled-components';
import Cards from './Cards.js';
import TitleH2 from './TitleH2.js';
import './PricePlan.css';

const Container = styled.div`
    width: 1140px;
    height: 570px;
    padding: 64px 16px;
    margin: 0 381px;
    position: relative;
    text-align: center;
    h2{
        color: #000;
    }
`

const Box = styled.div`
    width: 1200px;

    display: flex;
`
const Vip = styled.span`

`

class Price extends React.Component{
    render(){
        return(
            <Container >
                    <TitleH2 text="Choose Your Plan"/>
                    <Vip className="Recomended"></Vip>
                <Box >

                <Cards  duration="12 Month Subscription" price="$15.99" text="19.99/mo"></Cards>
                    <Cards duration="12 Month Subscription" price="$15.99" text="19.99/mo"/>
                    <Cards duration="12 Month Subscription" price="$15.99" />
                </Box>

            </Container>
        );
    }

}

export default Price;
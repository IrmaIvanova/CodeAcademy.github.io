import React from 'react';
import styled from 'styled-components';
import SubTitle from './SubTitle.js';

import Icon1 from '../img/svg/iconlock.svg';
import Icon2 from '../img/svg/iconschem.svg';
import Icon3 from '../img/svg/icontrain.svg';
import Icon4 from '../img/svg/icontalk.svg';



const Paragraf = styled.p`
    font-size: 20px;
    margin: 0;
    line-height: 1.4em;
    font-family: 'Nunito Sans', sans-serif;
    display: flex;
    width:100%;

`;

const HeaderRight = styled.div`
  width: 402px;

   p{
        font-size: 16px;
        margin-right: 0;
    }
    h3{
        margin: 0;
        margin-bottom: 10px;
    }
`;

const Icon = styled.div`
    position: relative;
    right: 60px;
    top: 45px;
    img{
        width: 38px;
        height: 32px;
    }
`;


function HeaderRightColumn() {
  return (




            <HeaderRight>
                <Icon><img src={Icon1} alt='Icon1'/></Icon>
                <SubTitle text='Members-Only Content'/>
                    <Paragraf>
                        Connect with other Pro members to collaborate, share resources, and more. </Paragraf>
                <Icon><img src={Icon2} alt='Icon1'/></Icon>
                <SubTitle text='A Step-by-Step Roadmap'/>
                    <Paragraf>
                        Connect with other Pro members to collaborate, share resources, and more. </Paragraf>
                <Icon><img src={Icon3} alt='Icon1'/></Icon>
                <SubTitle text='Real-World Projects'/>
                    <Paragraf>
                        Connect with other Pro members to collaborate, share resources, and more. </Paragraf>
                <Icon><img src={Icon4} alt='Icon1'/></Icon>
                <SubTitle text='Community Support'/>
                    <Paragraf>
                        Connect with other Pro members to collaborate, share resources, and more. </Paragraf>
            </HeaderRight>


  );
}
export default HeaderRightColumn;
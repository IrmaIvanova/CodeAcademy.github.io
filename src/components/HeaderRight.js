import React from 'react';
import styled from 'styled-components';



const SubTitle = styled.h3`
    font-size: 20px;
    margin-bottom: 0;

`

const Paragraf = styled.p`
    font-size: 20px;
    margin: 0 0 32px 0;
    line-height: 1.9em;
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
`;



function HeaderRightColumn() {
  return (




            <HeaderRight>
                <SubTitle>Members-Only Content</SubTitle>
                <Paragraf>
                Connect with other Pro members to collaborate, share resources, and more. </Paragraf>
                <SubTitle>A Step-by-Step Roadmap</SubTitle>
                <Paragraf>
                Connect with other Pro members to collaborate, share resources, and more. </Paragraf>
                <SubTitle>Real-World Projects</SubTitle>
                <Paragraf>
                Connect with other Pro members to collaborate, share resources, and more. </Paragraf>
                <SubTitle>Community Support</SubTitle>
                <Paragraf>
                Connect with other Pro members to collaborate, share resources, and more. </Paragraf>
            </HeaderRight>


  );
}
export default HeaderRightColumn;
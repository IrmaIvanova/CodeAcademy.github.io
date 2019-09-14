import React from 'react';
import styled from 'styled-components';
import Icon1 from '../img/svg/iconlock.svg';
import Icon2 from '../img/svg/iconschem.svg';
import Icon3 from '../img/svg/icontrain.svg';
import Icon4 from '../img/svg/icontalk.svg';

const Icon = styled.img`
    display:flex;
    justify-content: space-between;
`;



class HeaderIcons extends React.Component {
  render(){
    return (
      <div>
        <Icon><img src={Icon1} alt='Icon1'/></Icon>
        <Icon><img src={Icon2} alt='Icon1'/></Icon>
        <Icon><img src={Icon3} alt='Icon1'/></Icon>
        <Icon><img src={Icon4} alt='Icon1'/></Icon>
      </div>
    );
  }
}
export default HeaderIcons;
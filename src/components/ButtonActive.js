import React from 'react';
import styled from 'styled-components';
import './Button.css'
const Btn = styled.button`
  background-color: #fff;
  border: 1px solid #6400e4;
  color: #6400e4;  
  padding: 6px 16px;
  margin:18px 0  47px 0;
  font-weight: 700;
  font-size: 18px;
  width: 332px;
  height: 56px;
  border-radius: 50px;
  font-family: 'Nunito Sans', sans-serif;
`;

class Button extends React.Component{
    render(){
        return (  
            <Btn className="alwaysActive">{this.props.text}</Btn>
        
        );
    }
  }
  export default Button;



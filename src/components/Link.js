import React from 'react';
import styled from 'styled-components';



const LinkStile = styled.a`
    text-decoration: none;
    color: #333;
    padding: 6px 16px;
`;

class Link extends React.Component{
    render(){
        return(
            <div>
            <LinkStile href="#">
            {this.props.link}
            </LinkStile>
            </div>
        );
    }
}

export default Link;
import React from 'react';
import styled from 'styled-components';

const H3 = styled.h3`
    font-size: 20px;
    margin-bottom: 0;
    font-family: 'Nunito Sans', sans-serif;
`

class SubTitles extends React.Component{
    render(){
        return(
            <div><H3>{this.props.text}</H3></div>
        );
    }
}

export default SubTitles;
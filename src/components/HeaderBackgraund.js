import React from 'react';
import styled from 'styled-components';

import Mamber1 from '../img/man1.jpg';
import Mamber3 from '../img/man2.webp';
import Mamber2 from '../img/woman.webp';
import Mamber4 from '../img/woman2.jpg';
import './HeaderBackground.css';

const Illustration = styled.div`
    position:absolute;
    height: 536px;
    width: 1900px;

`
const ImgBox = styled.div`
    max-width: 1170px;
    margin: 0 368px;
    position: relative;
`

const Photo1 = styled.div`
        img{
        width: 300px;
        height: 372px;
        position: relative;
        left: 17px;
    }
`
const Photo2 = styled.div`
    img{
        width: 400px;
        height: 320px;
        position: absolute;
        left: 152px;
        top: 144px;
    }

`
const Photo3 = styled.div`


    img{
        width: 465px;
        height: 299px;
        position: absolute;
        left: 614px;
        top: 215px;
    }
`
const Photo4 = styled.div`


    img{
        width: 300px;
        height:300px;
        position: absolute;
        right: 0px;
        top: 30px;
    }
`

class HeaderBackground extends React.Component{
    render(){
        return(
            <Illustration className='illistration'>
                <ImgBox>
                    <Photo1 className="img1"><img src={Mamber1} alt='man'/></Photo1>
                    <Photo2 className='img2'><img src={Mamber2} alt='man'/></Photo2>
                    <Photo3 className='img3'><img src={Mamber3} alt='man'/></Photo3>
                    <Photo4 className='img4'><img src={Mamber4} alt='man'/></Photo4>
                </ImgBox>
            </Illustration>

        );
    }
}

export default HeaderBackground;
import React from 'react';
import {FlexWrapper} from "../../../components/FlexWrapper";
import mainPhoto from "../../../assets/images/image-1.webp"
import styled from "styled-components";
import head from "../../../assets/images/mainPhotoHead.webp"
import {Icon} from "../../../components/Icon/Icon";
import {Circle} from "./Circle";

export const Main = () => {
    return (
        <section>
            <StyledMain justify="space-around">
                <FlexWrapper direction="column" width={"447px"} height={"337"}>
                    <h2>HELLO</h2>
                    <span>I'M MYKYTA<b/> KUTUZOV</span>
                    <p>I've been doing web design, front-end and back-end development for a year now.
                        Do you need a website design, site layout, or maybe a turnkey website?
                        Then contact me
                    </p>
                    <button type={"button"}>CONTACT ME</button>
                </FlexWrapper>

                <PhotoContainer>

                    <StyledIcon iconId={"ellipse1"} width={"869"} height={"880"} viewBox={"0 0 879 880"}/>
                    <Photo src={mainPhoto} alt="mainPhoto"/>

                    <MainHead src={head} alt="head"/>
                    {/*<StyledCircle/>*/}

                    <Circle>
                        <p>UI</p>
                    </Circle>

                    <Circle>
                        <p>{"</"}</p>
                    </Circle>

                    <Circle>
                        <p>UX</p>
                    </Circle>

                    <Circle>
                        <p>PS</p>
                    </Circle>
                </PhotoContainer>
            </StyledMain>
        </section>
    );
};


const StyledMain = styled(FlexWrapper)`
    min-height: 100vh;
`

const Photo = styled.img`
    width: 456px;
    height: 633px;
    object-fit: cover;
    position: absolute;
    top: 59px;
    left: 73px;
`

const MainHead = styled.img`
    width: 357px;
    height: 286px;
    position: absolute;
    top: 40px;
    left: 120px;
`

const PhotoContainer = styled.div`
    width: 632px;
    height: 674px;
    border: thin solid;
    position: relative;

`

const StyledIcon = styled(Icon)`
    position: absolute;
    top: 50px;
    left: 57px;
`
// const StyledCircle = styled.div`
//     width: 575px;
//     height: 575px;
//     border-radius: 100%;
//     stroke-width: 67px;
//     stroke: #00c4f0;
//     box-shadow: 0 0 152px 0 rgba(0, 196, 240, 0.42);
// `
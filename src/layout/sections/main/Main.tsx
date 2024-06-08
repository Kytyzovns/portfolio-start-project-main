import React from 'react';
import {FlexWrapper} from "../../../components/FlexWrapper";
import mainPhoto from "../../../assets/images/mainPhoto.webp"
import styled from "styled-components";

import {Icon} from "../../../components/Icon/Icon";
import {Circle} from "./Circle";
import {Container} from "../../../components/Container";
import {theme} from "../../../styles/Theme";
import {StyledIcon} from "../../../components/Icon/StyledIcon";

export const Main = () => {
    return (
        <StyledMain>
            <Container>
                <FlexWrapper justify={"space-between"} align={"center"}>
                    <FlexWrapper gap={"27px"} direction={"column"} justify={"flex-start"} height={"content"}>
                        <Greeting>HELLO</Greeting>
                        <Name>I'M MYKYTA</Name>
                        <Name>KUTUZOV</Name>
                        <Description>I've been doing web design, front-end and back-end development for a year now.
                            Do you need a website design, site layout, or maybe a turnkey website?
                            Then contact me
                        </Description>
                        <StyledBtn type={"button"}>CONTACT ME</StyledBtn>
                    </FlexWrapper>

                    <PhotoContainer>
                        <StyledCircle></StyledCircle>
                        <Photo src={mainPhoto} alt="mainPhoto"/>

                        <StyledCircle/>

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
                </FlexWrapper>
            </Container>
        </StyledMain>
    );
};

const StyledBtn = styled.button`
    font-family: Next-art, sans-serif;
    border-radius: 6px;
    width: 200px;
    height: 47px;
    box-shadow: 0 2px 13px 0 rgba(226, 158, 0, 0.48);
    background: linear-gradient(315deg, #e2a300 0%, #e29500 100%);
    font-weight: 900;
    font-size: 18px;
    color: ${theme.colors.buttonTextColor};
`
const Greeting = styled.h2`
    font-family: Next-art, sans-serif;
    font-weight: 600;
    font-size: 48px;
    color: ${theme.colors.primaryTextColor};
`

const Name = styled.h2`
    font-family: Next-art, sans-serif;
    font-weight: 700;
    font-size: 72px;
    color: ${theme.colors.primaryTextColor};
`

const Description = styled.p`
    max-width: 430px;
    font-weight: 300;
    font-size: 18px;
    font-family: Arodora, sans-serif;
    color: ${theme.colors.primaryTextColor};
`
const StyledMain = styled.section`
    display: flex;
    max-height: 670px;
    margin-top: 74px;
    overflow: hidden;
`

const Photo = styled.img`
    width: 465px;
    height: 675px;
    z-index: 99999;
`

const PhotoContainer = styled.div`
    position: relative;
    padding: 0;
    border: thin solid yellow;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
`

const StyledCircle = styled.div`
    border: solid 67px ${theme.colors.accent};
    left: -65px;
    bottom: 0;
    position: absolute;
    width: 575px;
    height: 575px;
    border-radius: 100%;
    box-shadow: 0 0 152px 0 rgba(0, 196, 240, 0.42);
`
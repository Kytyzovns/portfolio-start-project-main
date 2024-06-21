import React from 'react';
import {FlexWrapper} from "../../../components/FlexWrapper";
import mainPhoto from "../../../assets/images/mainPhoto.webp"
import styled from "styled-components";
import {Circle} from "./Circle";
import {Container} from "../../../components/Container";
import {theme} from "../../../styles/Theme";
import {StyledBtn} from "../../../components/StyledBtn";
import firstEllipse from "../../../assets/images/oldsvg/Ellipse 1.png";
import {font} from "../../../styles/Common";

export const Main = () => {
    return (
        <StyledMain>
            <Container>
                <FlexWrapper justify={"space-around"} align={"center"} wrap={"wrap"} gap={"120px"}>
                    <FlexWrapper gap={"27px"} direction={"column"} justify={"flex-start"} height={"content"}>
                        <Greeting>HELLO</Greeting>
                        <Name>I’m Gleb</Name>
                        <Name>Kostrubov</Name>
                        <Description>I've been doing web design, front-end and back-end development for a year now.
                            Do you need a website design, site layout, or maybe a turnkey website?
                            Then contact me
                        </Description>
                        <StyledBtn type={"button"}>CONTACT ME</StyledBtn>
                    </FlexWrapper>

                    <PhotoContainer>
                        <Photo src={mainPhoto} alt="mainPhoto"/>
                        <Circle top={"100px"} right={"22px"}>
                            <CircleText>UI</CircleText>
                        </Circle>

                        <Circle left={"-45px"} top={"130px"}>
                            <span>{"</"}</span>
                        </Circle>

                        <Circle left={"-120px"} top={"300px"}>
                            <span>UX</span>
                        </Circle>

                        <Circle left={"-90px"} bottom={"100px"}>
                            <span>PS</span>
                        </Circle>
                    </PhotoContainer>
                </FlexWrapper>
            </Container>
        </StyledMain>
    );
};

const CircleText = styled.span`
    height: fit-content;
`

const Greeting = styled.h2`
    ${font({fontFamily:"Next-art, sans-serif", fontWeight: 600, Fmin: 27, Fmax: 48})};
    color: ${theme.colors.primaryTextColor};
`

const Name = styled.h2`
    ${font({fontFamily:"Next-art, sans-serif", fontWeight: 700, Fmin: 50, Fmax: 72})};
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
    background: ${theme.colors.primaryBg};
    display: flex;
    padding-top: 74px;
    //overflow: hidden;
`

const Photo = styled.img`
    width: 465px;
    height: 675px;
    z-index: 99999;
    
    @media ${theme.media.tablet} {
        width: 254px;
        height: 362px;
    }
`

const PhotoContainer = styled.div`
    position: relative;
    padding: 0;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    
    &::before {
        content:"";
        background: url('${firstEllipse}') no-repeat center;
        background-size: contain;
        margin: 0;
       
        width: 880px;
        height: 880px;
        
        display: inline-block;
        
        position: absolute;
        z-index: 0;
        
        left: -220px;
        bottom: -152px;
        
        @media ${theme.media.tablet} {
            width: 514px;
            height: 514px;
        }
    }
`


import React from 'react';
import {FlexWrapper} from "../../../components/FlexWrapper";
import mainPhoto from "../../../assets/images/mainPhoto.webp"
import styled from "styled-components";
import {Circle} from "./Circle";
import {Container} from "../../../components/Container";
import {theme} from "../../../styles/Theme";
import {StyledEllipse} from "../../../components/StyledEllipse";
import {StyledBtn} from "../../../components/StyledBtn";
import {Icon} from "../../../components/Icon/Icon";
import firstEllipse from "../../../assets/images/oldsvg/Ellipse 1.png";

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
                        {/*<StyledEllipse borderWidth={"67px"} borderColor={"firstEllipseColor"} left={"-65px"}*/}
                        {/*               bottom={"0"} dims={"575px"}*/}
                        {/*               shadow={"0 0 152px 0 rgba(0, 196, 240, 0.42)"}></StyledEllipse>*/}
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
    background: ${theme.colors.primaryBg};
    display: flex;
    max-height: 670px;
    margin-top: 74px;
    //overflow: hidden;
`

const Photo = styled.img`
    width: 465px;
    height: 675px;
    z-index: 99999;
`

const PhotoContainer = styled.div`
    position: relative;
    padding: 0;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    
    &::before {
        content: url('${firstEllipse}');
        //background-image: url("../../../assets/images/oldsvg/Ellipse 1.png");
        //background-size: cover;
        //background-repeat: no-repeat;
        //background-position: center;
        
        width: fit-content;
        height: fit-content;
        
        display: inline-block;
        
        position: absolute;
        z-index: 2;
        
        left: 0;
        bottom: 0;
    }
`
const MainEllipse = styled.img`
    display: block;
    position: absolute;
    bottom: -150px;
    left: -215px;
    
`


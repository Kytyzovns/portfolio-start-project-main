import React from 'react';
import {FlexWrapper} from "../../../../components/FlexWrapper";
import styled from "styled-components";
import slideImage from "../../../../assets/images/portfolioImage.webp"
import {theme} from "../../../../styles/Theme";
import {StyledBtn} from "../../../../components/StyledBtn";

export const PortfolioSlide = () => {
    return (
        <SlideContainer align={"center"} justify={"space-around"}>
            <ImageContainer>
                <StyledBtn>View project</StyledBtn>
                <StyledSlideImage src={slideImage}/>
            </ImageContainer>
            <FlexWrapper direction={"column"} justify="center" align={"center"} width={"295px"} height={"435px"} gap={"25px"}>
                <StyledSlideTitle>Landing Ice-cream</StyledSlideTitle>
                <StyledSlideText>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut orci eu elit consequat posuere ut
                    sed elit. Nulla et tristique felis. Morbi quis orci non purus blandit fringilla. Etiam et mollis
                    eros. Duis venenatis vulputate lacus, non tristique eros placerat vel. Nam nec magna lacus. Etiam
                    euismod egestas mauris nec mollis. Phasellus efficitur et ex vel condimentum. Cras enim purus,
                    tempor sed massa vel, accumsan bibendum magna. Nullam hendrerit cursus purus, sit amet viverra arcu
                    gravida vel.
                </StyledSlideText>
                <StyledSlideLink>More -{">"}</StyledSlideLink>
            </FlexWrapper>
        </SlideContainer>
    );
};

const ImageContainer = styled.div`
    position: relative;

    button {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        z-index: 999;
        opacity: 0;
    }

    &::before {
        content: "";
        display: inline-block;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        backdrop-filter: blur(4px);
        z-index: 5;
        border-radius: 30px;
        opacity: 0;
    }

    &:hover {
        &::before {
            opacity: 1;
        }

        button {
            opacity: 1;
        }
    }
`

const StyledSlideImage = styled.img`
    width: 495px;
    height: 500px;
    border-radius: 30px;
    display: block;
`

const StyledSlideTitle = styled.h3`
    font-weight: 300;
    font-size: 24px;
    color: ${theme.colors.secondaryTextColor};
`

const StyledSlideText = styled.p`
    font-weight: 300;
    width: 295px;
    font-size: 18px;
    text-align: center;
    color: ${theme.colors.secondaryTextColor};
    margin: 0;
`
const StyledSlideLink = styled.a`
    font-weight: 300;
    font-size: 18px;
    color: ${theme.colors.linkTextColor};
    cursor: pointer;
`
const SlideContainer = styled(FlexWrapper)`
    border-radius: 30px;
    width: 970px;
    height: 600px;
    box-shadow: 0 4px 15px 0 rgba(27, 27, 27, 0.28);
    background: linear-gradient(135deg, #414141 0%, #2d2d2d 100%);
    padding: 50px;
    box-sizing: border-box;
    gap: 80px;
    margin-top: 50px;
`

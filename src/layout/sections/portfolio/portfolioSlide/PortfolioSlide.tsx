import React from 'react';
import {FlexWrapper} from "../../../../components/FlexWrapper";
import styled from "styled-components";
import slideImage from "../../../../assets/images/portfolioImage.webp"
import {theme} from "../../../../styles/Theme";

export const PortfolioSlide = () => {
    return (
        <SlideContainer align={"center"} justify={"space-around"}>
            <StyledSlideImage src={slideImage}/>
            <FlexWrapper direction={"column"} justify="center" align={"center"} width={"295px"} height={"435px"}>
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

const StyledSlideImage = styled.img`
    width: 495px;
    height: 500px;
    border-radius: 30px;
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

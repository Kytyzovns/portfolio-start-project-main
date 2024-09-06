import React from 'react';
import {FlexWrapper} from "../../../components/FlexWrapper";
import styled from "styled-components";
import {PortfolioSlide} from "./portfolioSlide/PortfolioSlide";
import {ArrowBtn} from "../../../components/arrowButton/ArrowBtn";
import {theme} from "../../../styles/Theme";
import {Container} from "../../../components/Container";
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import '../../../styles/slide.css'

const items = [
    <PortfolioSlide/>,
    <PortfolioSlide/>,
    <PortfolioSlide/>
]

export const Portfolio = () => {

    return (
        <StyledPortfolio>
            <Container>
                <FlexWrapper direction={"column"} justify={"center"} align={"center"}>
                    <StyledPortfolioTitle>Portfolio</StyledPortfolioTitle>
                    <AliceCarousel touchTracking items={items} renderPrevButton={() => {
                        return <ArrowBtn top={"300px"} left={"-20px"} direction={"left"} />
                    }} renderNextButton={() => {
                        return <ArrowBtn top={"300px"} right={"-20px"} direction={"right"}/>
                    }}/>
                </FlexWrapper>
            </Container>
        </StyledPortfolio>
    );
};

const StyledPortfolio = styled.section`
    background: ${theme.colors.primaryBg};
    padding: 100px 0 150px 0;
    @media ${theme.media.tablet} {
        padding: 90px 0 200px 0;
    }
`

const StyledPortfolioTitle = styled.h2`
    font-weight: 400;
    font-size: 48px;
    color: ${theme.colors.secondaryTextColor};
`


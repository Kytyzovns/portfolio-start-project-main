import React from 'react';
import {FlexWrapper} from "../../../components/FlexWrapper";
import styled from "styled-components";
import {PortfolioSlide} from "./portfolioSlide/PortfolioSlide";
import {ArrowBtn} from "../../../components/arrowButton/ArrowBtn";

export const Portfolio = () => {
    return (
        <StyledPortfolio>
            <FlexWrapper direction={"column"} justify={"center"} align={"center"}>
                <StyledPortfolioTitle>Portfolio</StyledPortfolioTitle>
                <FlexWrapper>
                    <ArrowBtn direction={"left"}/>
                    <PortfolioSlide/>
                    <ArrowBtn direction={"right"}/>
                </FlexWrapper>
            </FlexWrapper>
        </StyledPortfolio>
    );
};

const StyledPortfolio = styled.section`
    min-height: 100vh;
    background-color: darkcyan;
    
`

const StyledPortfolioTitle = styled.h2`
    font-weight: 400;
    font-size: 48px;
    color: #fff;
`
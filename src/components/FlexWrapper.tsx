import styled from "styled-components";

type FlexWrapperProps = {
    direction?: string;
    justify?: string;
    align?: string;
    wrap?: string;
    width?: string;
    height?: string;
    gap?: string;
    columnGap?: string;
    rowGap?: string;
    margin?: string;
}

export const FlexWrapper = styled.div<FlexWrapperProps>`
    display: flex;
    flex-direction: ${props => props.direction || "row"};
    justify-content: ${props => props.justify || "flex-start"};
    align-items: ${props => props.align || "stretch"};
    flex-wrap: ${props => props.wrap || "nowrap"};
    width: ${props => props.width || "auto"};
    height: ${props => props.height || "100%"};
    gap: ${props => props.gap};
    //border: 1px solid yellow;
    margin: ${props => props.margin || "0"};
    column-gap: ${props => props.columnGap};
    row-gap: ${props => props.rowGap};
    
`
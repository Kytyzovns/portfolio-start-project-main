import styled from "styled-components";
import {theme} from "../styles/Theme";

export const StyledBtn = styled.button`
    font-family: Next-art, sans-serif;
    border-radius: 6px;
    width: 200px;
    height: 47px;
    box-shadow: 0 2px 13px 0 rgba(226, 158, 0, 0.48);
    background: linear-gradient(315deg, #e2a300 0%, #e29500 100%);
    font-weight: 900;
    font-size: 18px;
    color: ${theme.colors.buttonTextColor};
    cursor: pointer;
`
import styled from "styled-components";
import {theme} from "../../../styles/Theme";

const MobileSkills = styled.section`
    min-height: 40vh;
    padding: 90px 0 82px 0;
    justify-content: center;
    display: none;
    
    @media ${theme.media.skillsFlex} {
        display: flex;
    }
`

const Skills = styled.section`
    min-height: 40vh;
    padding: 112px 0 100px 0;
    display: flex;
    justify-content: center;
    
    @media ${theme.media.skillsFlex} {
        display: none;
    }
`

export const S = {
    MobileSkills,
    Skills
}
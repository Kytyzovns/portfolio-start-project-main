import React from 'react';
import {FlexWrapper} from "../../../components/FlexWrapper";
import mainPhoto from "../../../assets/images/image-1.webp"
import styled from "styled-components";
import head from "../../../assets/images/mainPhoto.webp"
import {Icon} from "../../../components/Icon/Icon";

export const Main = () => {
    return (
        <div>
            <StyledMain justify="space-around">
                <FlexWrapper direction="column" width={"447px"} height={"337"}>
                    <h2>HELLO</h2>
                    <span>I'M MYKYTA<b/> KUTUZOV</span>
                    <p>I've been doing web design, front-end and back-end development for a year now.
                        Do you need a website design, site layout, or maybe a turnkey website?
                        Then contact me
                    </p>
                    <button type={"button"}>CONTACT ME</button>
                </FlexWrapper>

                <div>
                    {/*<Photo src={mainPhoto} alt="mainPhoto"/>*/}
                    <Icon iconId={"ellipse1"} width={"869"} height={"880"} viewBox={"0 0 879 880"}/>
                    <Icon iconId={"ellipse3"} width={"90"} height={"90"} viewBox={"0 0 90 90"}/>
                </div>
            </StyledMain>
        </div>
    );
};

const StyledMain = styled(FlexWrapper)`
    min-height: 100vh;
    background-color: #7fbfff;
`

const Photo = styled.img`
    width: 456px;
    height: 700px;
    object-fit: cover;
`


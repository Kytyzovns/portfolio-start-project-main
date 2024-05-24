import React from 'react';
import {FlexWrapper} from "../../../components/FlexWrapper";
import mainPhoto from "../../../assets/images/image-1.webp"
import styled from "styled-components";

export const Main = () => {
    return (
        <div>
            <FlexWrapper justify="space-around">
                <FlexWrapper direction="column" width={"447px"} height={"337"}>
                    <h2>HELLO</h2>
                    <span>I'M MYKYTA<b/> KUTUZOV</span>
                    <p>I've been doing web design, front-end and back-end development for a year now.
                        Do you need a website design, site layout, or maybe a turnkey website?
                        Then contact me
                    </p>
                    <button type={"button"}>CONTACT ME</button>
                </FlexWrapper>

                <img src={mainPhoto} alt="mainPhoto"/>

            </FlexWrapper>

        </div>
    );
};

const Photo = styled.img`
    width: 456px;
    height: 700px;
    object-fit: cover;
`


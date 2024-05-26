import React from 'react';
import iconsSprite from "../../assets/images/icons-sprite.svg";

type IconProps = {
    iconId: string;
    width?: string;
    height?: string;
    viewBox?: string;

}

export const Icon = (props: IconProps) => {

    return (
        <svg width={props.width || "75px"} height={props.height || "75px"} viewBox={props.viewBox || "0 0 75 75"}
             fill="none" xmlns="http://www.w3.org/2000/svg">
            <use xlinkHref={`${iconsSprite}#${props.iconId}`}/>
        </svg>
    );
};

import React from 'react';
import iconsSprite from "../../assets/images/icons-sprite.svg";

type IconProps = {
    iconId: string;
    width?: string;
    height?: string;
    viewBox?: string;
    x?: string;
    y?:string;
    fontSize?: string;
    textAnchor?: string;
    textFill?: string;
    svgText?: string;
}

export const Icon = (props: IconProps) => {
    return (
        <svg width={props.width || "50px"} height={props.height || "50px"} viewBox={props.viewBox || "0 0 50 50"}
             fill="none" xmlns="http://www.w3.org/2000/svg">
            <use xlinkHref={`${iconsSprite}#${props.iconId}`}/>
            <text x={props.x || "50px"} y={props.y || "50px"} fontSize={props.fontSize} textAnchor={props.textAnchor} fill={props.textFill}>
               ${props.svgText}
            </text>
        </svg>
    );
};

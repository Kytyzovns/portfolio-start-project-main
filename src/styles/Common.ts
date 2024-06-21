type fontProps = {
    fontFamily?: string;
    fontWeight?: number;
    lineHeight?: number;
    Fmin?: number;
    Fmax?: number;
}

export const font = ({fontFamily, fontWeight, lineHeight, Fmin, Fmax}: fontProps) =>`
font-family: ${fontFamily || "Arodora, sans-serif"};
font-weight: ${fontWeight || 400};
font-size: calc( (100vw - 360px)/(1440 - 360) * (${Fmax} - ${Fmin}) + ${Fmin}px);
line-height: ${lineHeight || 1.2};
`

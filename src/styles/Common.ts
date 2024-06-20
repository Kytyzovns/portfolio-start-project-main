type fontProps = {
    fontFamily?: string;
    fontSize?: string;
    fontWeight?: number;
    lineHeight?: number;
}

export const font = (props: fontProps) =>`
font-family: ${props.fontFamily};
font-weight: ${props.fontWeight};
font-size: ${props.fontSize};
line-height: ${props.lineHeight};
`

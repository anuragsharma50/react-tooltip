import { useState } from "react";
import styled from "styled-components";

const setPosition = (position) => {

    switch(position) {
        case "top": 
            return "bottom: calc(100% + 12px);";
        case "left":
            return "right: calc(100% + 11px);";
        case "bottom":
            return "top: calc(100% + 12px);";
        default:
            return "left: calc(100% + 11px);";
    }
}

const setTrianglePosition = (position) => {
    switch(position) {
        case "top": 
            return "top: 99%; left: 38%;";
        case "left":
            return "top: 23%;right: -16%;";
        case "bottom":
            return "bottom: 99%; left: 38%;";
        default:
            return "top: 23%;left: -16%;";
    }
}


const TooltipContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    // display: inline-block;
`

const TooltipText = styled.div`
    position: absolute;
    // position: fixed;
    background-color: black;
    padding: 8px;
    border-radius: 6px;
    color: white;
    width: 120px;
    text-align: center;
    ${(props) => setPosition(props.position)}   
    &::before {
        content: "";
        position: absolute;
        ${(props) => setTrianglePosition(props.position)} 
        display: block;
        border-right: 12px solid transparent;
        border-bottom: 12px solid transparent;
        border-left: 12px solid transparent;
        border-top: 12px solid transparent;
        border-${(props) => props.position}: 12px solid black;
    }
`

export const Tooltip = ({children,text,position="right"}) => {

    const [show,setShow] = useState(false);

    const showTooltip = () => {
        setShow(true);
    }

    const hideTooltip = () => {
        setShow(false);
    }

    return (
        <TooltipContainer onMouseOver={showTooltip} onMouseOut={hideTooltip}>
            {children}
            { show && <TooltipText position={position}>{text}</TooltipText> }
        </TooltipContainer>
    )

}
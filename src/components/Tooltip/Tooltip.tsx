import { HTMLProps } from "react";

interface TooltipWrapperInterface extends HTMLProps<HTMLDivElement> {
    className?: HTMLDivElement['className'];
    children: React.ReactNode | React.ReactNode[];
}

export const TooltipWrapper: React.FC<TooltipWrapperInterface> = ({ children, className, ...rest }) => {
    return (
        <div className={`group ${className ? className : ''}`} {...rest}>
            {children}
        </div>
    )
}

interface TooltipInterface {
    children: React.ReactNode;
    axisX?: number;
    axisY: number;
}

export const Tooltip: React.FC<TooltipInterface> = ({ children, axisX, axisY }) => {
    const tooltipStyles = {
        top: `${axisY}px`,
        left: axisX ? `${axisX}px` : "50%",
    }
    

    return (
        <span
            style={tooltipStyles}
            className="absolute -translate-x-[50%] z-20 text-poke-tertiary scale-0 rounded-lg border border-poke-border bg-white px-1 py-px text-xs font-medium shadow-md transition-all ease-in-out group-hover:scale-100"
        >
            {children}
        </span>
    )
}
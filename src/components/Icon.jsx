import React, { useLayoutEffect, useRef } from "react";

const Icon = (props) => {
    const {
        ariaLabel,
        className,
        width,
        height,
        viewBox,
        children,
        alt,
        ...rest
    } = props;
    const iconRef = useRef();
    const viewBoxResult = viewBox || `0 0 ${width} ${height}`;

    useLayoutEffect(() => {
        if (iconRef.current) {
            const childrenElements = [
                ...iconRef.current.getElementsByTagName("*"),
            ];

            if (childrenElements.length) {
                childrenElements.forEach((element) => {
                    element.setAttribute("aria-hidden", true);
                });
            }
        }
    }, []);

    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={width}
            height={height}
            viewBox={viewBoxResult}
            className={className}
            aria-label={ariaLabel}
            alt={alt}
            ref={iconRef}
            {...rest}
        >
            {children}
        </svg>
    );
};

export default Icon;

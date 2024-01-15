import React from "react";

import Icon from "./Icon";

const FilterIcon = (props) => {
    return (
        <Icon width="20" height="20" className="text-primary" {...props}>
            <g id="Group">
                <path
                    id="Vector"
                    d="M1 2.80078H15M1 8.00078H15M1 13.1998H15"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <path
                    id="Vector_2"
                    d="M5 4.80078C6.10457 4.80078 7 3.90535 7 2.80078C7 1.69621 6.10457 0.800781 5 0.800781C3.89543 0.800781 3 1.69621 3 2.80078C3 3.90535 3.89543 4.80078 5 4.80078Z"
                    fill="currentColor"
                />
                <path
                    id="Vector_3"
                    d="M5 15.3008C6.10457 15.3008 7 14.4054 7 13.3008C7 12.1962 6.10457 11.3008 5 11.3008C3.89543 11.3008 3 12.1962 3 13.3008C3 14.4054 3.89543 15.3008 5 15.3008Z"
                    fill="currentColor"
                />
                <path
                    id="Vector_4"
                    d="M11 10C12.1046 10 13 9.10457 13 8C13 6.89543 12.1046 6 11 6C9.89543 6 9 6.89543 9 8C9 9.10457 9.89543 10 11 10Z"
                    fill="currentColor"
                />
            </g>
        </Icon>
    );
};

export default FilterIcon;

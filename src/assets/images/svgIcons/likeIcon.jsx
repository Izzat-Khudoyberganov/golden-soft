import * as React from "react";
const LikeIcon = (props) => (
    <svg
        xmlns='http://www.w3.org/2000/svg'
        width={25}
        height={23}
        fill='none'
        {...props}
    >
        <path
            stroke='#454F5B'
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={2}
            d='M6.75 1C3.575 1 1 3.61 1 6.829c0 2.599 1.006 8.767 10.911 15.002a1.113 1.113 0 0 0 1.178 0C22.994 15.596 24 9.428 24 6.829 24 3.609 21.425 1 18.25 1S12.5 4.533 12.5 4.533 9.925 1 6.75 1Z'
        />
    </svg>
);
export default LikeIcon;

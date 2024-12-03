import * as React from "react";
const SvgComponent = (props: any) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={17} height={18} fill="none" {...props}>
    <rect width={16.155} height={2.693} x={0.799} y={7.699} fill="#267DFF" opacity={0.8} rx={1.346} />
    <rect
      width={16.155}
      height={2.693}
      x={10.223}
      y={0.968}
      fill="#267DFF"
      opacity={0.8}
      rx={1.346}
      transform="rotate(90 10.223 .968)"
    />
  </svg>
);
export default SvgComponent;

import * as React from "react";
const SVGComponent = (props: any) => (
  <svg
    width={69}
    height={69}
    viewBox="0 0 69 69"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    {...props}>
    <rect
      width={84.75}
      height={31.7796}
      transform="matrix(-0.882948 0.469472 0.469472 0.882948 75.0469 0.878418)"
      fill="url(#pattern0_169_10889)"
    />
    <defs>
      <pattern id="pattern0_169_10889" patternContentUnits="objectBoundingBox" width={1} height={1}>
        <use xlinkHref="#image0_169_10889" transform="scale(0.00892861 0.0238108)" />
      </pattern>
      <image
        id="image0_169_10889"
        width={112}
        height={42}
        xlinkHref="data:image/png;base64,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"
      />
    </defs>
  </svg>
);
export default SVGComponent;

import { SVGProps } from "react";

const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={14} height={14} fill="none" {...props}>
    <path
      fill="#267DFF"
      d="M4.574 2.166a.62.62 0 0 0-.216.161.526.526 0 0 0-.121.216.823.823 0 0 0 0 .418c.018.063.056.13.114.202.059.072.124.13.196.175l.121.068 4.84.013L3.32 9.621c-.422.422-.717.723-.883.903-.166.18-.272.305-.317.377-.027.054-.036.113-.027.175v.054a.567.567 0 0 0 .196.479c.139.121.299.178.478.168l.04.014a.387.387 0 0 0 .176-.04 6.98 6.98 0 0 0 .398-.344c.193-.175.505-.483.937-.924l6.12-6.107.013 2.4c0 1.114.003 1.795.007 2.042.005.248.016.394.034.439a.715.715 0 0 0 .337.343c.153.077.31.088.472.034a.565.565 0 0 0 .317-.189.646.646 0 0 0 .155-.337c.018-.099.022-1.209.013-3.33V2.597l-.054-.108a.749.749 0 0 0-.337-.35l-.108-.054H4.722l-.148.08Z"
    />
  </svg>
);

export default SvgComponent;
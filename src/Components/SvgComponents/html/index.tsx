import { SVGProps } from "react";
import { JSX } from "react/jsx-runtime";

export function SvgHtml(
  props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>
) {
  return (
    <svg
      width={45}
      height={45}
      viewBox="0 0 45 45"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.248 40.502L2.637 0h39.678l-3.614 40.495L22.45 45 6.249 40.502z"
        fill="#E44D26"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M22.476 41.557l13.13-3.64 3.089-34.605H22.476v38.245z"
        fill="#F16529"
      />
      <path
        d="M15.903 18.333h6.573V23.3H11.36L10.02 8.28h12.456v4.967h-7.027l.454 5.087zM22.454 31.24l.022-.006v5.168l-.023.006-10.175-2.824-.696-7.8h4.986l.354 3.962 5.532 1.494z"
        fill="#EBEBEB"
      />
      <path
        d="M22.459 8.28h12.443l-.445 4.966H22.46V8.28zM22.459 23.3v-4.967h11.546l-.12 1.334-1.243 13.917-10.183 2.822v-5.168l5.54-1.495.577-6.443h-6.117z"
        fill="#fff"
      />
    </svg>
  );
}

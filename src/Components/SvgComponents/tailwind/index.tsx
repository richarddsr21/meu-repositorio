import * as React from "react";
import { JSX } from "react/jsx-runtime";

export function SvgTailwind(
  props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>
) {
  return (
    <svg
      width={45}
      height={27}
      viewBox="0 0 45 27"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M22.5 0c-6 0-9.75 3-11.25 9 2.25-3 4.875-4.125 7.875-3.375 1.712.428 2.935 1.67 4.29 3.044C25.62 10.91 28.172 13.5 33.75 13.5c6 0 9.75-3 11.25-9-2.25 3-4.875 4.125-7.875 3.375-1.712-.428-2.935-1.67-4.29-3.044C30.63 2.59 28.078 0 22.5 0zM11.25 13.5c-6 0-9.75 3-11.25 9 2.25-3 4.875-4.125 7.875-3.375 1.712.428 2.935 1.67 4.29 3.044C14.37 24.41 16.922 27 22.5 27c6 0 9.75-3 11.25-9-2.25 3-4.875 4.125-7.875 3.375-1.712-.428-2.935-1.67-4.29-3.044C19.38 16.09 16.828 13.5 11.25 13.5z"
        fill="url(#paint0_linear_68_117)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_68_117"
          x1={-1.25}
          y1={8.64}
          x2={37.6149}
          y2={31.0486}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#2298BD" />
          <stop offset={1} stopColor="#0ED7B5" />
        </linearGradient>
      </defs>
    </svg>
  );
}

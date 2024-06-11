import * as React from "react";
import { JSX } from "react/jsx-runtime";

export function SvgNext(
  props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>
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
      <rect width={45} height={45} rx={22.5} fill="#fff" />
      <path
        d="M22.5 0C10.09 0 0 10.09 0 22.5S10.09 45 22.5 45a22.43 22.43 0 0010.828-2.777L17.016 19.44V32.31h-2.391V14.695h2.39L34.77 41.344C40.922 37.336 45 30.41 45 22.5 45 10.09 34.91 0 22.5 0zm7.77 29.742l-2.637-3.973V14.696h2.637v15.047z"
        fill="#000"
      />
    </svg>
  );
}

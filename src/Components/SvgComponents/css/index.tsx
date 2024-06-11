import * as React from "react";
import { JSX } from "react/jsx-runtime";

export function SvgCss(
  props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>
) {
  return (
    <svg
      width={40}
      height={45}
      viewBox="0 0 40 45"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3.611 40.501L0 0h39.68l-3.615 40.495L19.816 45 3.611 40.501z"
        fill="#0071BC"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M19.873 41.554l13.114-3.607L36.06 3.373H19.873v38.181z"
        fill="#29ABE2"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.266 18.253l.435 4.96 11.173-4.96v-4.968L8.266 18.253z"
        fill="#B3B3B3"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M32.248 7.982l-12.374 5.303v4.968l11.947-5.311.427-4.96zM19.873 31.23l-.038.007-5.54-1.488-.363-3.957H8.946l.695 7.794 10.193 2.823.04-.01v-5.168z"
        fill="#E6E6E6"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M19.873 18.253v4.96h6.067l-.552 6.485-5.515 1.537v5.168l10.16-2.822 1.337-15.328H19.873z"
        fill="#fff"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M19.874 18.253H8.266l.435 4.96h11.173v-4.96zM19.873 12.942v-4.96H7.383l.441 4.96h12.05z"
        fill="#E6E6E6"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M19.873 7.982v4.96h11.948l.427-4.96H19.874z"
        fill="#fff"
      />
    </svg>
  );
}

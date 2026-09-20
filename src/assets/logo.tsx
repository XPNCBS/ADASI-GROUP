interface LogoProps {
  size?: number;
}

export default function Logo({ size = 60 }: LogoProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M92.4355 74.5H7.56445L50 0.999023L92.4355 74.5Z"
        stroke="#83B3A5"
        strokeWidth="7"
        strokeLinejoin="miter"
      />

      <path
        d="M68 39H32L50 68L68 39Z"
        stroke="#83B3A5"
        strokeWidth="7"
        strokeLinejoin="miter"
      />
    </svg>
  );
}

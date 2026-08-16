interface LogoProps {
    size?: number;
}

export default function Logo({ size = 60 }: LogoProps) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 400 400"
            width={size}
            height={size}
        >
            <polygon
                points="200,60 60,302 340,302"
                fill="none"
                stroke="#83B3A5"
                strokeWidth="28"
                strokeLinejoin="round"
            />

            <polygon
                points="130,181 270,181 200,302"
                fill="none"
                stroke="#83B3A5"
                strokeWidth="28"
                strokeLinejoin="round"
            />
        </svg>
    );
}
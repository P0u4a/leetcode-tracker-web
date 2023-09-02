type LogoProps = {
    className?: string;
};

export default function Logo({ className }: LogoProps) {
    return (
        <div
            className={`flex flex-row items-center justify-start gap-4 ${
                className ?? ''
            }`}
        >
            <svg
                className="w-14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 37 33"
            >
                <circle
                    cx="18.32"
                    cy="16.48"
                    r="15"
                    fill="red"
                    fillOpacity=".22"
                />
                <circle cx="22" cy="18" r="15" fill="red" fillOpacity=".22" />
                <circle cx="15" cy="15" r="15" fill="red" fillOpacity=".22" />
            </svg>
            <h2 className="text-3xl">Placeholder</h2>
        </div>
    );
}
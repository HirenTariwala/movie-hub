import React from "react";

interface TypographyProps {
    variant: "h1" | "h2" | "h3" | "h4" | "p" | "span" | "small";
    className?: string;
    children: React.ReactNode;
}

const Typography: React.FC<TypographyProps> = ({
    variant = "p",
    className = "",
    children,
}) => {
    const Component: React.ElementType = variant || "p";

    return <Component className={`${baseStyles[variant]} ${className} `}>{children}</Component>;
};

// Define base styles for each variant
const baseStyles: Record<string, string> = {
    h1: "text-[64px] font-semibold",
    h2: "text-[48px] font-semibold",
    h3: "text-[24px]",
    h4: "text-[20px] font-medium",
    p: "text-[14px] font-normal",
    span: "text-[16px]",
    small: "text-xs",
};

export default Typography;

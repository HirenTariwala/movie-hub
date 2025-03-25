import React from "react";

interface ClassNameProps {
    container?: string;
    label?: string;
    input?: string;
}

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    classNames?: ClassNameProps;
}

const Input: React.FC<InputProps> = ({ label, classNames, ...props }) => {
    return (
        <div className={classNames?.container}>
            {label && (
                <label className={`mb-1 text-white text-sm ${classNames?.label}`}>
                    {label}
                </label>
            )}
            <input
                className={`p-3 w-full rounded-[10px] bg-[#224957] text-white text-[14px] font-normal ${classNames?.input}`}
                {...props}
            />
        </div>
    );
};

export default Input;

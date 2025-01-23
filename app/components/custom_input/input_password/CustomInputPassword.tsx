import React, { useState } from 'react';

interface PasswordInputProps {
    placeholder?: string;
    value?: string;
    onChange?: (value: string) => void;
}

const PasswordInput: React.FC<PasswordInputProps> = ({ placeholder = "Nhập mật khẩu", value = "", onChange }) => {
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);

    const togglePasswordVisibility = () => {
        setIsPasswordVisible(!isPasswordVisible);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (onChange) {
            onChange(e.target.value);
        }
    };

    return (
        <div>
            <div className="relative">
                <input
                    id="hs-toggle-password"
                    type={isPasswordVisible ? "text" : "password"}
                    className="
                        w-full
                        py-3
                        px-4
                        text-sm
                        border
                        border-gray-300
                        rounded-lg
                        transition-all
                        duration-200
                        focus:ring-blue-500
                        focus:border-blue-500
                        bg-gray-50
                        dark:bg-neutral-900
                        dark:border-neutral-700
                        dark:text-neutral-400
                        dark:placeholder-neutral-500
                    "
                    placeholder={placeholder}
                    value={value}
                    onChange={handleChange}
                />
                <button
                    type="button"
                    onClick={togglePasswordVisibility}
                    className="
                        absolute
                        inset-y-0
                        right-0
                        z-20
                        px-3
                        flex
                        items-center
                        cursor-pointer
                        rounded-e-md
                        transition-colors
                        duration-200
                        text-gray-400
                        focus:outline-none
                        focus:text-blue-600
                        dark:text-neutral-600
                        dark:focus:text-blue-500
                    "
                >
                    <svg
                        className="shrink-0 size-3.5"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <g className={isPasswordVisible ? "hidden" : ""}>
                            <path d="M9.88 9.88a3 3 0 1 0 4.24 4.24" />
                            <path d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68" />
                            <path d="M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61" />
                            <line x1="2" x2="22" y1="2" y2="22" />
                        </g>
                        <g className={isPasswordVisible ? "" : "hidden"}>
                            <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
                            <circle cx="12" cy="12" r="3" />
                        </g>
                    </svg>
                </button>
            </div>
        </div>
    );
};

export default PasswordInput;
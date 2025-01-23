import React from 'react';

interface CustomInputProps {
    id?: string;
    type?: string;
    value: string;
    onChange: (value: string) => void;
    placeholder?: string;
    label?: string;
    onKeyPress?: (e: React.KeyboardEvent) => void;
    required?: boolean;
    className?: string;
}

const CustomInput: React.FC<CustomInputProps> = ({
                                                     id,
                                                     type = "text",
                                                     value,
                                                     onChange,
                                                     placeholder,
                                                     label,
                                                     onKeyPress,
                                                     required = false,
                                                     className = "",
                                                 }) => {
    return (
        <div>
            {label && (
                <label
                    htmlFor={id}
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                    {label}
                </label>
            )}
            <input
                id={id}
                type={type}
                value={value}
                onChange={(e) => onChange(e.target.value)}
                onKeyPress={onKeyPress}
                placeholder={placeholder}
                required={required}
                className={`
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
                    dark:bg-gray-700 
                    dark:border-gray-600 
                    dark:placeholder-gray-400
                    dark:text-white 
                    ${className}
                `}
            />
        </div>
    );
};

export default CustomInput;
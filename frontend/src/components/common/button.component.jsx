import React from 'react';

const Button = ({ label, size = 'medium', type = 'button', variant = 'primary', onClick = () => { }}) => {
    const sizeClasses = {
        large: 'w-60 h-14 px-6 py-3',
        medium: 'w-full py-4',
        small: 'w-50 h-12 px-8 py-2'
    };

    const variantClasses = {
        primary: 'bg-brand border-brand',
        secondary: 'bg-gray-500 text-white border-gray-500',
        outline: 'bg-transparent text-brand border-brand', 
        opacity: 'bg-orange-opacity border-brand hover:bg-brand hover:border-brand'
    };

    return (
        <button
            className={`button ${sizeClasses[size]} ${variantClasses[variant]}
                rounded-full border font-inter-semibold uppercase text-white text-lg md:text-xl  
                line-clamp-1 overflow-hidden relative shadow-md`}
            onClick={onClick}
            type={type}
        >
            {label}
        </button>
    );
};

export default Button;

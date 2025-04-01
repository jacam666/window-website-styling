// components/CardWrapper.tsx
import React from 'react';

interface CardWrapperProps {
    children?: React.ReactNode;
}

const CardWrapper: React.FC<CardWrapperProps> = ({ children }) => {
    return (
        <div className="py-2">
            <div className="relative max-w-xl mx-auto">
                {/* Background overlay */}
                <div className="absolute scale-x-95 inset-0 -rotate-[5deg] rounded-lg bg-gray-200 dark:bg-sky-800 py-10"></div>
                {/* Content container */}
                <div className="relative">
                    {children}
                </div>
            </div>
        </div>
    );
};

export default CardWrapper;

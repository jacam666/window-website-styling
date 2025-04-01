// components/Card.tsx
import React from 'react';
import { cn } from '../lib/utils';
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//import { faStar } from '@fortawesome/free-solid-svg-icons';
//import StarRating from './StarRating';

export interface CardProps {
    className?: string;
    title?: string;
    desc?: string;
    children?: React.ReactNode;
}

const Card: React.FC<CardProps> = ({ className = "", title, desc, children }) => {
    return (
        <div className={cn(className)}>
            {children ? (
                children
            ) : (
                <>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-1">
                        {title}
                    </h3>
                    <p className="text-gray-700 dark:text-gray-400">{desc}</p>
                </>
            )}
        </div>
    );
};

export default Card;

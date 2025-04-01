// import React from 'react';
// import { cn } from '../lib/utils';

// export interface CardProps {
//     className?: string;
//     title?: string;
//     desc?: string;
//     children?: React.ReactNode;
// }

// const CardBody: React.FC<CardProps> = ({ className = "", title, desc, children }) => {
//     return (
//         <div className={cn(className)}>
//             {children ? (
//                 children
//             ) : (
//                 <>
//                     <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-1">
//                         {title}
//                     </h3>
//                     <p className="text-gray-700 dark:text-gray-400">{desc}</p>
//                 </>
//             )}
//         </div>
//     );
// };

// export default CardBody;
// components/Card.js
// components/Card.tsx
import React, { ReactNode } from 'react';

interface CardProps {
    children: ReactNode;
}

const CardBody: React.FC<CardProps> = ({ children }) => {
    return (
        <div className="relative p-2">
            {/* Background card */}
            <div className="absolute inset-0 scale-x-90 -rotate-[5deg] bg-sky-700 rounded-lg"></div>
            {/* Foreground card */}
            <div className="relative bg-sky-900 p-4 shadow-lg rounded-lg">
                {children}
            </div>
        </div>
    );
};

export default CardBody;


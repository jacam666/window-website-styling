// components/StarRating.tsx
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';



export default function StarRating() {
    return (
        <div className="flex flex-row  space-x-2  text-yellow-100 py-4">
            <FontAwesomeIcon icon={faStar} size="sm" />
            <FontAwesomeIcon icon={faStar} size="sm" />
            <FontAwesomeIcon icon={faStar} size="sm" />
            <FontAwesomeIcon icon={faStar} size="sm" />
            <FontAwesomeIcon icon={faStar} size="sm" />
        </div>
    )
}



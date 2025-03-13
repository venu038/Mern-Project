import React from 'react';
import { Star } from 'lucide-react';

interface StarRatingProps {
  rating: number;
  setRating: (rating: number) => void;
  editable?: boolean;
}

const StarRating: React.FC<StarRatingProps> = ({ rating, setRating, editable = true }) => {
  const handleClick = (value: number) => {
    if (editable) {
      setRating(value);
    }
  };

  return (
    <div className="flex">
      {[1, 2, 3, 4, 5].map((value) => (
        <Star
          key={value}
          className={`h-6 w-6 ${editable ? 'cursor-pointer' : ''} ${
            value <= rating ? 'text-yellow-400' : 'text-gray-300'
          }`}
          fill={value <= rating ? 'currentColor' : 'none'}
          onClick={() => handleClick(value)}
        />
      ))}
    </div>
  );
};

export default StarRating;
import React from 'react';
import { Star, ThumbsUp, ThumbsDown, Flag } from 'lucide-react';
import { Review } from '../types';

interface ReviewCardProps {
  review: Review;
}

const ReviewCard: React.FC<ReviewCardProps> = ({ review }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-4">
      <div className="flex justify-between items-start mb-4">
        <div>
          <div className="flex items-center mb-1">
            <div className="flex text-yellow-400 mr-2">
              {[...Array(5)].map((_, i) => (
                <Star 
                  key={i} 
                  className="h-4 w-4" 
                  fill={i < review.rating ? "currentColor" : "none"}
                />
              ))}
            </div>
            <h3 className="font-semibold text-lg">{review.title}</h3>
          </div>
          <p className="text-sm text-gray-600">
            By <span className="font-medium">{review.userName}</span> on {new Date(review.date).toLocaleDateString()}
          </p>
        </div>
        <div className="bg-indigo-100 text-indigo-800 px-2 py-1 rounded text-xs font-medium">
          Verified Purchase
        </div>
      </div>
      
      <p className="text-gray-700 mb-4">{review.content}</p>
      
      {review.images && review.images.length > 0 && (
        <div className="flex space-x-2 mb-4 overflow-x-auto pb-2">
          {review.images.map((image, index) => (
            <img 
              key={index} 
              src={image} 
              alt={`Review image ${index + 1}`} 
              className="h-20 w-20 object-cover rounded"
            />
          ))}
        </div>
      )}
      
      <div className="flex items-center text-sm text-gray-500 space-x-4">
        <button className="flex items-center hover:text-gray-700">
          <ThumbsUp className="h-4 w-4 mr-1" />
          <span>Helpful ({review.helpfulCount})</span>
        </button>
        <button className="flex items-center hover:text-gray-700">
          <ThumbsDown className="h-4 w-4 mr-1" />
          <span>Not Helpful</span>
        </button>
        <button className="flex items-center hover:text-gray-700">
          <Flag className="h-4 w-4 mr-1" />
          <span>Report</span>
        </button>
      </div>
    </div>
  );
};

export default ReviewCard;
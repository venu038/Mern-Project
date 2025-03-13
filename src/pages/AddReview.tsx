import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Upload, X } from 'lucide-react';
import StarRating from '../components/StarRating';
import { mockProducts } from '../data/mockData';

const AddReview: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const product = mockProducts.find(p => p.id === id);
  
  const [rating, setRating] = useState(0);
  const [title, setTitle] = useState('');
  const [review, setReview] = useState('');
  const [images, setImages] = useState<string[]>([]);
  const [errors, setErrors] = useState<{[key: string]: string}>({});
  
  if (!product) {
    return (
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Product Not Found</h2>
        <p className="text-gray-600 mb-8">The product you're trying to review doesn't exist or has been removed.</p>
        <Link to="/" className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg font-medium">
          Back to Home
        </Link>
      </div>
    );
  }

  const validateForm = () => {
    const newErrors: {[key: string]: string} = {};
    
    if (rating === 0) {
      newErrors.rating = 'Please select a rating';
    }
    
    if (!title.trim()) {
      newErrors.title = 'Please enter a review title';
    }
    
    if (!review.trim()) {
      newErrors.review = 'Please enter your review';
    } else if (review.trim().length < 10) {
      newErrors.review = 'Review must be at least 10 characters long';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      // In a real app, we would submit the review to an API
      console.log({
        productId: id,
        rating,
        title,
        content: review,
        images
      });
      
      // Redirect to product page
      navigate(`/product/${id}`, { state: { reviewSubmitted: true } });
    }
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      // In a real app, we would upload the file to a server
      // For this demo, we'll just use a placeholder URL
      const newImages = [...images];
      for (let i = 0; i < e.target.files.length; i++) {
        if (newImages.length < 5) {
          // Using Unsplash for placeholder images
          newImages.push(`https://source.unsplash.com/random/300x300?sig=${Date.now() + i}`);
        }
      }
      setImages(newImages);
    }
  };

  const removeImage = (index: number) => {
    setImages(images.filter((_, i) => i !== index));
  };

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-800 mb-2">Write a Review</h1>
        <p className="text-gray-600">Share your experience with this product</p>
      </div>
      
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <div className="flex items-center mb-6">
          <img 
            src={product.image} 
            alt={product.name} 
            className="w-20 h-20 object-cover rounded mr-4"
          />
          <div>
            <h2 className="font-semibold text-lg">{product.name}</h2>
            <Link to={`/product/${id}`} className="text-indigo-600 text-sm hover:underline">
              View Product Details
            </Link>
          </div>
        </div>
        
        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label className="block text-gray-700 font-medium mb-2">
              Overall Rating
            </label>
            <StarRating rating={rating} setRating={setRating} />
            {errors.rating && <p className="text-red-500 text-sm mt-1">{errors.rating}</p>}
          </div>
          
          <div className="mb-6">
            <label htmlFor="title" className="block text-gray-700 font-medium mb-2">
              Review Title
            </label>
            <input
              type="text"
              id="title"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="Summarize your experience"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            {errors.title && <p className="text-red-500 text-sm mt-1">{errors.title}</p>}
          </div>
          
          <div className="mb-6">
            <label htmlFor="review" className="block text-gray-700 font-medium mb-2">
              Your Review
            </label>
            <textarea
              id="review"
              rows={6}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="What did you like or dislike about this product? How was your experience using it?"
              value={review}
              onChange={(e) => setReview(e.target.value)}
            ></textarea>
            {errors.review && <p className="text-red-500 text-sm mt-1">{errors.review}</p>}
          </div>
          
          <div className="mb-6">
            <label className="block text-gray-700 font-medium mb-2">
              Add Photos (Optional)
            </label>
            <div className="flex flex-wrap gap-4 mb-4">
              {images.map((image, index) => (
                <div key={index} className="relative">
                  <img 
                    src={image} 
                    alt={`Review image ${index + 1}`} 
                    className="h-24 w-24 object-cover rounded"
                  />
                  <button
                    type="button"
                    className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1"
                    onClick={() => removeImage(index)}
                  >
                    <X className="h-4 w-4" />
                  </button>
                </div>
              ))}
              
              {images.length < 5 && (
                <label className="h-24 w-24 border-2 border-dashed border-gray-300 rounded flex flex-col items-center justify-center cursor-pointer hover:bg-gray-50">
                  <Upload className="h-6 w-6 text-gray-400" />
                  <span className="text-xs text-gray-500 mt-1">Upload</span>
                  <input 
                    type="file" 
                    className="hidden" 
                    accept="image/*" 
                    multiple 
                    onChange={handleImageUpload}
                  />
                </label>
              )}
            </div>
            <p className="text-sm text-gray-500">
              You can upload up to 5 images. Each image must be less than 5MB.
            </p>
          </div>
          
          <div className="flex justify-end space-x-4">
            <Link 
              to={`/product/${id}`}
              className="px-6 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50"
            >
              Cancel
            </Link>
            <button 
              type="submit"
              className="px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
            >
              Submit Review
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddReview;
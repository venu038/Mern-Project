import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, ShoppingCart, Heart, Share2, ChevronRight, ChevronLeft } from 'lucide-react';
import ReviewCard from '../components/ReviewCard';
import { mockProducts, mockReviews } from '../data/mockData';

const ProductDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [activeImage, setActiveImage] = useState(0);
  const [activeTab, setActiveTab] = useState('description');
  
  const product = mockProducts.find(p => p.id === id);
  const reviews = mockReviews.filter(review => review.productId === id);
  
  if (!product) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Product Not Found</h2>
        <p className="text-gray-600 mb-8">The product you're looking for doesn't exist or has been removed.</p>
        <Link to="/" className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg font-medium">
          Back to Home
        </Link>
      </div>
    );
  }

  const handlePrevImage = () => {
    setActiveImage((prev) => (prev === 0 ? product.images.length - 1 : prev - 1));
  };

  const handleNextImage = () => {
    setActiveImage((prev) => (prev === product.images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Breadcrumbs */}
      <nav className="flex mb-8 text-sm">
        <Link to="/" className="text-gray-500 hover:text-indigo-600">Home</Link>
        <ChevronRight className="h-4 w-4 mx-2 text-gray-400 self-center" />
        <Link to={`/category/${product.category}`} className="text-gray-500 hover:text-indigo-600 capitalize">{product.category}</Link>
        <ChevronRight className="h-4 w-4 mx-2 text-gray-400 self-center" />
        <span className="text-gray-800 font-medium">{product.name}</span>
      </nav>
      
      {/* Product Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        {/* Product Images */}
        <div>
          <div className="relative bg-gray-100 rounded-lg overflow-hidden mb-4 h-96">
            <img 
              src={product.images[activeImage]} 
              alt={product.name} 
              className="w-full h-full object-contain"
            />
            <button 
              onClick={handlePrevImage}
              className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-100"
            >
              <ChevronLeft className="h-5 w-5 text-gray-800" />
            </button>
            <button 
              onClick={handleNextImage}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-100"
            >
              <ChevronRight className="h-5 w-5 text-gray-800" />
            </button>
          </div>
          <div className="flex space-x-2 overflow-x-auto">
            {product.images.map((image, index) => (
              <button 
                key={index} 
                className={`border-2 rounded ${
                  index === activeImage ? 'border-indigo-600' : 'border-transparent'
                }`}
                onClick={() => setActiveImage(index)}
              >
                <img 
                  src={image} 
                  alt={`${product.name} thumbnail ${index + 1}`} 
                  className="h-20 w-20 object-cover"
                />
              </button>
            ))}
          </div>
        </div>
        
        {/* Product Info */}
        <div>
          <h1 className="text-3xl font-bold text-gray-800 mb-2">{product.name}</h1>
          <div className="flex items-center mb-4">
            <div className="flex text-yellow-400 mr-2">
              {[...Array(5)].map((_, i) => (
                <Star 
                  key={i} 
                  className="h-5 w-5" 
                  fill={i < Math.floor(product.rating) ? "currentColor" : "none"}
                />
              ))}
            </div>
            <span className="text-gray-600">{product.rating.toFixed(1)} ({product.reviewCount} reviews)</span>
          </div>
          
          <div className="text-2xl font-bold text-indigo-600 mb-4">${product.price.toFixed(2)}</div>
          
          <p className="text-gray-600 mb-6">{product.description}</p>
          
          <div className="mb-6">
            <h3 className="font-semibold text-gray-800 mb-2">Available Colors:</h3>
            <div className="flex space-x-2">
              {product.colors.map(color => (
                <button 
                  key={color} 
                  className={`h-8 w-8 rounded-full border border-gray-300`}
                  style={{ backgroundColor: color }}
                  aria-label={`Color: ${color}`}
                />
              ))}
            </div>
          </div>
          
          <div className="flex space-x-4 mb-8">
            <button className="flex-1 bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg font-medium flex items-center justify-center">
              <ShoppingCart className="h-5 w-5 mr-2" />
              Add to Cart
            </button>
            <button className="bg-gray-100 hover:bg-gray-200 p-3 rounded-lg">
              <Heart className="h-6 w-6 text-gray-600" />
            </button>
            <button className="bg-gray-100 hover:bg-gray-200 p-3 rounded-lg">
              <Share2 className="h-6 w-6 text-gray-600" />
            </button>
          </div>
          
          <div className="border-t border-gray-200 pt-4">
            <div className="flex items-center text-sm text-gray-600">
              <span className="font-medium mr-2">SKU:</span> {product.sku}
            </div>
            <div className="flex items-center text-sm text-gray-600">
              <span className="font-medium mr-2">Category:</span> 
              <Link to={`/category/${product.category}`} className="text-indigo-600 hover:underline capitalize">
                {product.category}
              </Link>
            </div>
          </div>
        </div>
      </div>
      
      {/* Product Details Tabs */}
      <div className="mb-12">
        <div className="border-b border-gray-200">
          <nav className="flex space-x-8">
            <button
              className={`py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'description'
                  ? 'border-indigo-600 text-indigo-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
              onClick={() => setActiveTab('description')}
            >
              Description
            </button>
            <button
              className={`py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'specifications'
                  ? 'border-indigo-600 text-indigo-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
              onClick={() => setActiveTab('specifications')}
            >
              Specifications
            </button>
            <button
              className={`py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'reviews'
                  ? 'border-indigo-600 text-indigo-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
              onClick={() => setActiveTab('reviews')}
            >
              Reviews ({reviews.length})
            </button>
          </nav>
        </div>
        
        <div className="py-6">
          {activeTab === 'description' && (
            <div className="prose max-w-none">
              <p>{product.fullDescription}</p>
            </div>
          )}
          
          {activeTab === 'specifications' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {product.specifications.map((spec, index) => (
                <div key={index} className="border-b border-gray-200 pb-3">
                  <dt className="font-medium text-gray-500">{spec.name}</dt>
                  <dd className="mt-1 text-gray-900">{spec.value}</dd>
                </div>
              ))}
            </div>
          )}
          
          {activeTab === 'reviews' && (
            <div>
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-bold">Customer Reviews</h3>
                <Link 
                  to={`/add-review/${id}`} 
                  className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg text-sm font-medium"
                >
                  Write a Review
                </Link>
              </div>
              
              {reviews.length > 0 ? (
                <div className="space-y-6">
                  {reviews.map(review => (
                    <ReviewCard key={review.id} review={review} />
                  ))}
                </div>
              ) : (
                <div className="text-center py-12 bg-gray-50 rounded-lg">
                  <p className="text-gray-500 mb-4">No reviews yet for this product.</p>
                  <Link 
                    to={`/add-review/${id}`} 
                    className="text-indigo-600 hover:text-indigo-800 font-medium"
                  >
                    Be the first to write a review
                  </Link>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
      
      {/* Related Products */}
      <div>
        <h2 className="text-2xl font-bold mb-6">Related Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {mockProducts
            .filter(p => p.category === product.category && p.id !== id)
            .slice(0, 4)
            .map(relatedProduct => (
              <div key={relatedProduct.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                <Link to={`/product/${relatedProduct.id}`}>
                  <img 
                    src={relatedProduct.image} 
                    alt={relatedProduct.name} 
                    className="w-full h-48 object-cover"
                  />
                </Link>
                <div className="p-4">
                  <Link to={`/product/${relatedProduct.id}`}>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2 hover:text-indigo-600">{relatedProduct.name}</h3>
                  </Link>
                  <div className="flex items-center mb-2">
                    <div className="flex text-yellow-400 mr-1">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          className="h-4 w-4" 
                          fill={i < Math.floor(relatedProduct.rating) ? "currentColor" : "none"}
                        />
                      ))}
                    </div>
                    <span className="text-gray-600 text-sm">({relatedProduct.reviewCount})</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-indigo-600 font-bold">${relatedProduct.price.toFixed(2)}</span>
                    <Link 
                      to={`/product/${relatedProduct.id}`} 
                      className="text-sm text-indigo-600 hover:text-indigo-800 font-medium"
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
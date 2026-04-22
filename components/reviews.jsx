
// export default Reviews;
import React, { useEffect, useState, useCallback } from 'react';
import "../app/globals.css";

const reviews = [
  { id: 1, name: 'John Doe', review: 'Amazing experience! The tour was well organized and I had a great time.' },
  { id: 2, name: 'Jane Smith', review: 'Wonderful! The guide was very knowledgeable, and I felt very comfortable throughout the trip.' },
  { id: 3, name: 'Mark Johnson', review: 'A trip to remember! Everything was perfect, from the accommodations to the itinerary.' },
  { id: 4, name: 'Emily Davis', review: 'Highly recommend! Great customer service and wonderful destinations.' },
  { id: 5, name: 'Michael Brown', review: 'I loved every moment of it! Thank you for such an amazing experience.' },
];

const Reviews = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handlePrev = useCallback(() => {
    if (isTransitioning) return;
    setCurrentIndex((prevIndex) => prevIndex - 1);
    setIsTransitioning(true);
  }, [isTransitioning]);

  const handleNext = useCallback(() => {
    if (isTransitioning) return;
    setCurrentIndex((prevIndex) => prevIndex + 1);
    setIsTransitioning(true);
  }, [isTransitioning]);

  // ✅ Fixed useEffect with handleNext in dependencies
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 4000);
    return () => clearInterval(interval);
  }, [handleNext]);

  useEffect(() => {
    if (isTransitioning) {
      const timeout = setTimeout(() => {
        setIsTransitioning(false);

        // Adjust index for infinite scroll effect
        if (currentIndex >= reviews.length) {
          setCurrentIndex(0);
        } else if (currentIndex < 0) {
          setCurrentIndex(reviews.length - 1);
        }
      }, 500);

      return () => clearTimeout(timeout);
    }
  }, [currentIndex, isTransitioning]);

  return (
    <div className="p-6 md:p-8 max-w-7xl mx-auto">
      <h2 className="text-5xl font-bold text-center text-yellow-500 mb-4 font-allura underline-animation">
        What Our Clients Say
      </h2>
      <div className="relative flex items-center justify-center">
        <button
          onClick={handlePrev}
          className="z-10 p-2 bg-yellow-500 text-white rounded-full hover:bg-yellow-600 transition duration-300 absolute left-0 md:left-4"
        >
          &#8249;
        </button>
        <div className="flex overflow-hidden w-full justify-center">
          <div
            className="flex transition-transform duration-500 ease-out"
            style={{
              transform: `translateX(-${(currentIndex + 1) * (100 / (reviews.length + 2))}%)`,
              width: `${(reviews.length + 2) * 100}%`,
            }}
          >
            {/* Clone the last review for smooth looping */}
            <div className="flex-shrink-0 w-full md:w-1/3 lg:w-1/4 px-4">
              <div className="bg-white p-6 shadow-lg h-48 transform scale-90 opacity-50">
                <blockquote className="text-gray-800">{reviews[reviews.length - 1].review}</blockquote>
                <p className="mt-4 text-right font-bold text-yellow-500">- {reviews[reviews.length - 1].name}</p>
              </div>
            </div>

            {reviews.map((review, index) => (
              <div key={review.id} className="flex-shrink-0 w-full md:w-1/3 lg:w-1/4 px-4">
                <div
                  className={`bg-white p-6 shadow-lg h-48 transform transition-all duration-300 ${
                    index === currentIndex ? 'scale-105 opacity-100' : 'scale-90 opacity-50'
                  }`}
                >
                  <blockquote className="text-gray-800">{review.review}</blockquote>
                  <p className="mt-4 text-right font-bold text-yellow-500">- {review.name}</p>
                </div>
              </div>
            ))}

            {/* Clone the first review for smooth looping */}
            <div className="flex-shrink-0 w-full md:w-1/3 lg:w-1/4 px-4">
              <div className="bg-white p-6 shadow-lg h-48 transform scale-90 opacity-50">
                <blockquote className="text-gray-800">{reviews[0].review}</blockquote>
                <p className="mt-4 text-right font-bold text-yellow-500">- {reviews[0].name}</p>
              </div>
            </div>
          </div>
        </div>
        <button
          onClick={handleNext}
          className="z-10 p-2 bg-yellow-500 text-white rounded-full hover:bg-yellow-600 transition duration-300 absolute right-0 md:right-4"
        >
          &#8250;
        </button>
      </div>
    </div>
  );
};

export default Reviews;

"use client";
import React, { useState } from "react";
import { FaGoogle, FaStar, FaChevronLeft, FaChevronRight } from "react-icons/fa";

// Sample review data - replace with your actual reviews
const reviews = [
  {
    name: "John Smith",
    rating: 5,
    date: "2 weeks ago",
    text: "Excellent selection of electronic components. Fast shipping and great customer service. Will definitely order again!",
  },
  {
    name: "Sarah Johnson",
    rating: 5,
    date: "1 month ago",
    text: "Hard to find components arrived quickly and were exactly as described. Very impressed with the quality and service.",
  },
  {
    name: "Mike Peterson",
    rating: 4,
    date: "3 weeks ago",
    text: "Good prices and quick delivery. The website is easy to navigate and find what you need.",
  },
  {
    name: "Emma Williams",
    rating: 5,
    date: "2 months ago",
    text: "Fantastic supplier for electronic components. Their technical support was very helpful when I had questions.",
  },
  {
    name: "David Thompson",
    rating: 5,
    date: "1 week ago",
    text: "Top notch service and quality products. Will be my go-to supplier for all future projects.",
  },
];

export default function GoogleReviews() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalReviews = 156; // Replace with your actual count
  const averageRating = 4.8; // Replace with your actual average

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === reviews.length - 3 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? reviews.length - 3 : prevIndex - 1
    );
  };

  // Renders stars based on rating
  const renderStars = (rating) => {
    return Array(5)
      .fill(0)
      .map((_, i) => (
        <FaStar
          key={i}
          className={i < rating ? "text-yellow-400" : "text-gray-300"}
        />
      ));
  };

  return (
    <section className="w-full py-10 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-2">
          Our Google Reviews
        </h2>
        <p className="text-lg text-center mb-10 text-gray-400">
          A collection of testimonials from our customers.
        </p>

        <div className="max-w-6xl mx-auto">
          {/* Google logo, stats and button */}
          <div className="flex flex-col md:flex-row items-center justify-between bg-gray-100 p-6 rounded-lg mb-8 w-full">
            <div className="flex items-center">
              <FaGoogle className="text-4xl mr-2" />
              <div>
                <div className="flex items-center">
                  {renderStars(5)}
                  <span className="ml-2 font-semibold">{averageRating}</span>
                </div>
                <p className="text-sm text-gray-600">{totalReviews} reviews</p>
              </div>
            </div>

            <a
              href="https://g.page/r/your-google-review-link"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-slate-900 hover:bg-blue-700 text-white py-2 px-6 rounded-full transition-colors font-medium my-4 md:my-0"
            >
              Write a Review
            </a>
          </div>

          {/* Reviews carousel */}
          <div className="relative">
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-300 ease-in-out"
                style={{ transform: `translateX(-${currentIndex * (100 / 3)}%)` }}
              >
                {reviews.map((review, index) => (
                  <div key={index} className="min-w-[33.333%] px-4">
                    <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm h-full">
                      <div className="flex items-center mb-4">
                        <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center mr-3">
                          {review.name.charAt(0)}
                        </div>
                        <div>
                          <h4 className="font-medium">{review.name}</h4>
                          <div className="flex items-center">
                            <div className="flex">{renderStars(review.rating)}</div>
                            <span className="ml-2 text-xs text-gray-500">
                              {review.date}
                            </span>
                          </div>
                        </div>
                      </div>
                      <p className="text-gray-600">{review.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation buttons */}
            <button
              onClick={prevSlide}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white rounded-full p-2 shadow-md hover:bg-gray-100"
              aria-label="Previous"
            >
              <FaChevronLeft className="text-gray-600" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white rounded-full p-2 shadow-md hover:bg-gray-100"
              aria-label="Next"
            >
              <FaChevronRight className="text-gray-600" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
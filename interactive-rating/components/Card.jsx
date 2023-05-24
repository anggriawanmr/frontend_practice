'use client';

import { useState } from 'react';
import Image from 'next/image';

const Card = () => {
  const [selectedRating, setSelectedRating] = useState(null);

  const handleRatingClick = (rating) => {
    setSelectedRating(rating);
  };

  return (
    <>
      <div className="star">
        <Image
          src="/assets/images/icon-star.svg"
          alt="star"
          width={50}
          height={50}
          className="w-4 h-4"
        />
      </div>
      <div className="content-wrapper">
        <h1 className="text-2xl font-bold">How did we do?</h1>
        <p>
          Please let us know how we did with your support request. All feedback
          is appreciated to help us improve our offering!
        </p>
      </div>

      <div className="submit-wrapper w-full">
        <div className="rating-wrapper">
          {[1, 2, 3, 4, 5].map((rating) => (
            <div
              key={rating}
              className={`star-rating ${
                selectedRating === rating ? 'selectedRating' : ''
              }`}
              onClick={() => handleRatingClick(rating)}
            >
              {rating}
            </div>
          ))}
        </div>

        <button type="button" className="button">
          Submit
        </button>
      </div>
    </>
  );
};

export default Card;

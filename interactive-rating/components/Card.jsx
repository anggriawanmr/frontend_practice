'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

const Card = () => {
  const router = useRouter();

  const [selectedRating, setSelectedRating] = useState(null);

  const handleRatingClick = (rating) => {
    setSelectedRating(rating);
  };

  const handleSubmit = () => {
    router.push('/thankyou');
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
        <p className="p-short mt-3">
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

        <button type="button" className="button" onClick={handleSubmit}>
          Submit
        </button>
      </div>
    </>
  );
};

export default Card;

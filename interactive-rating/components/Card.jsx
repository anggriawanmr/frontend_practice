import Image from 'next/image';

import star from '@public/assets/images';

const Card = () => {
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
          <div className="star-rating">1</div>
          <div className="star-rating">2</div>
          <div className="star-rating">3</div>
          <div className="star-rating">4</div>
          <div className="star-rating">5</div>
        </div>

        <button type="button" className="button">
          Submit
        </button>
      </div>
    </>
  );
};

export default Card;

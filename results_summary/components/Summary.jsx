import Image from 'next/image';

import { summaries } from '@constants';

const Summary = () => {
  return (
    <div className="p-8 grid-flow text-center">
      <h2 className="font-extrabold text-lg">Summary</h2>
      {summaries.map((summary) => (
        <div className="flex justify-between items-center p-4 rounded-lg">
          <div className="flex gap-2">
            <Image src={summary.img} />
            <p>{summary.title}</p>
          </div>

          <p>
            <span>{summary.score}</span> / 100
          </p>
        </div>
      ))}

      <button className="button">Continue</button>
    </div>
  );
};

export default Summary;

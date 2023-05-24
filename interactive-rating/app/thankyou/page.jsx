'use client';

import { useRouter } from 'next/navigation';
import Image from 'next/image';

const page = () => {
  const router = useRouter();

  return (
    <>
      <div className="card flex justify-center items-center gap-6 flex-col">
        <Image
          src="/assets/images/illustration-thank-you.svg"
          alt="thankyou"
          width={150}
          height={150}
          className="mb-2"
        />
        <div className="p-thankyou">
          <p>You selected 4 out of 5</p>
        </div>

        <h1 className="text-2xl font-bold mt-3">Thank you!</h1>
        <p className="p-short text-center">
          We appreciate you taking the time to give a rating. If you ever need
          more support, don't hesitate to get in touch!
        </p>
      </div>
    </>
  );
};

export default page;

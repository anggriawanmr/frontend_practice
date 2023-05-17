import Image from 'next/image';

const Summary = () => {
  return (
    <div>
      <h2>Summary</h2>

      <div>
        <Image
          src="/assets/images/icon-reaction.svg"
          alt="reaction icon"
          width={30}
          height={30}
        ></Image>
        <h3>Reaction</h3>
      </div>

      <p>
        <span>80</span> / 100
      </p>
    </div>
  );
};

export default Summary;

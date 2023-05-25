import Image from 'next/image';

const Content = () => {
  return (
    <section className="section__content">
      <div className="flex__content">
        <h2 className="text-4xl font-bold">Transform your brand</h2>
        <p className="text-[color:var(--grayishBlue)] font-barlow ">
          We are a full-service creative agency specializing in helping brands
          grow fast. Engage your clients through compelling visuals that do most
          of the marketing for you.
        </p>
        <button type="button" className="button__content">
          learn more
        </button>
      </div>
      <div>
        <Image
          src="/assets/images/image-transform.jpg"
          width={500}
          height={500}
          alt="transform"
          className="w-full h-full"
        />
      </div>

      <div>
        <Image
          src="/assets/images/image-stand-out.jpg"
          width={500}
          height={500}
          alt="transform"
          className="w-full h-full"
        />
      </div>
      <div className="flex__content">
        <h2 className="text-4xl font-bold">Stand out to the right audience</h2>
        <p className="text-[color:var(--grayishBlue)] font-barlow ">
          Using a collaborative formula of designers, researchers,
          photographers, videographers, and copywriters, we'll build and extend
          your brand in digital places
        </p>
        <button type="button" className="button__content2">
          learn more
        </button>
      </div>

      <div className="relative">
        <Image
          src="/assets/images/image-graphic-design.jpg"
          width={500}
          height={500}
          alt="transform"
          className="w-full h-full"
        />
        <div className="content__last text-[color:var(--darkDesaturatedCyan)]">
          <h2 className="text-3xl mb-5">Graphic Design</h2>
          <p className="text-sm">
            Great design makes you memorable. We deliver artwork that
            underscores your brand message and captures potential clients'
            attention
          </p>
        </div>
      </div>
      <div className="relative">
        <Image
          src="/assets/images/image-photography.jpg"
          width={500}
          height={500}
          alt="transform"
          className="w-full h-full"
        />
        <div className="content__last text-[color:var(--darkBlue)]">
          <h2 className="text-3xl mb-5">Photography</h2>
          <p className="text-sm">
            Increase your credibility by getting the most stunning, high-quality
            photos that improve your business image.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Content;

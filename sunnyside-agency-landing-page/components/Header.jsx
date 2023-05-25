import Image from 'next/image';

const Header = () => {
  return (
    <div className="header">
      <Image
        src="/assets/images/image-header.jpg"
        alt="hero-image"
        width={2000}
        height={2000}
        className="absolute top-0 left-0 h-[100vh] z-[-10px]"
      />
      <div></div>
      <h1 className="heading__header">We Are Creatives</h1>

      <Image
        src="/assets/icon-arrow-down.svg"
        alt="arrow-header"
        width={1000}
        height={1000}
        className="w-5  h-20 z-20"
      />
      <div></div>
      <div></div>
    </div>
  );
};

export default Header;

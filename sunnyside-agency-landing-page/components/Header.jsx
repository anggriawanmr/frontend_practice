import Image from 'next/image';

const Header = () => {
  return (
    <div className="absolute overflow-hidden bg-cover h-screen w-100vh bg-center bg-no-repeat">
      <Image
        src="/assets/images/image-header.jpg"
        alt="hero-image"
        width={2000}
        height={2000}
      />
    </div>
  );
};

export default Header;

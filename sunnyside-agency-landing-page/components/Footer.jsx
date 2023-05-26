import Image from 'next/image';

const Footer = () => {
  return (
    <section>
      <div className="footer__image-list">
        <Image
          src="/assets/images/image-gallery-milkbottles.jpg"
          alt="Milkbottles"
          width={1000}
          height={1000}
          className="footer__image"
        />
        <Image
          src="/assets/images/image-gallery-orange.jpg"
          alt="Milkbottles"
          width={1000}
          height={1000}
          className="footer__image"
        />
        <Image
          src="/assets/images/image-gallery-cone.jpg"
          alt="Milkbottles"
          width={1000}
          height={1000}
          className="footer__image"
        />
        <Image
          src="/assets/images/image-gallery-sugarcubes.jpg"
          alt="Milkbottles"
          width={1000}
          height={1000}
          className="footer__image"
        />
      </div>

      <footer className="footer">
        <Image
          src="/assets/logo-footer.svg"
          alt="logo"
          width={1000}
          height={1000}
          className="footer__logo"
        />

        <div className="footer__links">
          <p>About</p>
          <p>Services</p>
          <p>Projects</p>
        </div>

        <div className="footer__social-images">
          <Image
            src="/assets/icon-facebook.svg"
            alt="logo"
            width={1000}
            height={1000}
            className="footer__social-media"
          />

          <Image
            src="/assets/icon-instagram.svg"
            alt="logo"
            width={1000}
            height={1000}
            className="footer__social-media"
          />

          <Image
            src="/assets/icon-twitter.svg"
            alt="logo"
            width={1000}
            height={1000}
            className="footer__social-media"
          />

          <Image
            src="/assets/icon-pinterest.svg"
            alt="logo"
            width={1000}
            height={1000}
            className="footer__social-media"
          />
        </div>
      </footer>
    </section>
  );
};

export default Footer;

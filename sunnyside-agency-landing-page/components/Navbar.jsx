import Image from 'next/image';

const Navbar = () => {
  return (
    <nav>
      <div>
        <Image
          src="/assets/logo.svg"
          width={100}
          height={100}
          alt="logo"
          className="bg-[#999] w-[100%] h-10"
        />
      </div>

      <div className="navLinks">
        <li className="navbar__menu">
          <ul>About</ul>
          <ul>Services</ul>
          <ul>Projects</ul>
        </li>
        <button className="navbar__button">CONTACT</button>
      </div>
    </nav>
  );
};

export default Navbar;

import Navbar from '@components/Navbar';
import Header from '@components/Header';
import Content from '@components/Content';
import Testimonials from '@components/Testimonials';

const Home = () => {
  return (
    <section className="relative">
      <Navbar />
      <Header />
      <Content />
      <Testimonials />
    </section>
  );
};

export default Home;

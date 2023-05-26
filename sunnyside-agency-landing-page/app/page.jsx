import Navbar from '@components/Navbar';
import Header from '@components/Header';
import Content from '@components/Content';
import Testimonials from '@components/Testimonials';
import Footer from '@components/Footer';

const Home = () => {
  return (
    <section className="relative">
      <Navbar />
      <Header />
      <Content />
      <Testimonials />
      <Footer />
    </section>
  );
};

export default Home;

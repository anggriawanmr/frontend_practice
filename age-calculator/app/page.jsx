import Image from 'next/image';

const Home = () => {
  return (
    <section className="home">
      <div className="block-content">
        <div className="date-input">
          <form>
            <label>Day</label>
            <input type="number" className="date-input__block"></input>
          </form>
          <form>
            <label>Month</label>
            <input type="number" className="date-input__block"></input>
          </form>
          <form>
            <label>Year</label>
            <input type="number" className="date-input__block"></input>
          </form>
        </div>

        <br />
      </div>
    </section>
  );
};

export default Home;

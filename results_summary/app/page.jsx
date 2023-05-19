import Summary from '@components/Summary';

const Home = () => {
  return (
    <section className="max-w-3xl grid sm:grid-cols-2 sm:rounded-2xl sm:shadow-slate-200 sm:shadow-lg overflow-hidden">
      <div className="text-center bg-blue-600 text-slate-50 sm:rounded-2xl rounded-b-2xl p-8 grid-flow">
        <h1 className="font-extrabold text-lg">Your Result</h1>

        <p className="rounded-full w-48 bg-gradient-to-b from-blue-800 m-auto aspect-square grid content-center">
          <span className="block text-8xl font-black">76</span> of 100
        </p>

        <div className="text-slate-200">
          <p>
            <span className="block text-2xl font-black">Great</span> You scored
            higher than 65% of the people who have taken these tests.
          </p>
          <p></p>
        </div>
      </div>

      <Summary />
    </section>
  );
};

export default Home;

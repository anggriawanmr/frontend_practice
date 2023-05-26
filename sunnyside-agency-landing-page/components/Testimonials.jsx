import Image from 'next/image';

const Testimonials = () => {
  return (
    <section className="flex-center section__testimonials">
      <h2>Client Testimonials</h2>
      <div className="section__testimonials-content">
        <div className="section__testimonials-single">
          <Image
            src="/assets/image-emily.jpg"
            alt="emily"
            width={100}
            height={100}
            className="testimonials-image"
          />
          <p className="testimonials-comment">
            We put our trus in sunnyside and they delivered, making sure our
            needs were met and deadlines were always hit.
          </p>
          <div>
            <h3>Emily R.</h3>
            <p className="testimonials-job">Marketing Director</p>
          </div>
        </div>

        <div className="section__testimonials-single">
          <Image
            src="/assets/image-thomas.jpg"
            alt="thomas"
            width={100}
            height={100}
            className="testimonials-image"
          />
          <p className="testimonials-comment">
            Sunnyside's enthusiasm coupled with their keen interest in our
            brand's success made it a satisfying and enjoyable experience.
          </p>
          <div>
            <h3>Thomas S.</h3>
            <p className="testimonials-job">Chief Operating Officer</p>
          </div>
        </div>

        <div className="section__testimonials-single">
          <Image
            src="/assets/image-jennie.jpg"
            alt="jennie"
            width={100}
            height={100}
            className="testimonials-image"
          />
          <p className="testimonials-comment">
            Incredible and result! Our sales increased over 400% when we worked
            with Sunnyside. Highly recommended!
          </p>
          <div>
            <h3>Jennie F.</h3>
            <p className="testimonials-job">Business Owner</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

import person from '../../../assets/images/about_us/person.jpg'
import parts from '../../../assets/images/about_us/parts.jpg'

const About = () => {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row">
        <div className='lg:w-1/2 relative'>
        <img
          src={person}
          className="w-3/4 rounded-lg shadow-2xl z-0"
        />
        <img
          src={parts}
          className="w-1/2 absolute absolute -bottom-10 right-28 w-[327px] border-8 border-white rounded-lg shadow-2xl z-10"
        />
        </div>
        <div className='lg:w-1/2 space-y-2.5'>
            <p className='py-6 text-orange-500'>About Us</p>
          <h1 className="text-5xl font-bold">We are qualified <br /> & of experience <br /> in this field</h1>
          <p className='pt-7'>
          There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomized words which do not look even slightly believable. 
          </p>
          <p className='capitalize pb-7'>the majority have suffered alteration in some form, by injected humour, or randomized words which do not look even slightly believable. </p>
          <button className="btn bg-[#ff3811] text-white">Get More Info</button>
        </div>
      </div>
    </div>
  );
};

export default About;

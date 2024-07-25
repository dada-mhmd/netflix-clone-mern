import FAQ from '../FAQ';
import Seperator from '../Seperator';

const FourthSection = () => {
  return (
    <>
      <div className='py-10 bg-black text-white'>
        <div className='flex max-w-6xl mx-auto items-center justify-center flex-col-reverse md:flex-row px-4 md:px-2'>
          <div className='flex-1 relative'>
            <img src='/kids.png' alt='kids image' className='mt-4' />
          </div>

          {/*  */}
          <div className='flex-1 text-center md:text-left'>
            <h2 className='text-4xl md:text-5xl font-extrabold mb-4'>
              Create profile for kids
            </h2>
            <p className='text-lg md:text-2xl'>
              Send kids on adventures with their favorite characters in a space
              made just for them—free with your membership.
            </p>
          </div>
        </div>

        <Seperator />
        {/* frequently asked */}
        <FAQ />
      </div>
    </>
  );
};

export default FourthSection;

const ThirdSection = () => {
  return (
    <>
      <div className='py-10 bg-black text-white'>
        <div className='flex max-w-6xl mx-auto items-center justify-center md:flex-row flex-col px-4 md:px-2'>
          {/*  */}
          <div className='flex-1 text-center md:text-left'>
            <h2 className='text-4xl md:text-5xl font-extrabold mb-4'>
              Watch everywhere
            </h2>
            <p className='text-lg md:text-xl'>
              Stream unlimited movies and TV shows on your phone, tablet,
              laptop, and TV.
            </p>
          </div>

          {/*  */}
          <div className='flex-1 relative overflow-hidden'>
            <img
              src='/device-pile.png'
              alt='device image'
              className='mt-4 z-20 relative'
            />
            <video
              playsInline
              autoPlay
              muted
              loop
              className='max-w-[63%] absolute top-2 left-1/2 -translate-x-1/2 h-4/6 z-10'
            >
              <source src='/video-devices.m4v' type='video/mp4' />
            </video>
          </div>
        </div>
      </div>
    </>
  );
};

export default ThirdSection;

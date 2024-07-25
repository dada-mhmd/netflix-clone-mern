const FirstSection = () => {
  return (
    <>
      <div className='py-10 bg-black text-white'>
        <div className='flex max-w-6xl mx-auto items-center justify-center md:flex-row flex-col px-4 md:px-2'>
          {/*  */}
          <div className='flex-1 text-center md:text-left'>
            <h2 className='text-4xl md:text-5xl font-extrabold mb-4'>
              Enjoy on your TV
            </h2>
            <p className='text-lg md:text-xl'>
              Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV,
              Blu-ray players, and more.
            </p>
          </div>

          {/*  */}
          <div className='flex-1 relative'>
            <img src='/tv.png' alt='tv image' className='mt-4 z-20 relative' />
            <video
              playsInline
              autoPlay
              muted
              loop
              className='w-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-1/2 z-20'
            >
              <source src='/hero-vid.m4v' type='video/mp4' />
            </video>
          </div>
        </div>
      </div>
    </>
  );
};

export default FirstSection;

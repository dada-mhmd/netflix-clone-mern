const SecondSection = () => {
  return (
    <>
      <div className='py-10 bg-black text-white'>
        <div className='flex max-w-6xl mx-auto items-center justify-center md:flex-row flex-col-reverse px-4 md:px-2'>
          {/*  */}
          <div className='flex-1'>
            <div className='relative'>
              <img
                src='/stranger-things-lg.png'
                alt='stranger things image'
                className='mt-4'
              />
              <div className='absolute flex items-center gap-2 bottom-5 left-1/2 -translate-x-1/2 bg-black w-3/4 lg:w-[60%] h-24 border border-slate-500 rounded-md px-2'>
                <img
                  src='/stranger-things-sm.png'
                  alt='stranger things image'
                  className='h-full'
                />
                <div className='flex justify-between items-center w-full'>
                  <div className='flex flex-col gap-0'>
                    <span className='text-lg lg:text-xl font-medium'>
                      Stranger Things
                    </span>
                    <span className='text-sm text-blue-500'>
                      Downloading...
                    </span>
                  </div>

                  <img
                    src='/download-icon.gif'
                    alt='download image'
                    className='h-12'
                  />
                </div>
              </div>
            </div>
          </div>
          {/*  */}
          <div className='flex-1 md:text-left text-center'>
            <h2 className='text-4xl md:text-5xl font-extrabold mb-4 text-balance'>
              Download your shows to watch offline
            </h2>
            <p className='text-lg md:text-xl'>
              Save your favorites easily and always have something to watch.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default SecondSection;

import Seperator from './Seperator';

const Footer = () => {
  return (
    <>
      <Seperator />

      <div className='bg-black py-10'>
        <div className='max-w-screen-lg m-0 md:ml-40 px-4 sm:px-6  text-gray-800 flex flex-wrap justify-between'>
          <div className='p-5 text-gray-300'>
            <div className='text-lg uppercase text-gray-300 font-medium'>
              Questions? Contact us.
            </div>
            <a className='my-3 block' href='/#'>
              FAQ
            </a>
            <a className='my-3 block' href='/#'>
              Investor Relations
            </a>
            <a className='my-3 block' href='/#'>
              Privacy
            </a>
            <a className='my-3 block' href='/#'>
              Speed Test
            </a>
          </div>

          <div className='p-5 text-gray-300 mt-10'>
            <div className='text-gray-300'>Help Center</div>

            <a className='my-3 block' href='/#'>
              Jobs
            </a>
            <a className='my-3 block' href='/#'>
              Cookie Preferences
            </a>
            <a className='my-3 block' href='/#'>
              Legal Notices
            </a>
          </div>

          <div className='p-5 text-gray-300 mt-10'>
            <div className='text-gray-300'>Account</div>

            <a className='my-3 block' href='/#'>
              Ways to Watch
            </a>
            <a className='my-3 block' href='/#'>
              Corporate Information
            </a>
            <a className='my-3 block' href='/#'>
              Only on Netflix
            </a>
          </div>

          <div className='p-5 text-gray-300 mt-10'>
            <div className='text-gray-300'>Media Center</div>

            <a className='my-3 block' href='/#'>
              Terms of Use
            </a>
            <a className='my-3 block' href='/#'>
              Contact Us
            </a>
          </div>
        </div>
        <p className='text-gray-300 my-6 text-center underline'>
          © {new Date().getFullYear()} Mern Netflix Clone, Built by Mohammad
          Aldada.
        </p>
      </div>
    </>
  );
};

export default Footer;

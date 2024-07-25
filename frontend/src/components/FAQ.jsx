import { useState } from 'react';
import { questions } from '../helpers/accordionQuestionsAndAnswers';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className='bg-black py-6 sm:py-8 lg:py-12'>
      <div className='mx-auto max-w-screen-2xl px-4 md:px-8'>
        <h2 className='mb-4 text-center text-4xl font-extrabold text-white md:mb-10 lg:text-5xl lg:mt-10'>
          Frequently asked questions
        </h2>

        {questions.map((item, index) => (
          <div
            key={index}
            className='mx-auto mb-4 max-w-screen-xl flex flex-col bg-[#2d2d2d] p-4 rounded-lg'
          >
            <div
              className='flex cursor-pointer justify-between gap-2 py-4 text-white'
              onClick={() => toggleAccordion(index)}
            >
              <span className='font-medium transition duration-100 md:text-2xl text-white'>
                {item.question}
              </span>
              <span
                className={`text-white ${
                  activeIndex === index ? 'rotate-180' : ''
                }`}
              >
                {activeIndex === index ? (
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='h-6 w-6'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='2'
                      d='M6 18L18 6M6 6l12 12'
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='h-6 w-6'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='2'
                      d='M12 4v16m8-8H4'
                    />
                  </svg>
                )}
              </span>
            </div>
            <p
              className={`mb-4 text-white text-2xl ${
                activeIndex === index ? 'block' : 'hidden'
              }`}
            >
              {item.answer}
            </p>
          </div>
        ))}

        <div className='w-full flex flex-col items-center justify-center mt-20 space-y-5'>
          <p className='text-xl font-medium'>
            Ready to watch? Enter your email to create or restart your
            membership.
          </p>

          <div className='flex flex-col md:flex-row gap-2 w-[50%] mx-auto items-center justify-center h-20'>
            <input
              type='text'
              className='max-w-xs w-full bg-transparent border border-[#2d2d2d] p-4 focus:ring-gray-300 focus:ring outline-none'
              placeholder='Email address'
            />
            <button className='bg-red-700 hover:bg-opacity-90 font-bold text-white text-xl p-4 px-16 rounded'>
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;

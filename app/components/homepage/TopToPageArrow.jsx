// components/TopToPageArrow.js

import Link from 'next/link';

const TopToPageArrow = () => {
  `const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };`

  return (
    <div className="fixed bottom-6 right-6">
      <a href="#" passHref>
        <button
          onClick={scrollToTop}
          className="bg-blue-700 text-white p-3 rounded-full shadow-md hover:bg-blue-800 focus:outline-none"
        >
          {/* Insert your SVG icon here */}
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-6 w-6">
            <path fillRule="evenodd" d="M10 5a1 1 0 0 1 1 1v7.586l2.293-2.293a1 1 0 1 1 1.414 1.414l-4 4a1 1 0 0 1-1.414 0l-4-4a1 1 0 1 1 1.414-1.414L9 13.586V6a1 1 0 0 1 1-1z" clipRule="evenodd" />
          </svg>
        </button>
      </a>
    </div>
  );
};

export default TopToPageArrow;

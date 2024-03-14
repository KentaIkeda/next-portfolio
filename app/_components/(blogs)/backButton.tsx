'use client';

import { useRouter } from 'next/navigation';

const BackButton = () => {

  const router = useRouter();
  const backPage = () => {
    router.back();
  }

  return ( 
    <button 
      onClick={backPage}
      className='bg-dark text-light dark:bg-light dark:text-dark w-28 h-auto py-4 flex items-center justify-center gap-x-2 text-lg rounded-md transition-all hover:text-indigo-500 hover:tracking-wider'
    >
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        width="20" 
        height="20" 
        viewBox="0 0 20 20" 
        fill="none" 
        stroke="currentColor" 
        strokeWidth="1.5" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      >
        <path d="M19 15V9"/>
        <path d="M15 15h-3v4l-7-7 7-7v4h3v6z"/>
      </svg>
      BACK
    </button>
   );
}
 
export default BackButton;
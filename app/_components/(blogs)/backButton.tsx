'use client';

import { useRouter } from 'next/navigation';

const BackButton = () => {

  const router = useRouter();
  const backPage = () => {
    router.back();
  }

  return ( 
    <button 
      onClick={() => backPage()}
      className='bg-dark text-light dark:bg-light dark:text-dark flex items-center gap-1 py-3 px-5 rounded-sm'
    >
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        width="22" 
        height="22" 
        viewBox="0 0 24 24" 
        fill="none" 
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      >
        <path d="M19 15V9"/>
        <path d="M15 15h-3v4l-7-7 7-7v4h3v6z"/>
      </svg>
      戻る
    </button>
   );
}
 
export default BackButton;
import React from 'react';
import { Dispatch, SetStateAction } from 'react';
import NavForMobile from './(ui)/navForMovile';

const HandleNav = ({
  isModal,
  setIsModal,
}: {
  isModal: boolean;
  setIsModal: Dispatch<SetStateAction<boolean>>;
}) => {
  return (
    <button
      onClick={() => setIsModal(!isModal)}
      className='lg:hidden inline-block fixed z-50 bottom-10 left-1/2 -translate-x-1/2 bg-dark dark:bg-light rounded-full shadow-cinema shadow-indigo-200 dark:shadow-zinc-950 p-2'
    >
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='30'
        height='30'
        viewBox='0 0 24 24'
        stroke='currentColor'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
        className='text-light dark:text-dark'
      >
        <line
          x1='3'
          x2='21'
          y1='6'
          y2='6'
        />
        <line
          x1='3'
          x2='21'
          y1='12'
          y2='12'
        />
        <line
          x1='3'
          x2='21'
          y1='18'
          y2='18'
        />
      </svg>
    </button>
  );
};

const MDNavigation = ({
  isModal,
  setIsModal,
}: {
  isModal: boolean;
  setIsModal: Dispatch<SetStateAction<boolean>>;
}) => {
  const pageLists = [
    { id: 1, name: 'TOP', href: '/' },
    { id: 2, name: 'PRODUCTS', href: '/products' },
    { id: 3, name: 'BLOGS', href: '/blog' },
  ];

  return (
    <>
      {isModal ? (
        <div className='h-screen w-full fixed top-1/2 left-0 -translate-y-1/2 bg-light/50'>
          <nav className='h-full w-full'>
            <ul className='h-full w-full flex flex-col items-center justify-center gap-y-4'>
              {pageLists.map((list) => {
                return (
                  <React.Fragment key={list.id}>
                    <NavForMobile
                      name={list.name}
                      url={list.href}
                      setIsModal={setIsModal}
                    />
                  </React.Fragment>
                );
              })}
            </ul>
          </nav>
        </div>
      ) : null}
    </>
  );
};

export { HandleNav, MDNavigation };

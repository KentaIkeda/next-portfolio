'use client';

import Profile from './profile';
import Title from './title';
import Navigation from './navigation';
import ThemeChanger from './(themes)/theme-switch';
import SNS from './sns';


const SideBar = () => {
  return (
    <div className=' py-5 border border-red-300 h-full w-full grid grid-flow-row'>
      <div className='text-center h-[48px]'> {/* This `text-center` for Title for Sidebar */}
        <Title isInSide={false} /> {/* falseでtext-center */}
      </div>
      <div>
        <Profile />
      </div>
      <div>
        <Navigation />
      </div>
      <div className='flex items-end justify-center pb-4'>
        <ThemeChanger />
      </div>
      <div className='flex items-start justify-center'>
        <SNS />
      </div>
    </div>
  );
}

export default SideBar;
'use client';
import React from 'react';

const TopPageSection = ({
  children
}: {
  children?: React.ReactNode
}) => {
  return (
    <div className='border border-dark dark:border-light w-full h-[42.5svh]'>
      {children}
    </div>
  );
}

export default TopPageSection;
'use client';
import React from 'react';

const TopPageSection = ({ children }: { children?: React.ReactNode }) => {
  return <div className='w-full h-[42.5svh] rounded-md'>{children}</div>;
};

export default TopPageSection;

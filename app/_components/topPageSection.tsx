import React from 'react';

const TopPageSection = ({ children }: { children?: React.ReactNode }) => {
  return <section className='w-full h-[42.5svh]'>{children}</section>;
};

export default TopPageSection;

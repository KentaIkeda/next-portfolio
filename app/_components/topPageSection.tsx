'use client';

const TopPageSection = ({
  children
}: {
  children?: React.ReactNode
}) => {
  return (
    <div className='border w-full h-full'>
      {children}
    </div>
  );
}

export default TopPageSection;
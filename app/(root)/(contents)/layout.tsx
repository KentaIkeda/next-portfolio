import Title from '@/app/_components/title';

const ContentLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className='lg:col-span-4 xl:col-span-5 w-full h-auto'>
      <div className='w-auto h-auto mt-5 ml-7'>
        <Title isInSide /> {/* trueで no text-center */}
      </div>
      <div className='w-full h-auto mt-32 mb-5'>{children}</div>
    </main>
  );
};

export default ContentLayout;

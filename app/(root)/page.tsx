import Skills from '../_components/(skills)/skills';
import Blog from '../_components/(blogs)/blog';
import TopPageSection from '../_components/topPageSection';
import { getData } from '../lib/_contentful/getData';
import Title from '../_components/title';

export default async function Home() {

  const limitedBlogs = await getData();

  return (
    <main className='lg:col-span-4 xl:col-span-5 w-full h-auto lg:flex lg:flex-col lg:justify-between'>
      <div className='w-auto h-auto mt-5 ml-7'>
        <Title isInSide /> {/* trueで no text-center */}
      </div>
      <div className='w-full h-auto mt-16 xl:mt-0'>
        <div className='xl:gap-2 lg:gap-y-20 lg:grid lg:grid-cols-1 xl:grid-cols-2 xl:grid-rows-2 w-full h-full'>
          <TopPageSection>
            <Skills />
          </TopPageSection>
          <TopPageSection>
            <Blog blogs={limitedBlogs} />
          </TopPageSection>
          <TopPageSection></TopPageSection>
          <TopPageSection></TopPageSection>
        </div>            
      </div>
    </main>
    
  );
}

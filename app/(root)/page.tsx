import Skills from '../_components/(skills)/skills';
import Blog from '../_components/(blogs)/blog';
import TopPageSection from '../_components/topPageSection';
import { getData } from '../lib/_contentful/getData';
import Title from '../_components/title';

export default async function Home() {

  const limitedBlogs = await getData();

  return (
    <main className='col-span-5 w-full h-auto flex flex-col justify-between'>
      <div className='w-auto h-auto mt-5 ml-7'>
        <Title isInSide /> {/* trueで no text-center */}
      </div>
      <div className='w-full h-auto'>
        <div className='gap-2 grid grid-cols-2 grid-rows-2 w-full h-full xl:grid-cols-1'>
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

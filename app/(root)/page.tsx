import Skills from '../_components/(skills)/skills';
import Blog from '../_components/(blogs)/blog';
import TopPageSection from '../_components/topPageSection';
import { getData } from '../lib/_contentful/getData';
import Title from '../_components/title';

export default async function Home() {
  const limitedBlogs = await getData();

  const text = 'Hello World!!';
  console.log(text.at(0));

  return (
    <main className='w-full h-full max-w-xl mx-auto lg:max-w-full lg:col-span-4 xl:col-span-5 lg:flex lg:flex-col lg:justify-between'>
      <div className='w-full h-full mt-16 xl:mt-0'>
        <div className='w-full h-full flex flex-col xl:flex-row xl:items-center'>
          <TopPageSection>
            <Skills />
          </TopPageSection>
          <TopPageSection>
            <Blog blogs={limitedBlogs} />
          </TopPageSection>
        </div>
      </div>
    </main>
  );
}

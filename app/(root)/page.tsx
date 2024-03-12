import Skills from '../_components/(skills)/skills';
import Blog from '../_components/(blogs)/blog';
import TopPageSection from '../_components/topPageSection';
import { getData } from '../lib/_contentful/getData';

export default async function Home() {

  const blogs = await getData();

  return (
    <div className='grid grid-cols-2 grid-rows-2 w-full h-full gap-2'>
      <TopPageSection>
        <Skills />
      </TopPageSection>
      <TopPageSection>
        <Blog blogs={blogs} />
      </TopPageSection>
      <TopPageSection></TopPageSection>
      <TopPageSection></TopPageSection>
    </div>
  );
}

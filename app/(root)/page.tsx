import Skills from '../_components/(skills)/skills';
import Blog from '../_components/(blogs)/blog';
import TopPageSection from '../_components/topPageSection';

export default async function Home() {
  return (
    <main className='w-full h-full max-w-xl mx-auto lg:max-w-full lg:col-span-4 xl:col-span-5 lg:flex lg:flex-col lg:justify-between'>
      <div className='w-full h-full flex flex-col xl:flex-row xl:items-center px-4'>
        <TopPageSection>
          <Skills />
        </TopPageSection>
        <TopPageSection>
          <Blog />
        </TopPageSection>
      </div>
    </main>
  );
}
